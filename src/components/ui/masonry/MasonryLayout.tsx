import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface MasonryProps {
  columnWidth: number;
  setCardWidth: (width: number) => void;
  children: React.ReactNode;
}

export const MasonryLayout: React.FC<MasonryProps> = ({
  columnWidth,
  children,
  setCardWidth,
}) => {
  const [reactiveWidth, setReactiveWidth] = useState(columnWidth);
  const [breakpoints, setBreakpoints] = useState({} as Record<number, number>);

  const gutterGap = 10;

  useEffect(() => {
    const updateReactiveLayout = () => {
      let newWidth = columnWidth;
      if (window.innerWidth < columnWidth) {
        newWidth = window.innerWidth - 32; // Full width minus padding
      }

      setReactiveWidth(newWidth); // Default column width
      setCardWidth(newWidth);

      let curPixels = reactiveWidth;
      const updatedBreakpoints: Record<number, number> = {};
      for (let i = 1; i < 100; i++) {
        updatedBreakpoints[curPixels] = i;
        curPixels += reactiveWidth + gutterGap;
      }
      setBreakpoints(updatedBreakpoints);
    };

    updateReactiveLayout();
    window.addEventListener("resize", updateReactiveLayout);
    return () => window.removeEventListener("resize", updateReactiveLayout);
  }, []);

  return (
    <ResponsiveMasonry columnsCountBreakPoints={breakpoints}>
      <Masonry gutter={`${gutterGap}px`}>{children}</Masonry>
    </ResponsiveMasonry>
  );
};