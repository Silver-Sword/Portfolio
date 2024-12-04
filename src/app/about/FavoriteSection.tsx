"use client";

import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import FavoriteCard from "./FavoriteCard";
import { getImageAspectRatio } from "@/lib/getImageAspectRatio";
import { FAVORITES_DATA } from "./favorites";

interface MasonryProps {
  children: React.ReactNode;
}

export const MasonryLayout: React.FC<MasonryProps> = ({ children }) => {
  const breakpoints: Record<number, number> = {};
  let curPixels = 200;
  for (let i = 1; i < 100; i++) {
    breakpoints[curPixels] = i;
    curPixels += 200 + 10;
  }
  return (
    <ResponsiveMasonry columnsCountBreakPoints={breakpoints}>
      <Masonry gutter="10px">{children}</Masonry>
    </ResponsiveMasonry>
  );
};
interface FavoriteItem {
  name: string;
  link: string;
  image_url: string;
  category: string;
  imageAspectRatio?: number;
}

export default function FavoriteSection() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

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
      <MasonryLayout>
        {favorites.map((item, index) => (
          <FavoriteCard
            category={item.category}
            name={item.name}
            link={item.link}
            image_url={item.image_url}
            imageAspectRatio={item.imageAspectRatio || 1}
            key={item.name.replace(/\s/g, "-") + index}
          />
        ))}
      </MasonryLayout>
    </section>
  );
}
