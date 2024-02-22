## **v2.5.0 - 20/02/2024 - Minor Update**

[![Downloads](https://img.shields.io/github/downloads/nltp-ashes/Western-Goods/v2.5.0/total?label=Downloads)]()

**• Additions :**
> • Added encyclopedia articles for lighter and rangefinder;
> • Added upgrade icon for lighter;
> • Added rangefinder to Flea Market item pool;
> • Added support for New Levels for the GPS Locator;
> • Added ability for the lighter to turn on Hideout Furniture's gas lamp item;
> • Added support for ama-zone. Western Goods items will now be available in the list;
> • Added the Milspec PDA to the `pda_sections` in `western_goods_utils.validate_is_pda` (Thanks Tosox).

**• Changes :**
> • Changed GPS Locator code to improve performance;
> • Changed configs, hands, item and camera anims of consumables to decouple them from FDDA;
> • Changed items and hands animation filenames (as well as their references in .ogf files);
> • Changed missing translation placeholder to show the ID of the missing string;
> • Changed loot parameters for lighter and rangefinder;
> • Changed the code running the lighter from a 3D UI to an object binder (Thanks Aoldri and RavenAscendant);
> • Changed how the lighter behaves : you can now light stuff, even if the item is in the backpack;
> • Changed how the lighter behaves : the animation when lighting something up only plays when the device is drawn;
> • Changed how the lighter behaves : if the player has two lighters, the one in the device slot will always be used first;
> • Changed "night-vision mode" option to not imply that the rangefinder has actual NV abilities (Thanks Motorolª);
> • Changed monkey-patches to use a new system able to dynamically resolve the correct monkey-patch to apply;
> • Removed unused sections, models and textures;
> • Refactored loot generation into a separate script;
> • Refactored DXML files into a single file to reduce the number of scripts;
> • Refactored DLTX files for system.ltx into two files : one for overrides and one for definitions.

**• Bug fixes :**
> • Fixed rangefinder being marked as repairable by helmet repair kits;
> • Fixed lighter and rangefinder not having parts;
> • Fixed missing translations check not properly gathering the list of all string ids;
> • Fixed rangefinder having infinite zoom (Thanks Motorolª);
> • Fixed lighter being able to light cigarettes even when out of fuel (Thanks Tosox).

