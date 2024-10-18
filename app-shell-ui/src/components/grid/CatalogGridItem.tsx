import { RobotIcon } from "../icons/RobotIcon"

export enum GridItemFieldType {
    BOOLEAN,
    TEXT
}

export interface GridItemField {
    type: GridItemFieldType,
    label: string,
    value: any
}

export interface GridItem {
    id: string,
    title: string,
    description: string,
    fields: GridItemField[]
}

export const CatalogueGridItem = ({ item: { id, title, description, fields }, hideIcon }: { item: GridItem, hideIcon?: boolean }) => {
    return <div onClick={() => window.location.assign("/robots/"+id)}className="flex flex-col border-4 border-teal-600 md:p-12 max-md:w-7/8 max-md:m-2 rounded-2xl hover:bg-orange-700 hover:border-orange-300 cursor-pointer drop-shadow-md shadow-outer shadow-md hover:shadow-orage-200 shadow-gray-800">
        <div className="flex ">
        <p className="pr-2 text-2xl  text-orange-400">ID #{id} </p>
        <h3 className="text-3xl pl-1">{title}</h3>
        </div>
       {hideIcon !== true && <RobotIcon className="mr-auto ml-auto m-12" fill={'orange'} stroke={'black'} />}
        
        <h5 className="text-xl pb-2"><b>Description:</b></h5>
        <p>{description}</p>
        <h5 className="text-xl pt-6"><b>Devices:</b></h5>
        <div className="mt-4 flex gap-4">
            {fields.map((field: GridItemField) => <fieldset className="flex gap-2">
                <input type="checkbox" checked={field.value} id="boolean-field"/>
                <label htmlFor="boolean-field">{ field.label}</label>
            </fieldset>)}
        </div>
    </div>
}
