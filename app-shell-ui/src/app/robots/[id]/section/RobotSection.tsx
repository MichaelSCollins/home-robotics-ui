"use client";

import { useEffect, useState } from "react";
import robots from "../../.fake/robots.json";
import { RobotIcon } from "../../../../components/icons/RobotIcon";
import { Robot } from "@/app/robots/table";
import { CatalogueGrid } from "@/components/grid/CatalogGrid";
import { GridItem, GridItemFieldType } from "@/components/grid/CatalogGridItem";


// Array of parts needed to build the robots
const parts: GridItem[] = [
  {
      id: "motor-1",
      title: "DC Motor",
      description: "Recycled motor used for driving wheels or tracks.",
      fields: [
          { type: GridItemFieldType.BOOLEAN, label: "Available in Junkyard", value: true },
          { type: GridItemFieldType.TEXT, label: "Voltage", value: "12V" }
      ]
  },
  {
      id: "solar-panel-1",
      title: "Solar Panel",
      description: "Recycled solar panel used to collect solar energy.",
      fields: [
          { type: GridItemFieldType.BOOLEAN, label: "Available in Junkyard", value: true },
          { type: GridItemFieldType.TEXT, label: "Wattage", value: "50W" }
      ]
  },
  {
      id: "battery-1",
      title: "Lithium-Ion Battery",
      description: "Recycled lithium-ion battery used for energy storage.",
      fields: [
          { type: GridItemFieldType.BOOLEAN, label: "Available in Junkyard", value: true },
          { type: GridItemFieldType.TEXT, label: "Capacity", value: "2000mAh" }
      ]
  },
  {
      id: "wheel-1",
      title: "Wide Wheels",
      description: "Large wheels for better traction in sand or uneven terrain.",
      fields: [
          { type: GridItemFieldType.BOOLEAN, label: "Available in Junkyard", value: true },
          { type: GridItemFieldType.TEXT, label: "Size", value: "15 inches" }
      ]
  },
  {
      id: "servo-1",
      title: "Servo Motor",
      description: "Servo motor for adjusting solar panels for maximum sun exposure.",
      fields: [
          { type: GridItemFieldType.BOOLEAN, label: "Available in Junkyard", value: false }, // Not found in junkyard
          { type: GridItemFieldType.TEXT, label: "Torque", value: "2kg/cm" }
      ]
  },
  {
      id: "ultrasonic-sensor-1",
      title: "Ultrasonic Sensor",
      description: "Sensor used for obstacle detection in the robot.",
      fields: [
          { type: GridItemFieldType.BOOLEAN, label: "Available in Junkyard", value: false }, // May need to be bought
          { type: GridItemFieldType.TEXT, label: "Range", value: "2m" }
      ]
  },
  {
      id: "arduino-1",
      title: "Arduino Board",
      description: "Microcontroller to manage the robot’s operations.",
      fields: [
          { type: GridItemFieldType.BOOLEAN, label: "Available in Junkyard", value: true },
          { type: GridItemFieldType.TEXT, label: "Model", value: "Arduino Uno" }
      ]
  },
  {
      id: "frame-1",
      title: "Metal Frame",
      description: "Recycled metal frame used to build the chassis.",
      fields: [
          { type: GridItemFieldType.BOOLEAN, label: "Available in Junkyard", value: true },
          { type: GridItemFieldType.TEXT, label: "Material", value: "Aluminum" }
      ]
  },
  {
      id: "solar-tracker-1",
      title: "Solar Tracker",
      description: "A system that automatically aligns the solar panels to the sun.",
      fields: [
          { type: GridItemFieldType.BOOLEAN, label: "Available in Junkyard", value: false },
          { type: GridItemFieldType.TEXT, label: "Tracking Type", value: "Dual-Axis" }
      ]
  },
  {
      id: "bin-1",
      title: "Trash Bin",
      description: "Container for collecting trash.",
      fields: [
          { type: GridItemFieldType.BOOLEAN, label: "Available in Junkyard", value: true },
          { type: GridItemFieldType.TEXT, label: "Capacity", value: "10 liters" }
      ]
  }
];

const MessageSection = ({ message }: { message: string}) => {
  return <section className="grid justify-center pt-64 w-full"><p className="text-3xl text-teal-100">{message}</p></section>
}

export default function RobotSection({ id }: { id: string }) {
  const [robotData, setRobotData] = useState<Robot | null>(null);
  let message = null
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
    return <MessageSection message={message ?? 'loading...'} />
  }
  else {
    const { name, description } = robotData;
    return (
      <section className="flex flex-col gap-4 w-full" >
        <a href="/robots">{'< '}Back To Robots</a>
        <div className="flex">
        <div className="border-2 border-teal-500 border-collapse p-12 w-1/4 flex flex-col mr-4">
          <h1 className="text-3xl p-4 text-center">{name}</h1>
          <RobotIcon size="128" fill="orange" stroke="black" className="ml-auto mr-auto mb-12" />
        </div>
        <div className="border-2  border-teal-500 border-collapse p-12 w-full flex flex-col pt-12">
          <h1 className="text-3xl p-4 text-left">Description</h1>
          <p className="text-lg p-4 text-left">{description}</p>
        </div>
        </div>
        <div className="border-2  border-teal-500 border-collapse p-12 flex gap-4">
          <h1 className="text-3xl p-4 text-left">Parts</h1>
          <p className="w-full"><CatalogueGrid items={parts} config={{ hideIcons: true }} className="overflow-y-hidden"/></p>
        </div>
      </section>
    );
  }
}