const IMAGE_URL = "/favorites-images";
export const favorites = {
  games: [
    {
      name: "Portal 2",
      link: "https://store.steampowered.com/app/620/Portal_2/",
      height: 2, // Height multiplier
      image_url: `${IMAGE_URL}/portal-2.webp`,
    },
    {
      name: "Stanley Parable",
      link: "https://store.steampowered.com/app/221910/The_Stanley_Parable/",
      height: 1,
      image_url: `${IMAGE_URL}/stanley-parable.jpg`,
    },
    {
      name: "Noita",
      link: "https://store.steampowered.com/app/881100/Noita/",
      height: 1.5,
      image_url: `${IMAGE_URL}/noita.jpg`,
    },
    {
      name: "Control",
      link: "https://store.steampowered.com/app/870780/Control_Ultimate_Edition/",
      height: 2,
      image_url: `${IMAGE_URL}/control.jpg`,
    },
    {
      name: "Antichamber",
      link: "https://store.steampowered.com/app/219890/Antichamber/",
      height: 1,
      image_url: `${IMAGE_URL}/antichamber.jpg`,
    },
  ],
  books: [
    {
      name: "Mother of Learning",
      link: "https://www.royalroad.com/fiction/21220/mother-of-learning",
      height: 1.5,
      image_url: `${IMAGE_URL}/mother-of-learning.jpg`,
    },
    {
      name: "Bobiverse Series",
      link: "https://www.goodreads.com/series/192752-bobiverse",
      height: 2,
      image_url: `${IMAGE_URL}/bobiverse.jpg`,
    },
    {
      name: "The Murderbot Diaries Series",
      link: "https://www.goodreads.com/series/191900-the-murderbot-diaries",
      height: 2,
      image_url: `${IMAGE_URL}/murderbot.jpg`,
    },
    {
      name: "Cradle Series",
      link: "https://www.goodreads.com/series/192821-cradle",
      height: 1,
      image_url: `${IMAGE_URL}/cradle.jpg`,
    },
    {
      name: "Ready Player One",
      link: "https://www.goodreads.com/book/show/9969571-ready-player-one",
      height: 1.5,
      image_url: `${IMAGE_URL}/ready-player-one.jpg`,
    },
  ],
  algorithms: [
    {
      name: "Tries",
      link: "https://en.wikipedia.org/wiki/Trie",
      height: 1,
      image_url: `${IMAGE_URL}/tries.png`,
    },
    {
      name: "Segment Trees",
      link: "https://en.wikipedia.org/wiki/Segment_tree",
      height: 1.5,
      image_url: `${IMAGE_URL}/segment-tree.jpg`,
    },
    {
      name: "Heavy-Light Decomposition (HLD)",
      link: "https://cp-algorithms.com/graph/hld.html",
      height: 2,
      image_url: `${IMAGE_URL}/hld.png`,
    },
    {
      name: "Aho Corasick",
      link: "https://cp-algorithms.com/string/aho_corasick.html",
      height: 1.5,
      image_url: `${IMAGE_URL}/aho-corasick.jpg`,
    },
    {
      name: "Dynamic Connectivity",
      link: "https://en.wikipedia.org/wiki/Dynamic_connectivity",
      height: 1,
      image_url: `${IMAGE_URL}/dynamic-connectivity.png`,
    },
  ],
};
