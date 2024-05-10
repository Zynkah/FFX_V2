export const zanarkandEnemies = [
  {
    id: 1,
    name: "Sinscales",
    hp: "100",
    mp:'0',
    ap: "0",
    gil: "0",
    drop: "N/A",
    steal: "N/A",
    str: "30",
    def: "1",
    mag: "1",
    mag_def: "1",
    agl: "30",
    luck: "0",
    eva: "0",
    acc: "0",
  },
  {
    id: 2,
    name: "Sinspawn",
    hp: "2400",
    mp: '400',
    ap: "0",
    gil: "0",
    drop: "N/A",
    steal: "N/A",
    str: "1",
    def: "1",
    mag: "5",
    mag_def: "1",
    agl: "9",
    luck: "10",
    eva: "0",
    acc: "0",
  },
];

export const zanarkandStory = [
  {
    id: 1,
    title: "The Stadium in Ruins",
    description:
      " During the exciting blitzball match, Zanarkand gets attacked by Sin! As this occurs, Tidus falls from about and lands in the rubble outside. Tidus runs down the ramp until he spots Auron and follows him into the city streets.",
  },
  {
    id: 2,
    title: "The Invasion",
    description:
      "Tidus and Auron watch as a large monster crashes into a nearby building. A swarm of Sinscales emanate from its tail and land in front of the duo. Auron then hands Tidus a <b>Longsword</b>. They eliminate the enemies and move to the next area.",
  },
  {
    id: 3,
    title: "Progeny of Sin",
    description:
      "The twosome finally reach the location where the gigantic creature has crash-landed. The fight with the boss begins.",
  },
];

export const zanarkandBoss = [
  {
    id:1,
    title: "Sinspawn Ammes",
    magic:
      "Demi: This is a black magic spell that reduces the character HP only by a certain percentage.",
    description_1:
      "This boss gets to attack first, and always casts a spell called Demi. Since thiss is the monster's lone attack, it cannot kill Tidus and Auron! So don't worry about healing your characters, just attack.",
    auron_link: "/character/auron",
    description_2:
      "Tidus and Auron start this battle with their Overdrive guages nearly full. The Sinspawn's first attack is usually enough to send Auron's guage over the edge. When it's Auron's turn to attack, press the left directional button to access teh Overdrive Menu. Select his Overdrive, called Bushido, and execute his Dragon Fang attack. When the countdown starts, quickly enter the commands displayed on-screen. If you can push the right buttons before time runs out, the attack will be executed at maximum power.The Dragon Fang should eliminate all the Sinscales in front of the boss, thus enabling you to concentrate the rest of your attacks on the Sinspawn.",
    tidus_link: "/characters/tidus",
    description_3:
      "Tidus's Overdrive is called Swordsplay. When the countdown starts, a marker races across a thin meter on-screen. Press the X (PlayStaion Controller) button when the marker is directly in the center of the meter to execute the Overdrive. The strength of the attack is determined by the amount of time left on the clock.",
    description_4:
      "After using both characters' Overdrives, keep attacking the Sinspawn, chopping off some of its tentacles each time. Auron's Power Break ability is useless in this fight, because the creature only attacks with magic. After destroying all of the tentacles, the battle ends.This boss has no weaknesses, does not absorb any magic, has no immunities, and does not have any half damages.",
  },
];
