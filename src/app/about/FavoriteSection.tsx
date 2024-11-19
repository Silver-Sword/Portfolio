"use client";

import { useState, useEffect } from "react";
import FavoriteCard from "./FavoriteCard";
import { favorites } from "./favorites";

export default function FavoriteSection() {
  const [columnWidth, setColumnWidth] = useState(300);

  useEffect(() => {
    const updateColumnWidth = () => {
      if (window.innerWidth < 640) {
        setColumnWidth(window.innerWidth - 32); // Full width minus padding
      } else {
        setColumnWidth(300); // Default column width
      }
    };

    updateColumnWidth();
    window.addEventListener("resize", updateColumnWidth);
    return () => window.removeEventListener("resize", updateColumnWidth);
  }, []);

  const allItems = Object.entries(favorites).flatMap(([category, items]) =>
    items.map((item) => ({ ...item, category }))
  );

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-8">My Favorites</h2>

      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${columnWidth}px, 1fr))`,
          gridAutoRows: "10px",
        }}
      >
        {allItems.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid"
            style={{ gridRowEnd: `span ${Math.floor(item.height * 10)}` }}
          >
            <FavoriteCard
              category={item.category}
              name={item.name}
              link={item.link}
              height={item.height}
              image_url={(item as any).image_url ?? undefined}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
