"use client";

import { getDogs } from "./dogs_data";
import { DogCard } from "./DogCard";
import { MasonryLayout } from "@/components/ui/masonry/MasonryLayout";

const dogs = getDogs();
export default function Dogs() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Collection of My Furry Friends
      </h1>
      <MasonryLayout columnWidth={200}>
        {dogs.map((dog) => (
          <DogCard width={200} {...dog} />
        ))}
      </MasonryLayout>
    </div>
  );
}
