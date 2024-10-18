import { GridItemField } from "./GridItemField"

export interface GridItem {
    id: string,
    title: string,
    description: string,
    fields: GridItemField[]
}