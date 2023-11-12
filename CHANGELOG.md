## **NEW IN v2.4.0**

[![Downloads](https://img.shields.io/github/downloads/nltp-ashes/Western-Goods/v2.4.0/total?label=Downloads)]()

> **v2.4.0 - 12/10/2023 - Minor Update**
> ```
> • Additions:
>    - Added GitHub CI to autonomously build addon releases on GitHub;
>    - Added GitHub issues templates to ease out bug/feature/suggestion reporting;
>    - Added camera animations when using consumables (similar to vanilla Anomaly) (Thanks Rambito);
>    - Added new barters to Patrick "Odysseus" Dunbar (Thanks nekromaster);
>    - Added checks against missing translations.
> • Changes :
>    - Cleaned-up and improved various UI code;
>    - Cleaned-up and improved safety in DXML scripts;
>    - Reanimated the GPS Locator (Thanks TheParaziT);
>    - Unified file comments (and added comments to configs).
> • Bug fixes :
>    - Fixed normals on most models;
>    - Fixed a benign typo in rangefinder animations;
>    - Fixed rangefinder hud model being abnormally small;
>    - Fixed small issues in Russian translation (Thanks VodoXleb);
>    - Fixed small lag caused by repeated calls made to western_goods_utils.get_character_id(game_object) (Thanks Sark).
> ```

## **PAST-UPDATES**

[![Total Downloads](https://img.shields.io/github/downloads/nltp-ashes/Western-Goods/total.svg?label=Downloads%20(All%20Time))](https://github.com/nltp-ashes/Western-Goods/releases)

> **v2.3.0 - 12/09/2023 - Minor Update**
> ```
> • Additions :
>    - Added native integration with Device Selector Key addon.
> • Changes :
>    - Ported unpackable items (MRE and Suitcase) the vanilla unpack system.
> • Bug fixes :
>    - Fixed incorrect addon version in core script (yes, again...);
>    - Fixed missing texture descriptions for two of the quest items (Thanks Blackjeison);
> ```

> **v2.2.1 - 02/09/2023 - Hotfix**
> ```
> • Changes :
>    - Made changes to the ReadableUI again to allow for higher resolution textures;
>    - From now on, only the first page of magazines will be available in the addon, the rest being in a separate download;
> • Bug fixes :
>    - Fixed issue about icons on Dx9 (Thanks Blackjeison);
>    - Fixed energy drinks having abnormally high radiation restore (Thanks Rambito);
>    - Fixed ReadableUI not displaying correctly on other screen ratios than 16:9;
>    - Fixed ReadableUI not displaying correctly on Dx8.
> ```

> **v2.2.0 - 26/08/2023 - Major Update**
> ```
> • Additions :
>    - Added a new device : a rangefinder (Thanks Kyne's Peace and Barry Bogs);
>    - Added Russian translation (Thanks VodoXleb);
>    - Added custom icons for GPS & Rangefinder upgrade tabs;
>    - Added various items to stashes loot pool (Thanks user3255);
> • Changes :
>    - Redesigned how the Magazine UI (rebranded Readable UI) works, to allow for smaller textures;
>    - The Readable UI will now not display properly on DX8. Use a more modern renderer to avoid issues;
>    - Compressed the textures used for readables/magazines;
>    - Cleaned-up code to generate loot in corpses/traders;
>    - Improved Bandit's note UI quality (Thanks Rascal);
>    - Improved Stash's map UI quality (Thanks Rascal);
>    - Removed the fixed models_selflight_det.s shader from the main addon and into an optional fix;
> • Bug fixes :
>    - Resolved a minor indirect conflict with 'New Levels' (Thanks Rocky.Stone.Rogers);
>    - Fixed a quest item being marked as readable, or it wasn't;
>    - Fixed wrong addon version in core script;
> ```

> **v2.1.1 - 22/06/2023 - Hotfix**
> ```
> • Bug fixes :
>    - Fixed an issue that caused Act 3, Task 3 to soft-lock (Thanks tundereczka);
> ```

> **v2.1.0 - 03/06/2023 - Major Update**
> ```
> • New storylines :
>    - Added a new storyline (4 tasks), help Okleksandr Cherchenko find out what happened to his brother;
> • Additions :
>    - Added two new NPCs : The Cherchenko brothers.
>    - Added a new system : Flea Market. Purchase limited offers containing a fixed set of items, but at a discount;
>    - Added native integration with the Pinup Collector addon;
>    - Added new PDA entries for the new NPCs, and the Flea Market system;
>    - Added MCM option to show/hide task target during emissions/psi-storms, to go with the new capabilities of the GPS.
>    - Other back-end additions.
> • Changes :
>    - The GPS Locator is now a full fledged 3D device (Thanks Barry Bogs);
>    - Generalized the EUR/USD trade system so it can be used by multiple NPCs;
>    - Removed the need tp have the Barter UI Framework installed (now a soft requirement);
>    - Removed the need to have trader_autoinject.script up-to-date;
>    - Removed the CTD when the Barter UI is missing;
>    - Removed the CTD when trader_autoinject.script is outdated;
>    - Updated trader_autoinject.script;
>    - Other minor/back-end changes.
> • Bug fixes :
>    - Fixed issue from vanilla Anomaly 1.5.2 where detectors had transparent displays (Thanks RavenAscendant & Lucy)
>    - Fixed a small coding error in the Helicopters API;
>    - Fixed a forgotten placeholder in Williams Heades's encyclopedia entry;
>    - Fixed Golubev Nikolaj missing his start dialog;
>    - Other minor bug fixes.
> ```

> **v2.0.2 - 03/05/2023 - Hotfix**
> ```
> • Bug fixes :
>    - Fixed a CTD when using GPS Locator on debug map (Thanks |Сэмюел);
>    - Fixed GPS locator having two 'Use' options in context menu (Thanks |Сэмюел).
> ```

> **v2.0.1 - 25/04/2023 - Hotfix**
> ```
> • Bug fixes :
>    - Fixed a CTD when navigating the debug menu (Thanks Colombo2022);
> ```

> **v2.0.0 - 23/04/2023 - Major Update**
> ```
> • New storylines :
>    - Added a first act (3 tasks) centered around a mysterious event regarding a helicopter used by mercs to smuggle goods into the Zone;
>    - Added a second act (2 tasks), where, after prooving yourself, one of dushman's clients tasks you with a very special mission.
> • MCM integration :
>    - Added loot factor settings : one for coprse loot and one for trader loot;
>    - Added an option to have more guided tasks;
>    - Added a debug mode that prints information in the console/log to make troubleshooting easier;
>    - Added a compatibility section, where you can enable patches when WG is unable to autonomously detect the other conflicting addon;
>    - Moved addon removal into a check box in MCM.
> • New items :
>    - Added a new tech item : a BIC lighter, usable to light cigarettes and campfires;
>    - Added three new magazine : European Car magazine, EVO magazine and Gameland magazine;
>    - Added six new food items : Oreo, Mon Cheri, Ferrero Rocher, Toblerone, French MRE and a sandwich.
> • Other additions :
>    - Added psy-health regen when reading magazines (configurable in MCM);
>    - Added the ability for the western goods trader to transport via helicopoter the player to certain locations after finishing act 1;
>    - Added encyclopedia entries for some items/characters in the PDA's guide.
> • Other changes :
>    - Changed most of the icons for items to newer, high quality ones;
>    - Changed the corpse loot generation logic : you can now get multiple items per corpse (upto five by default, configurable in MCM);
>    - Changed the GPS locator logic : it now has a slightly higher chance of finding the name of your location;
>    - Changed the trading logic with the western goods trader : now you actually have to pay with Euros/Dollars;
>    - Changed the general loot availability : western goods are now a lot rarer to find on bodies;
>    - Externalized all the changes made to BarterUI. Western Goods won't redistribute the framework anymore.
> • Safety checks for proper addon installation :
>    - Added a CTD when using a different game version than Anomaly 1.5.2;
>    - Added a CTD when DXML is missing;
>    - Added a CTD when LUA unlocalizer is missing;
>    - Added a CTD when the Barter UI framework is missing;
>    - Added a CTD when trader_autoinject.script is outdated.
> • Bug fixes :
>    - Fixed an issue due to which the Next button would appear when reading a magazine with only 1 page;
>    - Fixed an issue due to which some items were missing from traders/corpses;
>    - Fixed incorrect calories for the Yoo-hoo chocolate drink (Thanks Servalion).
> ```
>
> **Note 1:** v2.0.0 is not compatible with S.T.A.L.K.E.R. Anomaly 1.5.1 anymore.  
> **Note 2:** v2.0.0 has a new requirement. Make sure to read **REQUIREMENTS** again.

> **v1.4.4 - 28/12/2022 - Minor Update**
> ```
> • Bug fixes :
>    - Fixed a CTD when skinning mutants (Thanks Blasterian);
>    - Fixed an issue due to which logs could get spammed with lua errors;
>    - Fixed an issue due to which reading a magazines would display the wrong page for 1 frame.
> ```

> **v1.4.3 - 27/12/2022 - Hotfix**
> ```
> • Bug fixes :
>    - Fixed a CTD when opening the inventory. I tried to make the previous fix too quickly and forgot a nil check.
> ```

> **v1.4.2 - 27/12/2022 - Hotfix**
> ```
> • Bug fixes :
>    - Fixed an issue due to which all items appeared locked in every trader (Thanks Warad).
> ```

> **v1.4.1 - 27/12/2022 - Hotfix**
> ```
> • Others :
>    - Added a compatibility patch for 1.5.1 users (Thanks Oktopus).
> ```

> **v1.4.0 - 27/12/2022 - Major Update**
> ```
> • Additions :
>    - Added new currencies : Dollars and Euros. You can find them mainly on Mercs and Freedomers;
>    - Added a new unique NPC : Williams "Ashes" Heades. He will be your main source of western goods, and is located in the Book Store (Pripyat Outskirts);
>    - The new unique NPC will trade Dollars and Euros against goods;
>    - The new unique NPC will exchange different values of bank notes for others (e.g. 1x 100$ for 2x 50$);
>    - The new unique NPC will also exchange different Dollars and Euros for Roubles, if you want to cash out. He won't, however, trade Roubles for Dollars/Euros;
> • Changes :
>    - Greatly decreased availability of western goods on other traders : Only Mercs and Freedomers have decent supplies, Bandits and Renegades smuggle a few things;
>    - Almost completely rewrote the script that spawns items in traders/corpses, to allow for better expandability and finer tuning.
> ```

> **v1.3.0 - 20/12/2022 - Major Update**
> ```
> • New items :
>    - Added 3 *men* magazines : PLAYBOY magazines with Chloe Khan, Nicole Whitehead and Carrie Stevens;
>    - Added 2 video game magazines : Xbox : The Official Magazine March 2002 and December 2004 editions;
> • Other additions :
>    - Added the ability to read magazines. So far, all 5 new magazines are readable;
> • Bug fixes :
>    - Fixed addon removal script not deleting some items;
>    - Various small fixes & tweaks.
> ```

> **v1.2.1 - 09/12/2022 - Hotfix**
> ```
> • Bug fixes :
>    - Fixed a CTD when talking to a trader from the "Trader" faction (Thanks ihatemylife4234).
> ```

> **v1.2.0 - 15/12/2022 - Major Update**
> ```
> • New items :
>    - Added a new device : The GPS locator - a device you can use to locate the closest camp to your location, as well as your current map. Use it the same way you would use a watch;
>    - Added 3 bottles : Grand Vin de Chateau Latour, Nestea ice tea, Yoo-hoo Chocolate Drink bottles;
>    - Added 4 cans : Bavaria 86, 7UP can, Dr. Bob, Lipton Ice Tea cans;
>    - Added 5 sweet snacks : Bounty, Kinder Maxi, Kinder Bueno, Kit-Kat, Milka chocolates;
>    - Added 3 salted snacks : Lay's, Doritos, Pringles mini chips;
>    - Added 2 tech items : ASUS Laptop, Military radio;
> • Others :
>    - Removed "TRADE_HELPER.txt", as it took to much time to maintain.
> ```

> **v1.1.2 - 09/12/2022 - Hotfix**
> ```
> • Bug fixes :
>    - Fixed incorrect item descriptions (Thanks Blasterian).
> ```

> **v1.1.1 - 05/12/2022 - Hotfix**
> ```
> • Bug fixes :
>    - Fixed a compatibility issue with DirectX 8 (Thanks SEPTEMBERKID).
> ```

> **v1.1.0 - 05/12/2022 - Major Update**
> ```
> • New items :
>    - Added 6 cans : Pepsi, Fanta, Perrier, Mountain Dew, Rockstar Energy, Monster Energy cans; 
>    - Added 2 bottles : Vodka Gorbatschow, Mountain Dew bottles;
>    - Added 2 snacks : M&Ms chocolate box and Mentos Fruits candies;
>    - Added 1 food : Charal Cheese Hamburger;
> • Changes :
>    - Adjusted the trader offers (for Freedom especially);
> • Bug fixes :
>    - Various small fixes & tweaks.
> ```

> **v1.0.1 - 03/12/2022 - Hotfix**
> ```
> • Bug fixes :
>    - Fixed a compatibility issue with food from Denro 1.0 (Thanks gobravo);
>    - Rearranged some of the files to avoid further conflicts (Thanks lsandoval0000);
>    - Renamed all of the items to avoid further conflicts.
> ```
>
> **Note:** v1.0.1 is not compatible with previous versions. Use the addon removal before updating to the new version.

> **v1.0.0 - 03/12/2022 - Initial Release**
> ```
> • New items :
>    - Added 4 drinks and 4 snacks;
>    - Each item has unique inventory icons;
>    - Each item has unique world models;
>    - Each of the 4 drinks have FDDA-ready animations.
> ```