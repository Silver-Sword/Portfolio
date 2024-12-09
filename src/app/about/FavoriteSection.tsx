"use client";

import React, { useState } from "react";
import { MasonryLayout } from "@/components/ui/masonry/MasonryLayout";
import { sortMasonryObjects } from "@/components/ui/masonry/sortMasonryObjects";
import FavoriteCard from "./FavoriteCard";
import { FAVORITES_DATA } from "./favorites";

export default function FavoriteSection() {
  const columnWidth = 250;
  const [cardwidth, setCardWidth] = useState(columnWidth);
  const [numComputedColumns, setComputedNumColumns] = useState(0);

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-2">My Favorites</h2>
      <p className="text-md mb-4 text-muted-foreground">
        A collection of some of my favorite things
      </p>

      <MasonryLayout
        columnWidth={columnWidth}
        setCardWidth={setCardWidth}
        onNumColumnsChange={setComputedNumColumns}
      >
        {sortMasonryObjects(numComputedColumns, cardwidth, FAVORITES_DATA).map(
          (item, index) => (
            <FavoriteCard
              category={item.category}
              name={item.name}
              link={item.link}
              imageData={item.imageData}
              columnWidth={cardwidth}
              key={index}
            />
          )
        )}
      </MasonryLayout>
    </section>
  );
}
