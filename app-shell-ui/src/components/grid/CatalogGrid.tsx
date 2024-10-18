"use client"

import { CatalogueGridItem, GridItem } from "./CatalogGridItem"


export const CatalogueGrid = ({ items, config, className }: {items: GridItem[], className?: string, config?: { hideIcons?: boolean }}) => {
    console.log({ items })
    return <div className={"md:ml-48 max-md:mt-6 overflow-x-hidden scrollbar-teal grid md:grid-cols-3 justify-between md:gap-4 md:border-4 border-teal-900 md:bg-teal-950 h-full max-md:h-5/6 md:p-12 shadow-inner " + className}>
                {items.map((item: GridItem) => <CatalogueGridItem item={item} hideIcon={ config?.hideIcons } />)}
    </div>
}
