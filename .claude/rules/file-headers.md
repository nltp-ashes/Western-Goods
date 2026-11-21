---
paths:
  - "src/**/*.script"
  - "src/**/*.ltx"
  - "src/**/*.xml"
---

# File headers

Every script opens with a 120-column header block: author, `Edited`, date (`DD/MM/YYYY`), license,
then a one-line `Script used to …` description. Configs carry the same block in their own comment
syntax (`;;` for `.ltx`, `<!-- -->` for `.xml`). Where an engine interaction is subtle, or a file
is meant to be extended, the explanation goes here as prose rather than as inline comments — see
`western_goods_module_npcs.script` (how to add an NPC) or `western_goods_bind_object.script`.

The header is not an inventory of what the file does. The `Script used to …` line gives the overall
purpose, and the prose after it is reserved for what a reader cannot get from the code: how to use
the file, engine quirks, ordering requirements and other non-obvious behavior. Do not walk through
the file's features or functions one by one. A header that lists everything grows with every change
and soon becomes too long for anyone to read. When a change adds behavior, extend the header only if
that behavior hides something a reader needs to know.

`Original Author(s)` credits whoever wrote the file first; it is not changed when editing someone
else's file.

Whenever you modify a file, set its header `Date` to the current day. This applies to every file
carrying such a header, `.ltx` and `.xml` included, not just scripts. Keep the column width intact.
