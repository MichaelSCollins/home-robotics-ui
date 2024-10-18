"use client";

import { useEffect, useState } from "react";
import robots from "@/.fake/robots.json";
import parts from "@/.fake/parts.json";
import { RobotIcon } from "../../../../icons/RobotIcon";
import { Robot } from "@/app/robots/table";
import { CatalogueGrid } from "@/components/grid/CatalogGrid";
import { MessageAlert } from "@/components/MessageAlert";
import { GridItem } from "@/interfaces/GridItem";

export default function RobotSection({ id }: { id: string }) {
  const [robotData, setRobotData] = useState<Robot | null>(null);
  let message = null;
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (id) {
        // Find the robot based on the query ID
        const foundRobot = (robots as Robot[]).find((robot) => robot.id === id);
        setRobotData(foundRobot || null);
      }
    }
  }, [id]);

  if (message || !robotData) {
    return <MessageAlert message={message ?? "loading..."} />;
  } else {
    const { name, description } = robotData;
    return (
      <section className="flex flex-col gap-4 w-full">
        <a href="/robots">{"< "}Back To Robots</a>
        <div className="flex">
          <div className="border-2 border-teal-500 border-collapse p-12 w-1/4 flex flex-col mr-4">
            <h1 className="text-3xl p-4 text-center">{name}</h1>
            <RobotIcon
              size="128"
              fill="orange"
              stroke="black"
              className="ml-auto mr-auto mb-12"
            />
          </div>
          <div className="border-2  border-teal-500 border-collapse p-12 w-full flex flex-col pt-12">
            <h1 className="text-3xl p-4 text-left">Description</h1>
            <p className="text-lg p-4 text-left">{description}</p>
          </div>
        </div>
        <div className="border-2  border-teal-500 border-collapse p-12 flex gap-4">
          <h1 className="text-3xl p-4 text-left">Parts</h1>
          <p className="w-full">
            <CatalogueGrid
              items={parts as GridItem[]}
              config={{ hideIcons: true }}
              className="overflow-y-hidden"
            />
          </p>
        </div>
      </section>
    );
  }
}
