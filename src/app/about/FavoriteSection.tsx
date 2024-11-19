import FavoriteCard from "./FavoriteCard";
export default function FavoriteSection() {
  const favorites = {
    games: [
      {
        name: "Portal 2",
        link: "https://store.steampowered.com/app/620/Portal_2/",
      },
      {
        name: "Stanley Parable",
        link: "https://store.steampowered.com/app/221910/The_Stanley_Parable/",
      },
      {
        name: "Noita",
        link: "https://store.steampowered.com/app/881100/Noita/",
      },
      {
        name: "Control",
        link: "https://store.steampowered.com/app/870780/Control_Ultimate_Edition/",
      },
      {
        name: "Antichamber",
        link: "https://store.steampowered.com/app/219890/Antichamber/",
      },
    ],
    books: [
      {
        name: "Mother of Learning",
        link: "https://www.royalroad.com/fiction/21220/mother-of-learning",
      },
      {
        name: "Bobiverse Series",
        link: "https://www.goodreads.com/series/192752-bobiverse",
      },
      {
        name: "The Murderbot Diaries Series",
        link: "https://www.goodreads.com/series/191900-the-murderbot-diaries",
      },
      {
        name: "Cradle Series",
        link: "https://www.goodreads.com/series/192821-cradle",
      },
      {
        name: "Ready Player One",
        link: "https://www.goodreads.com/book/show/9969571-ready-player-one",
      },
    ],
    algorithms: [
      { name: "Tries", link: "https://en.wikipedia.org/wiki/Trie" },
      {
        name: "Segment Trees",
        link: "https://en.wikipedia.org/wiki/Segment_tree",
      },
      {
        name: "Heavy-Light Decomposition (HLD)",
        link: "https://cp-algorithms.com/graph/hld.html",
      },
      {
        name: "Aho Corasick",
        link: "https://cp-algorithms.com/string/aho_corasick.html",
      },
      {
        name: "Dynamic Connectivity",
        link: "https://en.wikipedia.org/wiki/Dynamic_connectivity",
      },
    ],
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">My Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(favorites).map(([category, items]) =>
          items.map((item, index) => (
            <FavoriteCard
              key={index}
              category={category}
              name={item.name}
              link={item.link}
            />
          ))
        )}
      </div>
    </section>
  );
}
