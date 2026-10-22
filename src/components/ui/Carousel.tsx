import React from "react";

/**
 * Swipeable snap carousel on phones, a normal grid from `md` upwards.
 * Keeps long card lists short on mobile and feels native to scroll.
 */
export default function Carousel({
  children,
  cols = "md:grid-cols-3",
  itemWidth = "w-[72%]",
}: {
  children: React.ReactNode[];
  cols?: string;
  itemWidth?: string;
}) {
  return (
    <div
      className={`scrollbar-none -mx-4 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:gap-5 md:overflow-visible md:px-0 md:pb-0 ${cols}`}
    >
      {React.Children.map(children, (child) => (
        <div className={`${itemWidth} shrink-0 snap-start md:w-auto`}>{child}</div>
      ))}
    </div>
  );
}
