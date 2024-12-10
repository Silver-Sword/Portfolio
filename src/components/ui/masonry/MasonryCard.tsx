"use client";

import React from "react";
import Image from "next/image";

import type { ImageData } from "@/lib/ImageData";

export interface MasonryProps {
  columnWidth: number;
  imageData: ImageData;
  children: React.ReactNode;
}

export const MasonryCard: React.FC<MasonryProps> = ({
  columnWidth,
  imageData,
  children,
}) => {
  const maxWidth = columnWidth * 10;
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
      <Image
        src={imageData.url}
        alt={imageData.alt}
        width={maxWidth}
        height={(maxWidth * imageData.pixelHeight) / imageData.pixelWidth}
      />
      {children}
    </div>
  );
};
