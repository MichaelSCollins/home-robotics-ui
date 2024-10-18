"use client";

import { GridItem } from "@/interfaces/GridItem";
import { CatalogueGridItem } from "./CatalogGridItem";

export const CatalogueGrid = ({
  items,
  config,
  className,
}: {
  items: GridItem[];
  className?: string;
  config?: { hideIcons?: boolean };
}) => (
  <div
    className={
      `${/* Layout */ ""} 
            grid flex-col border-4 justify-between border-teal-900 h-full
            ${/* Shadow */ ""} 
            shadow-inner
            ${/* Responsiveness */ ""} 
            md:ml-48 max-md:mt-6 md:grid-cols-3 md:gap-4 md:border-4 
            md:bg-teal-950 max-md:h-5/6 md:p-12
            ${/* Cursor */ ""} 
            overflow-x-hidden scrollbar-teal  
            ${/* Class Extension */ ""} 
            ` + className
    }
  >
    {items.map((item: GridItem) => (
      <CatalogueGridItem item={item} hideIcon={config?.hideIcons} />
    ))}
  </div>
);
