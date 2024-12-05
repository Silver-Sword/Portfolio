"use client";

import React, { useState, useEffect } from "react";
import { ImageData } from "@/lib/ImageData";
import { MasonryLayout } from "@/components/ui/masonry/MasonryLayout";
import FavoriteCard from "./FavoriteCard";
import { FAVORITES_DATA } from "./favorites";

interface FavoriteItem {
  name: string;
  link: string;
  category: string;
  imageData: ImageData;
}

export default function FavoriteSection() {
  const columnWidth = 250;
  const [favorites, setFavorites] = useState<FavoriteItem[]>(FAVORITES_DATA);
  const [cardwidth, setCardWidth] = useState(columnWidth);

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-8">My Favorites</h2>
      <MasonryLayout columnWidth={columnWidth} setCardWidth={setCardWidth}>
        {favorites.map((item, index) => (
          <FavoriteCard
            category={item.category}
            name={item.name}
            link={item.link}
            imageData={item.imageData}
            columnWidth={cardwidth}
            key={index}
          />
        ))}
      </MasonryLayout>
    </section>
  );
}
