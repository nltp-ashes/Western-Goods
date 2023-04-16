# WESTERN GOODS ![Latest Stable Build](https://img.shields.io/badge/latest--stable--build-1.4.4-brightgreen) ![Latest Test Build](https://img.shields.io/badge/latest--test--build-2.0.0%20RC20-yellow) ![Licence](https://img.shields.io/badge/licence-CC--BY--NC--SA%204.0-blue)

The Zone is host to people from various horizons. Overtime, the demand for goods imported from the west became such that some traders of the Zone couldn't overlook the potential profit anymore.

---

### ABOUT

This addon was originally a minor addon that added a few drinks and snack from popular brands in western countries. Overtime, it evolved into a full-size game extension, adding new mechanics, consumables, readable magazines, trade items, new unique NPCs, and even a new set of storylines. Feel free to suggest new items or ideas in general, I'll do my best to add it if it fits the addon.

---

### REQUIREMENTS

This addon **requires** the following :
1. [S.T.A.L.K.E.R. Anomaly 1.5.2](https://www.moddb.com/mods/stalker-anomaly/downloads/stalker-anomaly-151-to-152)
2. [DLTX and DXML](https://github.com/themrdemonized/STALKER-Anomaly-modded-exes)
3. [Anomaly Barter UI Framework](https://github.com/ahuyn/anomaly-barter/releases/tag/latest)

This addon **does not require** the following :
1. [Food, drug and drinks animations](https://www.moddb.com/mods/stalker-anomaly/addons/food-drug-and-drinks-animations-reuploaded) (items just won't have animations if you don't have it)
2. [Mod Configuration Menu](https://www.moddb.com/mods/stalker-anomaly/addons/anomaly-mod-configuration-menu) (edit defaults manually in western_goods_mcm.script if you don't have it)

---

### INSTALLATION

To **install** the addon :
1. Download and install the requirements;
2. Download this addon;
3. Merge the contents of the gamedata folder with your game's folder of the same name;
   1. Either with a mod manager JSGME/MO2 (highly recommended);
   2. Or manually (highly unrecommended).

To **update** the addon :
1. Delete the files from the previous version;
   1. By disabling the addon in your mod manager, and then deleting the files;
   2. Or by deleting the files one by one if you added them manually;
2. Add in the new files from the new version
    1. Either with a mod manager JSGME/MO2 (highly recommended);
    2. Or manually (highly unrecommended).

To **uninstall** the addon :
1. Start your game and open the MCM settings;
2. Enable the "Addon removal" option;
3. Load your save-game. Once loaded, save again;
4. Close your game, and remove the files added by the addon.


---

### CHANGELOG

> **v2.0.0 - 15/04/2023 - Major Update**
> ```
> • New storylines :
>    - Added a first act (3 tasks) centered around a mysterious event regarding a helicopter used by mercs to smuggle goods into the Zone;
>    - Added a second act (2 tasks), where, after prooving yourself, one of dushman's clients tasks you with a very special mission;
> • MCM integration :
>    - Added loot factor settings : one for coprse loot and one for trader loot;
>    - Added an option to have more guided tasks;
>    - Added a debug mode that prints information in the console/log to make troubleshooting easier;
>    - Added a compatibility section, where you can enable patches when WG is unable to autonomously detect the other conflicting addon;
>    - Moved addon removal into a check box in MCM;
> • New items :
>    - Added a new tech item : a BIC lighter, usable to light cigarettes and campfires;
>    - Added three new magazine : European Car magazine, EVO magazine and Gameland magazine;
>    - Added six new food items : Oreo, Mon Cheri, Ferrero Rocher, Toblerone, French MRE and a sandwich;
> • Other additions :
>    - Added psy-health regen when reading magazines (configurable in MCM);
>    - Added the ability for the western goods trader to transport via helicopoter the player to certain locations after finishing act 1;
>    - Added encyclopedia entries for some items/characters in the PDA's guide;
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
>    - Added a CTD when the Barter UI framework is missing;
>    - Added a CTD when trader_autoinject.script is outdated;
> • Bug fixes :
>    - Fixed an issue due to which the Next button would appear when reading a magazine with only 1 page;
>    - Fixed an issue due to which some items were missing from traders/corpses;
>    - Fixed incorrect calories for the Yoo-hoo chocolate drink (Thanks Servalion);
> ```

**Note 1:** v2.0.0 is not compatible with S.T.A.L.K.E.R. Anomaly 1.5.1 anymore.  
**Note 2:** v2.0.0 has a new requirement. Make sure to read **REQUIREMENTS** again.

> **v1.4.4 - 28/12/2022 - Minor Update**
> ```
> • Fixed a CTD when skinning mutants (Thanks Blasterian);
> • Fixed an issue due to which logs could get spammed with lua errors;
> • Fixed an issue due to which reading a magazines would display the wrong page for 1 frame.
> ```

> **v1.4.3 - 27/12/2022 - Hotfix**
> ```
> • Fixed a CTD when opening the inventory. I tried to make the previous fix too quickly and forgot a nil check.
> ```

> **v1.4.2 - 27/12/2022 - Hotfix**
> ```
> • Fixed an issue due to which all items appeared locked in every trader (Thanks Warad).
> ```

> **v1.4.1 - 27/12/2022 - Hotfix**
> ```
> • Added a compatibility patch for 1.5.1 users (Thanks Oktopus).
> ```

> **v1.4.0 - 27/12/2022 - Major Update**
> ```
> • Added a new unique NPC : Williams "Ashes" Heades. He will be your main source of western goods, and is located in the Book Store (Pripyat Outskirts);
> • Greatly decreased availability of western goods on other traders : Only Mercs and Freedomers have decent supplies, Bandits and Renegades smuggle a few things;
> • Added new currencies : Dollars and Euros. You can find them mainly on Mercs and Freedomers;
> • The new unique NPC will trade Dollars and Euros against goods;
> • The new unique NPC will exchange different values of bank notes for others (e.g. 1x 100$ for 2x 50$);
> • The new unique NPC will also exchange different Dollars and Euros for Roubles, if you want to cash out. He won't, however, trade Roubles for Dollars/Euros;
> • Almost completely rewrote the script that spawns items in traders/corpses, to allow for better expandability and finer tuning.
> ```

> **v1.3.0 - 20/12/2022 - Major Update**
> ```
> • Added 3 *men* magazines : PLAYBOY magazines with Chloe Khan, Nicole Whitehead and Carrie Stevens;
> • Added 2 video game magazines : Xbox : The Official Magazine March 2002 and December 2004 editions;
> • Added the ability to read magazines. So far, all 5 new magazines are readable;
> • Corrected some missing sections in the addon removal script;
> • Various small fixes & tweaks.
> ```

> **v1.2.1 - 09/12/2022 - Hotfix**
> ```
> • Fixed a CTD when talking to a trader from the "Trader" faction (Thanks ihatemylife4234).
> ```

> **v1.2.0 - 15/12/2022 - Major Update**
> ```
> • Added a new device : The GPS locator - a device you can use to locate the closest camp to your location, as well as your current map. Use it the same way you would use a watch;
> • Added 3 bottles : Grand Vin de Chateau Latour, Nestea ice tea, Yoo-hoo Chocolate Drink bottles;
> • Added 4 cans : Bavaria 86, 7UP can, Dr. Bob, Lipton Ice Tea cans;
> • Added 5 sweet snacks : Bounty, Kinder Maxi, Kinder Bueno, Kit-Kat, Milka chocolates;
> • Added 3 salted snacks : Lay's, Doritos, Pringles mini chips;
> • Added 2 tech items : ASUS Laptop, Military radio;
> • Removed "TRADE_HELPER.txt", as it took to much time to maintain.
> ```

> **v1.1.2 - 09/12/2022 - Hotfix**
> ```
> • Fixed incorrect item descriptions (Thanks Blasterian).
> ```

> **v1.1.1 - 05/12/2022 - Hotfix**
> ```
> • Fixed a compatibility issue with DirectX 8 (Thanks SEPTEMBERKID).
> ```

> **v1.1.0 - 05/12/2022 - Major Update**
> ```
> • Added 6 cans : Pepsi, Fanta, Perrier, Mountain Dew, Rockstar Energy, Monster Energy cans; 
> • Added 2 bottles : Vodka Gorbatschow, Mountain Dew bottles;
> • Added 2 snacks : M&Ms chocolate box and Mentos Fruits candies;
> • Added 1 food : Charal Cheese Hamburger;
> • Adjusted the trader offers (for Freedom especially);
> • Various small fixes & tweaks.
> ```

> **v1.0.1 - 03/12/2022 - Hotfix**
> ```
> • Fixed a compatibility issue with food from Denro 1.0 (Thanks gobravo);
> • Rearranged some of the files to avoid further conflicts (Thanks lsandoval0000);
> • Renamed all of the items to avoid further conflicts.
> ```

**Note:** v1.0.1 is not compatible with previous versions. Use the addon removal before updating to the new version.

> **v1.0.0 - 03/12/2022 - Initial Release**
> ```
> • Added 4 drinks and 4 snacks;
> • Each item has unique inventory icons;
> • Each item has unique world models;
> • Each of the 4 drinks have FDDA-ready animations.
> ```

---

### FUTURE WORKS

- Add more items (consumables, magazines, tech items);
- Add more storylines/tasks! Feel free to suggest ideas;

---

### KNOWN ISSUES

- It isn't very obvious that you can order the helicopter to attack enemies during act 1, task 2;
- The second to last stage of act 1, task 3 might be unnecessarily challenging;
- Stutters may occur when the game spawns in new NPCs.

**Note :** If you have issues, check the list of common issues (and their associated solutions) on [page 5 of the comments](https://www.moddb.com/mods/stalker-anomaly/addons/western-goods/page/5#8515571).

---

### SUPPORT & SUGGESTIONS

If you need help with anything, or if you have any suggestions of new items, you can :
- Leave a comment on [ModDB](https://www.moddb.com/mods/stalker-anomaly/addons/western-goods/) (not recommended);
- Message me on [ModDB](https://www.moddb.com/members/nltp-ashes) (recommended);
- Message me on Discord : NLTP_ASHES#0117 (recommended);
- Message me on my [Discord](https://discord.gg/7Z8S2qg) server (recommended).

---

### SPECIAL THANKS & CREDITS

Credit goes to these people for their work contained in this addon :

|           Name            |                              Motive                              |         License          |
|:-------------------------:|:----------------------------------------------------------------:|:------------------------:|
|       **GhenTuong**       |                  Reused his xr_logic_ex script                   |           N/A            |
|         **arti**          |               Reused his trader_autoinject script                |           N/A            |
|    **RavenAscendant**     |                 Reused his rax_icon_tint script                  | CC BY-NC-SA 3.0 Unported |
|    **SvetkaDystopia**     |               Produced four models for consumables               |           N/A            |
|      **Feel_Fried**       |   Reused some files from his Food, drug and drinks animations    |          PD 1.0          |
|    **RavenAscendant**     |   Wrote the code that takes control of helicopters' combat AI    |           N/A            |
|       **lauta_ro**        |               Reused part of his More Guides addon               |           N/A            |
|        **Aoldri**         |          Reused icons from his Hideout Furniture addon           |           N/A            |
|     **A.R.E.A. mod**      |                Ported some models from their mod                 |           N/A            |
|     **segaretro.org**     |        For providing the textures for the xbox magazines         |        CC BY 4.0         |
|      **archive.org**      |         For providing the textures for the men magazines         |     CC BY-NC-ND 4.0      |
| **commons.wikimedia.org** |    For providing various logos and resources used in textures    |          PD 1.0          |
|      **freepik.com**      |    For providing various logos and resources used in textures    |           N/A            |

Special thanks to these people for their help in the making of this addon :

|                  Name                   |                                           Motive                                            |
|:---------------------------------------:|:-------------------------------------------------------------------------------------------:|
|           **SvetkaDystopia**            |             For taking the time to make models for this addon, enormous thanks              |
|      **xcvb**, **RavenAscendant**       |         Help for so many things it'd be too long to list. Huge thanks to these two          |
| **Starcry\_**, **Rascal**, **lauta_ro** |                   Helped to mitigate a compatibility issue with DirectX 8                   |
|                **arti**                 |                             For making his Barter UI Framework                              |
|                **arti**                 | For having updated the barters config files to work with the newer version of his framework |

If you are able to help in the following domains, please reach out :
- Models and animations (To expand the variety of models, and add the missing use animations).
