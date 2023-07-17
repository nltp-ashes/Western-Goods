# WESTERN GOODS [![Latest Stable Build](https://img.shields.io/badge/latest--stable--build-2.1.1-brightgreen)](https://github.com/nltp-ashes/Western-Goods/releases/latest) [![Latest Test Build](https://img.shields.io/badge/latest--test--build-none-yellow)](https://github.com/nltp-ashes/Western-Goods/releases/test) [![License](https://img.shields.io/badge/licence-CC--BY--NC--SA%204.0-blue)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

The Zone is host to people from various horizons. Overtime, the demand for goods imported from the west became such that some traders of the Zone couldn't overlook the potential profit anymore.

---

### ABOUT

This addon was originally a minor addon that added a few drinks and snack from popular brands in western countries. Overtime, it evolved into a full-size game extension, adding new mechanics, consumables, readable magazines, trade items, new unique NPCs, and even a new set of storylines. Feel free to suggest new items or ideas in general, I'll do my best to add it if it fits the addon.

|                                                                                                                                 |                                                          Illustrations                                                           |                                                                                                                                            |
|:-------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------:|
|     ![Showcase Food](https://media.moddb.com/images/members/5/4575/4574850/profile/moddb_showcase_1.png) _New food/snacks_      |      ![Showcase Drinks](https://media.moddb.com/images/members/5/4575/4574850/profile/moddb_showcase_2.1.png) _New drinks_       | ![Showcase Magazines](https://media.moddb.com/images/members/5/4575/4574850/profile/moddb_showcase_4.1.png) _New (and readable) magazines_ |
| ![Showcase GPS](https://media.moddb.com/images/members/5/4575/4574850/profile/moddb_showcase_7.1.png) _New device: GPS Locator_ | ![Showcase Tech](https://media.moddb.com/images/members/5/4575/4574850/profile/moddb_showcase_3.3.png) _New technological items_ |   ![Showcase Rangefinder](https://media.moddb.com/images/members/5/4575/4574850/profile/moddb_showcase_8.png) _New device: Rangefinder_    |
|     ![Showcase Tasks](https://media.moddb.com/images/members/5/4575/4574850/profile/moddb_showcase_6.png) _New storylines_      |         ![Showcase NPCs](https://media.moddb.com/images/members/5/4575/4574850/profile/moddb_showcase_5.png) _New NPCs_          |     ![Showcase Mechanics](https://media.moddb.com/images/members/5/4575/4574850/profile/moddb_showcase_9.png) _New gameplay features_      |

---

### REQUIREMENTS

These addons are **absolutely required** in order for Western Goods to work :
1. [S.T.A.L.K.E.R. Anomaly 1.5.2](https://www.moddb.com/mods/stalker-anomaly/downloads/stalker-anomaly-151-to-152);
2. [DLTX and DXML](https://github.com/themrdemonized/STALKER-Anomaly-modded-exes).

These addons can be used to enrich the experience, but **aren't required** :
1. [Food, drug and drinks animations](https://www.moddb.com/mods/stalker-anomaly/addons/food-drug-and-drinks-animations-reuploaded) (enables use animations for some consumables);
2. [Anomaly Barter UI Framework](https://github.com/ahuyn/anomaly-barter/releases/tag/latest) (allows you to make EUR/USD/RUB currency exchanges);
3. [Pinup Collector](https://www.moddb.com/mods/stalker-anomaly/addons/pinup-collector) (allows you to collect some magazine pages to your wallet);
4. [Mod Configuration Menu](https://www.moddb.com/mods/stalker-anomaly/addons/anomaly-mod-configuration-menu) (allows you to customize some options about the addon).

---

### INSTALLATION

To **install** the addon :
1. Download and install the requirements;
2. Download this addon;
3. Merge the contents of the gamedata folder with your game's folder of the same name;
   - Either with a mod manager JSGME/MO2 (highly recommended);
   - Or manually (highly unrecommended).

To **update** the addon :
1. Delete the files from the previous version;
   - By disabling the addon in your mod manager, and then deleting the files;
   - Or by deleting the files one by one if you added them manually;
2. Add in the new files from the new version;
   - Either with a mod manager JSGME/MO2 (highly recommended);
   - Or manually (highly unrecommended).

To **uninstall** the addon :
1. Start your game and open the MCM settings;
2. Enable the "Addon removal" option;
3. Load your save-game. Once loaded, save again;
4. Close your game, and remove the files added by the addon.

---

### CHANGELOG

[![Total Downloads](https://img.shields.io/github/downloads/nltp-ashes/Western-Goods/total.svg)](https://github.com/nltp-ashes/Western-Goods/releases) [![Latest Release Downloads](https://img.shields.io/github/downloads/nltp-ashes/Western-Goods/latest/total.svg)](https://github.com/nltp-ashes/Western-Goods/releases/latest)

> **v2.2.0 - 17/07/2023 - Major Update**
> ```
> • Additions :
>    - Added a new device : a rangefinder (Thanks Kyne's Peace and Barry Bogs);
> • Changes :
>    - Redesigned how the Magazine UI works, to allow for smaller textures;
>    - Compressed the textures used for readables/magazines;
> • Bug fixes :
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

---

### FUTURE WORKS

You can find a Trello board about the development of the addon by following this [link](https://trello.com/b/HBWc6R8g/development-board).

If you would like to help development for future updates, you can :
1. Contribute to the addon, either by [getting in touch with me](https://github.com/nltp-ashes/Western-Goods#support--suggestions) or [creating a fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of the addon and [creating a pull-request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) on the addon's [GitHub repository](https://github.com/nltp-ashes/Western-Goods);
2. Help by play-testing updates by [getting Release Candidates builds](https://github.com/nltp-ashes/Western-Goods/releases/tag/test) on the addon's GitHub repository.

---

### KNOWN ISSUES

- Hands mesh might collide with rangefinder when aiming in;
- Stutters may occur when the game spawns in new NPCs;

**Note :** If you have issues, check the list of common issues (and their associated solutions) on [page 5 of the comments](https://www.moddb.com/mods/stalker-anomaly/addons/western-goods/page/5#8515571).

---

### SUPPORT & SUGGESTIONS

If you need help with anything, or if you have any suggestions, you can :
- ✅ Message me on [ModDB](https://www.moddb.com/members/nltp-ashes) (recommended);
- ✅ Message me on Discord : @nltp_ashes (formerly NLTP_ASHES#0117) (recommended);
- ✅ Message me on my [Discord](https://discord.gg/7Z8S2qg) server (recommended).
- ⚠️ Leave a comment on [ModDB](https://www.moddb.com/mods/stalker-anomaly/addons/western-goods/) (not recommended);

---

### SPECIAL THANKS & CREDITS

Credit goes to these people for their work contained in this addon :

|                                   Name                                    |                                     Motive                                      |                                    License                                     |
|:-------------------------------------------------------------------------:|:-------------------------------------------------------------------------------:|:------------------------------------------------------------------------------:|
|         **[Barry Bogs](https://www.moddb.com/members/barrybogs)**         |            Adapted the Rangefinder model on their set of animations             |                                  Proprietary                                   |
|       **[Kyne's Peace](https://www.moddb.com/members/kynespeace)**        |               Ported and prepared the Rangefinder model for X-Ray               |                                  Proprietary                                   |
|        **[valterjherson1](https://sketchfab.com/valterjherson1)**         |              Reused his 3D model of a SIG SAUER KILO5K Rangefinder              |           [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)            |
|         **[Barry Bogs](https://www.moddb.com/members/barrybogs)**         |              Adapted the GPS locator model on Dosimeter animations              |                                  Proprietary                                   |
|         **[GhenTuong](https://www.moddb.com/members/ghentuong)**          |                          Reused his xr_logic_ex script                          |                                  Proprietary                                   |
|             **[arti](https://www.moddb.com/members/artifax)**             |                       Reused his trader_autoinject script                       |                                  Proprietary                                   |
|    **[RavenAscendant](https://www.moddb.com/members/ravenascendant)**     |                         Reused his rax_icon_tint script                         | [CC BY-NC-SA 3.0 Unported](https://creativecommons.org/licenses/by-nc-sa/3.0/) |
|    **[SvetkaDystopia](https://www.moddb.com/members/svetkadystopia)**     |                      Produced four models for consumables                       |                                  Proprietary                                   |
|        **[Feel_Fried](https://www.moddb.com/members/feel-fried)**         |           Reused some files from his Food, drug and drinks animations           |          [PD 1.0](https://creativecommons.org/publicdomain/mark/1.0/)          |
|    **[RavenAscendant](https://www.moddb.com/members/ravenascendant)**     |           Wrote the code that takes control of helicopters' combat AI           |                                  Proprietary                                   |
|      **[lauta_ro](https://www.moddb.com/members/lautaro1624971758)**      |                      Reused part of his More Guides addon                       |                                  Proprietary                                   |
|         **[HarukaSai](https://www.moddb.com/members/funkypunk)**          |                       Reused one of his script functions                        |                                  Proprietary                                   |
|      **[MrDemonized](https://www.moddb.com/members/themrdemonized)**      |                     Reused multiple of his script functions                     |                                  Proprietary                                   |
|            **[Aoldri](https://www.moddb.com/members/aoldri)**             |                  Reused icons from his Hideout Furniture addon                  |                                  Proprietary                                   |
|                **[SODAZ](https://www.youtube.com/@SODAZ)**                |                    Adapted his fan film into an in-game task                    |                                  Proprietary                                   |
|            **[A.R.E.A. mod](https://www.moddb.com/mods/area)**            |                        Ported some models from their mod                        |                                  Proprietary                                   |
|       **[Anomaly mod](https://www.moddb.com/mods/stalker-anomaly)**       | For providing such a good modding base, and for their assets used in this addon |                                  Proprietary                                   |
|                **[segaretro.org](https://segaretro.org/)**                |                For providing the textures for the xbox magazines                |           [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)            |
|                  **[archive.org](https://archive.org/)**                  |                For providing the textures for the men magazines                 |     [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)      |
| **[commons.wikimedia.org](https://commons.wikimedia.org/wiki/Main_Page)** |           For providing various logos and resources used in textures            |          [PD 1.0](https://creativecommons.org/publicdomain/mark/1.0/)          |
|                **[freepik.com](https://www.freepik.com/)**                |           For providing various logos and resources used in textures            |     [License](https://www.freepikcompany.com/legal#nav-freepik-agreement)      |

Special thanks to these people for their help in the making of this addon :

|                                                                                                               Name                                                                                                                |                                                 Motive                                                  |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------:|
|                                                          **[Lucy](https://www.moddb.com/members/r3zy)**, **[MrDemonized](https://www.moddb.com/members/themrdemonized)**                                                          |      For fixing the issue that caused 3D UIs to be transparent when not backed by another texture       |
|                                                      **[Barry Bogs](https://www.moddb.com/members/barrybogs)**, **[Kyne's Peace](https://www.moddb.com/members/kynespeace)**                                                      |              For dedicating some of their free time to helping me with modeling/animation               |
|                                                        **[RavenAscendant](https://www.moddb.com/members/ravenascendant)**, **[Lucy](https://www.moddb.com/members/r3zy)**                                                         | Helped to mitigate an issue from vanilla Anomaly 1.5.2 that caused detectors displays to be transparent |
|                                                                                                             **__R3D**                                                                                                             |              For submitting such a well-presented idea that lead to the Flea Market system              |
| **[NLTP_JODYE](https://www.moddb.com/members/nltp-jodye), [Niko](https://www.moddb.com/members/polishcow1), [NLTP_DEV](https://www.moddb.com/members/nltp-dev), Sark, [ItsErisContent](https://www.youtube.com/@ItsErisContent)** |                            For play-testing pre-release builds of the addon                             |
|                                                                                **[RavenAscendant](https://www.moddb.com/members/ravenascendant)**                                                                                 |                    For providing help with adding native Pinup Collector integration                    |
|                                                                                **[SvetkaDystopia](https://www.moddb.com/members/svetkadystopia)**                                                                                 |                   For taking the time to make models for this addon, enormous thanks                    |
|                                                        **[xcvb](https://www.moddb.com/members/bvcx)**, **[RavenAscendant](https://www.moddb.com/members/ravenascendant)**                                                         |               Help for so many things it'd be too long to list. Huge thanks to these two                |
|                                               **[Starcry_](https://www.moddb.com/members/starcry666)**, **Rascal**, **[lauta_ro](https://www.moddb.com/members/lautaro1624971758)**                                               |                         Helped to mitigate a compatibility issue with DirectX 8                         |
|                                                                                         **[arti](https://www.moddb.com/members/artifax)**                                                                                         |                                   For making his Barter UI Framework                                    |
|                                                                                         **[arti](https://www.moddb.com/members/artifax)**                                                                                         |       For having updated the barters config files to work with the newer version of his framework       |

---

### LICENSE

Everything contained in Western Goods and made by me, NLTP_ASHES, is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

This means you're allowed to redistribute and/or adapt the work, as long as you respect the following criteria :
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- **NonCommercial** — You may not use the material for commercial purposes (this includes donations).
- **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

For the work that wasn't made by me, unless a licence is specified in the [Credits](#special-thanks--credits) or in the files themselves, consider these works proprietary. If you want to reuse those, please get in touch with their original authors.
