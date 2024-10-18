import { GridItemFieldType } from "@/enum/GridItemFieldType";

export interface GridItemField {
    type: GridItemFieldType,
    label: string,
    value: any
}