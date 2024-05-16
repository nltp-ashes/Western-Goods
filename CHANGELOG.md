## **v2.6.0 - 17/05/2024 - Minor Update**

[![Downloads](https://img.shields.io/github/downloads/nltp-ashes/Western-Goods/v2.6.0/total?label=Downloads)]()

**• Additions :**
> • Added a new device : the Garmin eTrex 10 electronic compass (Thanks @l_lun4t1c);
> • Added a new device : a Zippo lighter (Thanks @lexus_lesha, @l_lun4t1c, @lucy.fer);
> • Added lighter fuel level in the item description;
> • Added function in core script to test installation of pinup collector.
> • Added trade restrictions to the addon's items. Now, traders will only buy the type of items that they would sell.

**• Changes :**
> • Changed `readable` config key for magazines to `wg_readable`;
> • Changed some file names to avoid name conflicts;
> • Changed suppliers' trade lists. Before : food, drinks. After : food, magazines;
> • Changed barman's trade lists. Before : magazines. After : food, drinks, magazines;
> • Changed new game loadouts : replaced the GPS device with the Bic lighter;
> • Changed how the lighter illuminates. It now has a bright low range light, and a dim medium range light;
> • Simplified code handling EUR/USD trade restrictions by monkey-patching vanilla functions;
> • Removed dependency on `rax_icon_tint.script`;
> • Refactored `str_explode(...)` with `parse_list(...)`;
> • Refactored some code around to reduce code duplication;
> • Refactored duplicated code in GPS, rangefinder and compass scripts using a new utility function.

**• Bug fixes :**
> • Fixed inventory weight of Oreo being 60g instead of 154g;
> • Fixed lighter playing animation even when it wasn't selected to light up the campfire/gas lamp;
> • Fixed monkey patches logs mentioning "fire source binder" instead of "monkey patches".