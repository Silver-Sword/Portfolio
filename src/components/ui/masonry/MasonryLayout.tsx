import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface MasonryProps {
  columnWidth: number;
  children: React.ReactNode;
}

export const MasonryLayout: React.FC<MasonryProps> = ({
  columnWidth,
  children,
}) => {
  const breakpoints: Record<number, number> = {};
  let curPixels = columnWidth;
  for (let i = 1; i < 100; i++) {
    breakpoints[curPixels] = i;
    curPixels += columnWidth + 10;
  }
  return (
    <ResponsiveMasonry columnsCountBreakPoints={breakpoints}>
      <Masonry gutter="10px">{children}</Masonry>
    </ResponsiveMasonry>
  );
};
