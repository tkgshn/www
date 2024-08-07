const data = [
  {
    name: "Judy Mam",
    project: "Dada.art",
    image: "judy_mam.png",
  },
  {
    name: "Beatriz Helena Ramoz",
    project: "Dada.art",
    image: "beatriz_helena_ramoz.png",
  },
  {
    name: "Kevin Owocki",
    project: "Gitcoin",
    image: "kevin_owocki.png",
  },
  {
    name: "Vitalik Buterin",
    project: "Ethereum Foundation",
    image: "vitalik_buterin.png",
  },
  {
    name: "Maïmonatou Mar",
    project: "RxC France Chapter",
    image: "maïmonatou_mar.png",
  },
  {
    name: "Jennifer Lyn Morone",
    project: "RadicalxChange Foundation",
    image: "jennifer_lyn_morone.png",
  },
  {
    name: "Glen Weyl",
    project: "RadicalxChange Foundation",
    image: "glen_weyl.png",
  },
  {
    name: "Matt Prewitt",
    project: "RadicalxChange Foundation",
    image: "matt_prewitt.png",
  },
  {
    name: "Maria Pennanen",
    project: "Accelerator Frankfurt",
    image: "maria_pennanen.png",
  },
  {
    name: "Joel Rogers",
    project: "Professor & Activist",
    image: "joel_rogers.png",
  },
  {
    name: "Shiv Malik",
    project: "Streamr",
    image: "shiv_malik.png",
  },
  {
    name: "Simon de la Rouviere",
    project: "Advisor",
    image: "simon_de_la_rouviere.png",
  },
  {
    name: "Santiago Siri",
    project: "Democracy Earth",
    image: "santiago_siri.png",
  },
  {
    name: "Rhys Lindmark",
    project: "Roote",
    image: "rhys_lindmark.png",
  },
  {
    name: "Nathan Schneider",
    project: "Exit to Community",
    image: "nathan_schneider.png",
  },
  {
    name: "Suji Yan",
    project: "Mask Network",
    image: "suji_yan.png",
  },
  {
    name: "Michel Bauwens",
    project: "P2P Foundation",
    image: "michel_bauwens.png",
  },
  {
    name: "Audrey Tang",
    project: "Digital Minister of Taiwan",
    image: "audrey_tang.png",
  },
  {
    name: "Joe Lambke",
    project: "Animate Architecture",
    image: "joe_lambke.png",
  },
  {
    name: "Puja Ohlhaver",
    project: "ClearPath Surgical",
    image: "puja_ohlhaver.png",
  },
  {
    name: "Peter Pan",
    project: "1kx and MetaCartel",
    image: "peter_pan.png",
  },
  {
    name: "Tom Lyons",
    project: "RxC Switzerland Chapter",
    image: "tom_lyons.png",
  },
  {
    name: "Christopher Kulendran Thomas",
    project: "New Eelam, Artist",
    image: "christopher_kulendran_thomas.png",
  },
  {
    name: "Joanne Cheung",
    project: "IDEO",
    image: "joanne_cheung.png",
  },
];

// Sort by last name
function compareMentors(a, b) {
  if (a.name.split(" ").pop() < b.name.split(" ").pop()) {
    return -1;
  }
  if (a.name.split(" ").pop() > b.name.split(" ").pop()) {
    return 1;
  }
  return 0;
}
data.sort(compareMentors);

module.exports = data;
