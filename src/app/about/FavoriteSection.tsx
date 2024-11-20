"use client";

import { useState, useEffect } from "react";
import FavoriteCard from "./FavoriteCard";
import { getImageAspectRatio } from "@/lib/getImageAspectRatio";
import { FAVORITES_DATA } from "./favorites";

interface FavoriteItem {
  name: string;
  link: string;
  image_url: string;
  category: string;
  imageAspectRatio?: number;
}

export default function FavoriteSection() {
  const [columnWidth, setColumnWidth] = useState(200);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const updateColumnWidth = () => {
      if (window.innerWidth < 200) {
        setColumnWidth(window.innerWidth - 32); // Full width minus padding
      } else {
        setColumnWidth(200); // Default column width
      }
    };

    updateColumnWidth();
    window.addEventListener("resize", updateColumnWidth);
    return () => window.removeEventListener("resize", updateColumnWidth);
  }, []);

  useEffect(() => {
    const favoritesData = FAVORITES_DATA;

    const loadFavorites = async () => {
      const loadedFavorites = await Promise.all(
        Object.entries(favoritesData).flatMap(([category, items]) =>
          items.map(async (item) => ({
            ...item,
            category,
            imageAspectRatio: await getImageAspectRatio(item.image_url),
          }))
        )
      );
      setFavorites(loadedFavorites);
    };

    loadFavorites();
  }, []);

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
        {favorites.map((item, index) => (
          <FavoriteCard
            category={item.category}
            name={item.name}
            link={item.link}
            image_url={item.image_url}
            imageAspectRatio={item.imageAspectRatio || 1}
          />
        ))}
      </div>
    </section>
  );
}
