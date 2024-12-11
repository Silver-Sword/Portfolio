"use client";

import React, { useState } from "react";
import { getDogs } from "./dogs_data";
import { DogCard } from "./DogCard";
import { MasonryLayout } from "@/components/ui/masonry/MasonryLayout";
import { sortMasonryObjects } from "@/components/ui/masonry/sortMasonryObjects";

const dogs = getDogs();
export default function Dogs() {
  const desiredColumnWidth = 300;
  const [cardWidth, setCardWidth] = useState(desiredColumnWidth);
  const [numComputedColumns, setComputedNumColumns] = useState(0);

  return (
    <div>
      <title>Pets Achieved</title>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Collection of My Furry Friends
      </h1>
      <MasonryLayout
        columnWidth={desiredColumnWidth}
        setCardWidth={setCardWidth}
        onNumColumnsChange={setComputedNumColumns}
      >
        {sortMasonryObjects(numComputedColumns, cardWidth, dogs).map(
          (dog, index) => (
            <DogCard width={cardWidth} {...dog} key={index} />
          )
        )}
      </MasonryLayout>
    </div>
  );
}
