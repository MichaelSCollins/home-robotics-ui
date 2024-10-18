import { CatalogueGrid } from "@/components/grid/CatalogGrid";
import { GridItemFieldType } from "@/enum/GridItemFieldType";
import { Robot } from "@/interfaces/Robot";

export const RobotTable = ({ robots }: { robots: Robot[] }) => (
  <section className="h-full pl-6 pr-6 md:p-12 relative">
    <h2 className="text-4xl md:pb-4 text-teal-100 w-min md:absolute flex">
      {" "}
      <p className="ml-4">Robots</p>
    </h2>
    <CatalogueGrid
      className="overflow-y-scroll"
      items={robots.map((robot: Robot) => {
        return {
          id: robot.id,
          title: robot.name,
          description: robot.description,
          fields: [
            {
              type: GridItemFieldType.BOOLEAN,
              label: "Video Feed",
              value: robot.hasVideoDevice,
            },
            {
              type: GridItemFieldType.BOOLEAN,
              label: "Audio",
              value: robot.hasSpeakers,
            },
            {
              type: GridItemFieldType.BOOLEAN,
              label: "Sonar",
              value: robot.hasSonar,
            },
            {
              type: GridItemFieldType.BOOLEAN,
              label: "Pressure Sensor",
              value: robot.hasPressureSensor,
            },
          ],
        };
      })}
    />
  </section>
);
