---
paths:
  - "src/**/*.script"
---

# Lua conventions

`trader_autoinject.script` and `xr_logic_ex.script` are vendored and follow none of this. Other
addons ship them under the same filename, so they stay unmodified.

## File layout

Body sections are marked with a banner of the same 120 columns as the header:

```lua
-- ---------------------------------------------------------------------------------------------------------------------
-- Constants, global variables and imported functions
-- ---------------------------------------------------------------------------------------------------------------------
```

Recurring section names are :
- `Constants, global variables and imported functions`
  - with `-- Imported functions`, `-- Constants` sub-labels inside
- `General functions`
- `Callbacks registration`
- `<Name> class`

Indentation is 4 spaces.

## File naming

| Pattern                              | For                                                               |
|--------------------------------------|-------------------------------------------------------------------|
| `western_goods_module_<name>.script` | a module's entry point — one per `src\<module>`                   |
| `western_goods_<subsystem>.script`   | a subsystem — `utils`, `mcm`, `loot`, `flea`, `helicopter`        |
| `western_goods_class_<name>.script`  | a reusable class — `fire_source`, `light_source`                  |
| `western_goods_bind_<name>.script`   | an object binder — `object`, `lighter`                            |
| `western_goods_ui_<name>.script`     | a UI element — `compass`, `rangefinder`, `readable`               |
| `western_goods_tasks_act_<n>.script` | a storyline act                                                   |
| `modxml_western_goods*.script`       | DXML patches                                                      |

- Class instance fields are `m_`-prefixed;
- Shared helpers are aliased under `-- Imported functions`
  (`local dbg_printf = western_goods_utils.dbg_printf`).

## Locality of behaviour

> The behaviour of a unit of code should be as obvious as possible by looking only at that unit of
> code. — [Locality of Behaviour](https://htmx.org/essays/locality-of-behaviour/)

This holds at every scale :
- Reading a module is enough to know what it adds, without opening `core`.
- Reading a function is enough to know what it does, without reading the functions around it.

In practice :
- A feature lives whole in its module. When a feature moves, everything that only serves it moves
  with it; only what several modules share goes in `core`.
- A hook on someone else's code sits in the script whose behaviour it serves.
- Duplication against indirection is weighed case by case. A shared helper or base class keeps the
  logic in one place but sends the reader elsewhere to follow it; duplicated code reads on its own
  but has to be kept in sync. Neither wins by default.

## Named values

An index into a fixed-layout table carries no meaning on its own : `str_explode(value, ",")[3]`
does not say *speed*, and `pos[1]`, `pos[2]` do not say *x*, *y*. Bind every such field to a named
local before using it, and let a one-line comment carry the layout when it comes from a config :

```lua
-- anm_<name> = <hand animation>, <item animation>, <speed>, <end>
local anm_params = str_explode(value, ",")
local speed = anm_params[3]

return tonumber(speed) or 1
```

Name the fields the code actually uses, not all of them. A bare index is only fine where the table
is a genuine list and the index is a loop counter or a random pick.

## Comments

Every function gets a `--- Function used to …` block with `--- @param <name> <type>` and
`--- @return <type>` lines. Inside functions, comments are sparse and deliberate: a short line
naming a step, or what the code cannot convey — an engine quirk, an ordering requirement, a
non-obvious unit. Unfinished work is flagged `TODO : …` or `FIXME : …`, with the space before the
colon.

Comments describe what the code does, not what it does not do or how it got that way. No
"simplified", "no longer …", "instead of the old …", "X was removed" : a change's history belongs in
the commit, not the file. Mention an absence only when a reader needs it, typically a deliberate
omission someone would otherwise "fix".

## Logging

Every line starts with the addon tag and the subsystem, then the message:

| Call                                                | For                                          |
|-----------------------------------------------------|----------------------------------------------|
| `dbg_printf("[WG] <Subsystem> \| <message>", …)`    | traces, only printed with the MCM debug mode |
| `printf("[WG] <Subsystem> \| <message>", …)`        | events that should always appear             |
| `printf("~[WG] WARNING \| <Subsystem> \| …", …)`    | degraded but working                         |
| `printf("![WG] ERROR \| <Subsystem> \| …", …)`      | broken                                       |

`<Subsystem>` is a short readable name (`Utils`, `Permanent NPCs`, `Tasks Act 2`), not the file
name.

Anomaly's `printf` (`_g.script`) is not `string.format`: it only substitutes `%s`, running each
argument through `tostring` (vectors print as `x,y,z`). `%d`, `%.2f` and the like are printed
literally. Round in Lua before logging when precision matters — `string.format("%.2f", x)` as the
argument, placed in a `%s`.
