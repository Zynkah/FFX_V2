"use client";
import { useState, useEffect } from "react";

import BasicCardLayout from "@/components/basic-card-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollingTabs from "@/components/scrolling-tabs";

interface Race {
  id: string;
  role: string;
  image: string;
  image_height: number;
  image_width: number;
  name: string;
  description: string;
}

export default function Races() {
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-races");
        const data = await response.json();
        setRaces(data.races);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const renderRaceCards = (role: String) => (
    <div className="grid xl:grid-cols-2 gap-4 mx-12">
      {races
        .filter((race) => race.role === role)
        .map((race) => (
          <motion.div
            whileHover={{ translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            key={race.id}
          >
            <BasicCardLayout title={race.name} description={race.description}>
              <Image
                src={race.image}
                width={race.image_width}
                height={race.image_height}
                alt={race.name}
                className="flex justify-center items-center m-auto rounded-lg md:h-[500px] md:w-[500px] aspect-square object-scale-down"
              />
            </BasicCardLayout>
          </motion.div>
        ))}
    </div>
  );

  return (
    <Tabs defaultValue="humanoids" className="text-center">
      <ScrollingTabs>
        <TabsList>
          <TabsTrigger value="humanoids">Humanoids</TabsTrigger>
          <TabsTrigger value="demiHumans">Demi-Humans</TabsTrigger>
          <TabsTrigger value="creatures">Creatures</TabsTrigger>
        </TabsList>
      </ScrollingTabs>
      <TabsContent value="humanoids">
        {renderRaceCards("Humanoids")}
      </TabsContent>
      <TabsContent value="demiHumans">
        {renderRaceCards("Demi-Humanoids")}
      </TabsContent>
      <TabsContent value="creatures">
        {renderRaceCards("Creatures")}
      </TabsContent>
    </Tabs>
  );
}
