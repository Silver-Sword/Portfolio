"use client";

import React, { useState, useEffect } from "react";
import { getImageAspectRatio } from "@/lib/getImageAspectRatio";
import { MasonryLayout } from "@/components/ui/masonry/MasonryLayout";
import FavoriteCard from "./FavoriteCard";
import { FAVORITES_DATA } from "./favorites";

interface FavoriteItem {
  name: string;
  link: string;
  image_url: string;
  category: string;
  imageAspectRatio?: number;
}

export default function FavoriteSection() {
  const columnWidth = 200;
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [cardwidth, setCardWidth] = useState(columnWidth);

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
      <MasonryLayout columnWidth={columnWidth} setCardWidth={setCardWidth}>
        {favorites.map((item, index) => (
          <FavoriteCard
            category={item.category}
            name={item.name}
            link={item.link}
            image_url={item.image_url}
            imageAspectRatio={item.imageAspectRatio || 1}
            key={index}
          />
        ))}
      </MasonryLayout>
    </section>
  );
}
