import { ImageData } from "@/lib/ImageData";

const IMAGE_URL = "/favorites-images";
type FavoriteItem = {
  name: string;
  link: string;
  category: string;
  imageData: ImageData;
};
export const FAVORITES_DATA: FavoriteItem[] = [
  {
    name: "Stanley Parable",
    link: "https://store.steampowered.com/app/221910/The_Stanley_Parable/",
    category: "video game",
    imageData: {
      url: `${IMAGE_URL}/stanley-parable.jpg`,
      pixelWidth: 220,
      pixelHeight: 220,
      alt: "Stanley Parable",
    },
  },
  {
    name: "Bobiverse Series",
    category: "novel",
    link: "https://www.goodreads.com/series/192752-bobiverse",
    imageData: {
      url: `${IMAGE_URL}/bobiverse.jpg`,
      pixelWidth: 667,
      pixelHeight: 1000,
      alt: "Bobiverse Series",
    },
  },
  {
    name: "The Murderbot Diaries",
    category: "novel",
    link: "https://www.goodreads.com/series/191900-the-murderbot-diaries",
    imageData: {
      url: `${IMAGE_URL}/murderbot.jpg`,
      pixelWidth: 1556,
      pixelHeight: 2475,
      alt: "The Murderbot Diaries",
    },
  },
  {
    name: "Control",
    category: "video game",
    link: "https://store.steampowered.com/app/870780/Control_Ultimate_Edition/",
    imageData: {
      url: `${IMAGE_URL}/control.jpg`,
      pixelWidth: 1024,
      pixelHeight: 576,
      alt: "Control",
    },
  },

  {
    name: "Noita",
    category: "video game",
    link: "https://store.steampowered.com/app/881100/Noita/",
    imageData: {
      url: `${IMAGE_URL}/noita.jpg`,
      pixelWidth: 342,
      pixelHeight: 482,
      alt: "Noita",
    },
  },
  {
    name: "Portal 2",
    link: "https://store.steampowered.com/app/620/Portal_2/",
    category: "video game",
    imageData: {
      url: `${IMAGE_URL}/portal-2.webp`,
      pixelWidth: 1200,
      pixelHeight: 1200,
      alt: "Portal 2",
    },
  },
  {
    name: "Cradle Series",
    category: "novel",
    link: "https://www.goodreads.com/series/192821-cradle",
    imageData: {
      url: `${IMAGE_URL}/cradle.jpg`,
      pixelWidth: 667,
      pixelHeight: 1000,
      alt: "Cradle Series",
    },
  },
  {
    name: "Antichamber",
    category: "video game",
    link: "https://store.steampowered.com/app/219890/Antichamber/",
    imageData: {
      url: `${IMAGE_URL}/antichamber.jpg`,
      pixelWidth: 1920,
      pixelHeight: 1080,
      alt: "Antichamber",
    },
  },
  {
    name: "Mother of Learning",
    category: "novel",
    link: "https://www.royalroad.com/fiction/21220/mother-of-learning",
    imageData: {
      url: `${IMAGE_URL}/mother-of-learning.jpg`,
      pixelWidth: 667,
      pixelHeight: 1000,
      alt: "Mother of Learning",
    },
  },
  {
    name: "Segment Trees",
    category: "algorithm",
    link: "https://en.wikipedia.org/wiki/Segment_tree",
    imageData: {
      url: `${IMAGE_URL}/segment-tree.jpg`,
      pixelWidth: 631,
      pixelHeight: 494,
      alt: "Segment Trees",
    },
  },
  {
    name: "Tries",
    category: "algorithm",
    link: "https://en.wikipedia.org/wiki/Trie",
    imageData: {
      url: `${IMAGE_URL}/tries.png`,
      pixelWidth: 284,
      pixelHeight: 178,
      alt: "Tries",
    },
  },
  {
    name: "Ready Player One",
    category: "novel",
    link: "https://www.goodreads.com/book/show/9969571-ready-player-one",
    imageData: {
      url: `${IMAGE_URL}/ready-player-one.jpg`,
      pixelWidth: 648,
      pixelHeight: 1000,
      alt: "Ready Player One",
    },
  },

  {
    name: "Heavy-Light Decomposition (HLD)",
    category: "algorithm",
    link: "https://cp-algorithms.com/graph/hld.html",
    imageData: {
      url: `${IMAGE_URL}/hld.png`,
      pixelWidth: 442,
      pixelHeight: 484,
      alt: "Heavy-Light Decomposition",
    },
  },
  {
    name: "Aho Corasick",
    category: "algorithm",
    link: "https://cp-algorithms.com/string/aho_corasick.html",
    imageData: {
      url: `${IMAGE_URL}/aho-corasick.jpg`,
      pixelWidth: 1280,
      pixelHeight: 720,
      alt: "Aho Corasick",
    },
  },
  {
    name: "Dynamic Connectivity",
    category: "algorithm",
    link: "https://en.wikipedia.org/wiki/Dynamic_connectivity",
    imageData: {
      url: `${IMAGE_URL}/dynamic-connectivity.png`,
      pixelWidth: 1298,
      pixelHeight: 434,
      alt: "Dynamic Connectivity",
    },
  },
  {
    name: "Firewatch",
    category: "video game",
    link: "https://store.steampowered.com/app/383870/Firewatch/",
    imageData: {
      url: `${IMAGE_URL}/firewatch.jpg`,
      pixelWidth: 616,
      pixelHeight: 353,
      alt: "Firewatch",
    },
  },
  {
    name: "ADOM",
    category: "video game",
    link: "https://store.steampowered.com/app/333300/ADOM_Ancient_Domains_Of_Mystery/",
    imageData: {
      url: `${IMAGE_URL}/adom.jpg`,
      pixelWidth: 800,
      pixelHeight: 500,
      alt: "ADOM",
    },
  },
  {
    name: "Ender's Game",
    category: "novel",
    link: "https://www.goodreads.com/book/show/375802.Ender_s_Game",
    imageData: {
      url: `${IMAGE_URL}/enders-game.jpg`,
      pixelWidth: 181,
      pixelHeight: 278,
      alt: "Ender's Game",
    },
  },
  {
    name: "The Martian",
    category: "novel",
    link: "https://www.goodreads.com/book/show/18007564-the-martian",
    imageData: {
      url: `${IMAGE_URL}/the-martian.jpg`,
      pixelWidth: 313,
      pixelHeight: 475,
      alt: "The Martian",
    },
  },
  {
    name: "Uncharted 4: A Thief's End",
    category: "video game",
    link: "https://www.playstation.com/en-us/games/uncharted-4-a-thiefs-end/",
    imageData: {
      url: `${IMAGE_URL}/uncharted-4.jpg`,
      pixelWidth: 300,
      pixelHeight: 168,
      alt: "Uncharted 4: A Thief's End",
    },
  },
  {
    name: "Return of the Obra Dinn",
    category: "video game",
    link: "https://store.steampowered.com/app/653530/Return_of_the_Obra_Dinn/",
    imageData: {
      url: `${IMAGE_URL}/obra-dinn.png`,
      pixelWidth: 1600,
      pixelHeight: 900,
      alt: "Return of the Obra Dinn",
    },
  },
  {
    name: "Superhot: Mind Control Delete",
    category: "video game",
    link: "https://store.steampowered.com/app/690040/SUPERHOT_MIND_CONTROL_DELETE/",
    imageData: {
      url: `${IMAGE_URL}/superhot.jpg`,
      pixelWidth: 1920,
      pixelHeight: 1080,
      alt: "Superhot: Mind Control Delete",
    },
  },
  {
    name: "Inscryption",
    category: "video game",
    link: "https://store.steampowered.com/app/1092790/Inscryption/",
    imageData: {
      url: `${IMAGE_URL}/inscryption.jpg`,
      pixelWidth: 300,
      pixelHeight: 168,
      alt: "Inscryption",
    },
  },
  {
    name: "Unavowed",
    category: "video game",
    link: "https://store.steampowered.com/app/336140/Unavowed/",
    imageData: {
      url: `${IMAGE_URL}/unavowed.png`,
      pixelWidth: 400,
      pixelHeight: 250,
      alt: "Unavowed",
    },
  },
  {
    name: "Quantum Break",
    category: "video game",
    link: "https://store.steampowered.com/app/474960/Quantum_Break/",
    imageData: {
      url: `${IMAGE_URL}/quantum-break.jpg`,
      pixelWidth: 740,
      pixelHeight: 1008,
      alt: "Quantum Break",
    },
  },
];
