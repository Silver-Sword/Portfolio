"use client";

import { DogProperties } from "./dogs_data";
import { MasonryCard } from "@/components/ui/masonry/MasonryCard";
import { ImageData } from "@/lib/ImageData";

export function DogCard({
  name,
  description,
  imageData,
  width,
}: DogProperties & { width: number }) {
  return (
    <div>
      <MasonryCard columnWidth={width} imageData={imageData as ImageData}>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </MasonryCard>
    </div>
  );
}
