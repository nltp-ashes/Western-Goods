// PostToolUse hook for Edit|Write. Checks the edited file against the addon's mechanical rules :
//   - CRLF line endings on text files (core.autocrlf=true, the working tree is CRLF)
//   - header Date set to today on files carrying a header block
//   - luac -p syntax check on .script files, skipped when env/.env has no LUAC_PATH
// Problems go to stderr with exit code 2, which feeds them back to Claude.

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const ENV_FILE = path.join(__dirname, "..", "..", "env", ".env");
const CRLF_EXTENSIONS = [".script", ".ltx", ".xml", ".s", ".ps", ".vs", ".gs", ".cs", ".h", ".md"];
const HEADER_LINES = 15;

// <KEY>=<value>, one per line, # for comments, values optionally wrapped in matching '' or ""
function readEnv() {
    const env = {};
    if (!fs.existsSync(ENV_FILE)) return env;
    for (const line of fs.readFileSync(ENV_FILE, "utf8").split(/\r?\n/)) {
        const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
        if (!match) continue;
        const value = match[2].replace(/^(['"])(.*)\1$/, "$2");
        if (value) env[match[1]] = value;
    }
    return env;
}

const input = JSON.parse(fs.readFileSync(0, "utf8"));
const file = (input.tool_input && input.tool_input.file_path) || "";
const ext = path.extname(file).toLowerCase();

if (!file || !fs.existsSync(file)) process.exit(0);

const problems = [];
const text = fs.readFileSync(file, "latin1");

if (CRLF_EXTENSIONS.includes(ext)) {
    const bareLf = (text.match(/(^|[^\r])\n/g) || []).length;
    if (bareLf > 0) {
        problems.push(`${bareLf} line(s) end in bare LF; the working tree is CRLF. Restore the CRs.`);
    }
}

const header = text.split("\n", HEADER_LINES).join("\n");
const dateMatch = header.match(/Date : (\d{2}\/\d{2}\/\d{4})/);
if (dateMatch) {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const today = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;
    if (dateMatch[1] !== today) {
        problems.push(`Header Date is ${dateMatch[1]}; set it to ${today} and keep the column width.`);
    }
}

const luacPath = readEnv().LUAC_PATH;
if (ext === ".script" && luacPath) {
    const luac = spawnSync(luacPath, ["-p", file], { encoding: "utf8" });
    if (luac.error) {
        problems.push(`Could not run luac : ${luac.error.message}`);
    } else if (luac.status !== 0) {
        problems.push(`luac -p failed :\n${(luac.stderr || luac.stdout).trim()}`);
    }
}

if (problems.length > 0) {
    process.stderr.write(`${path.basename(file)} :\n- ${problems.join("\n- ")}\n`);
    process.exit(2);
}
