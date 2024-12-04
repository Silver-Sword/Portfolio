"use client";

import React, { useState } from "react";
import { getDogs } from "./dogs_data";
import { DogCard } from "./DogCard";
import { MasonryLayout } from "@/components/ui/masonry/MasonryLayout";

const dogs = getDogs();
export default function Dogs() {
  const desiredColumnWidth = 200;
  const [cardWidth, setCardWidth] = useState(desiredColumnWidth);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Collection of My Furry Friends
      </h1>
      <MasonryLayout
        columnWidth={desiredColumnWidth}
        setCardWidth={setCardWidth}
      >
        {dogs.map((dog) => (
          <DogCard width={cardWidth} {...dog} />
        ))}
      </MasonryLayout>
    </div>
  );
}
