import { GridItem } from "@/interfaces/GridItem";
import { GridItemField } from "@/interfaces/GridItemField";
import { RobotIcon } from "../../icons/RobotIcon";

export const CatalogueGridItem = ({
  item: { id, title, description, fields },
  hideIcon,
}: {
  item: GridItem;
  hideIcon?: boolean;
}) => (
  <div
    onClick={() => window.location.assign("/robots/" + id)}
    className={`${/* Layout */ ""} 
                flex flex-col border-4 border-teal-600 rounded-2xl
                ${/* Shadow */ ""} 
                drop-shadow-md shadow-outer shadow-md shadow-gray-800
                ${/* Responsiveness */ ""} 
                md:p-12 max-md:w-7/8 max-md:m-2
                ${/* Hover */ ""} 
                hover:bg-orange-700 hover:border-orange-300 hover:shadow-orage-200
                ${/* Cursor */ ""} 
                cursor-pointer `}
  >
    <div className="flex ">
      <p className="pr-2 text-2xl text-orange-400">ID #{id} </p>
      <h3 className="text-3xl pl-1">{title}</h3>
    </div>
    {hideIcon !== true && (
      <RobotIcon
        className="mr-auto ml-auto m-12"
        fill={"orange"}
        stroke={"black"}
      />
    )}

    <h5 className="text-xl pb-2">
      <b>Description:</b>
    </h5>
    <p>{description}</p>
    <h5 className="text-xl pt-6">
      <b>Fields:</b>
    </h5>
    <div className="mt-4 flex gap-4">
      {fields.map((field: GridItemField) => (
        <fieldset className="flex gap-2">
          {field.type == 0 ? (
            <input type="checkbox" checked={field.value} id="boolean-field" />
          ) : (
            <input
              type="text"
              className="h-8 w-full text-center"
              disabled
              value={field.value}
            ></input>
          )}
          <label htmlFor="boolean-field">{field.label}</label>
        </fieldset>
      ))}
    </div>
  </div>
);
