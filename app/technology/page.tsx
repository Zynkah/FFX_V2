"use client";
import { useState, useEffect } from "react";
import BasicPageLayout from "@/components/basic-page-layout";
import BasicCardLayout from "@/components/basic-card-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { motion } from "framer-motion";

interface Technology {
  id: string;
  role: string;
  name: string;
  description: string;
  image: string;
  image_height: number;
  image_width: number;
}

export default function Technology() {
  const [technology, setTechnology] = useState<Technology[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-technology");
        const data = await response.json();
        setTechnology(data.technology);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const renderRaceCards = (role: String) => (
    <div className="mx-12">
      {technology
        .filter((technology) => technology.role === role)
        .map((tech) => (
          <motion.div
            whileHover={{ translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            key={tech.id}
          >
            <BasicCardLayout title={tech.name} description={tech.description}>
              <Image
                src={tech.image}
                width={tech.image_width}
                height={tech.image_height}
                alt={tech.name}
                className="flex justify-center items-center m-auto rounded-lg [500px] w-[500px] object-scale-down"
              />
            </BasicCardLayout>
          </motion.div>
        ))}
    </div>
  );

  return (
    <BasicPageLayout title="Technology">
      <Tabs defaultValue="machina" className="text-center">
        <TabsList>
          <TabsTrigger value="machina">Machina</TabsTrigger>
          <TabsTrigger value="movie sphere">Movie Sphere</TabsTrigger>
          <TabsTrigger value="gil">Gil</TabsTrigger>
          <TabsTrigger value="fire arms">Fire Arms</TabsTrigger>
          <TabsTrigger value="vehicle">Vehicle</TabsTrigger>
          <TabsTrigger value="hand held items">Hand Held Items</TabsTrigger>
        </TabsList>
        <TabsContent value="machina">{renderRaceCards("Machina")}</TabsContent>
        <TabsContent value="movie sphere">
          {renderRaceCards("Movie Sphere")}
        </TabsContent>
        <TabsContent value="gil">{renderRaceCards("Gil")}</TabsContent>
        <TabsContent value="fire arms">
          {renderRaceCards("Fire Arms")}
        </TabsContent>
        <TabsContent value="vehicle">{renderRaceCards("Vehicle")}</TabsContent>
        <TabsContent value="hand held items">
          {renderRaceCards("Hand Held Items")}
        </TabsContent>
      </Tabs>
    </BasicPageLayout>
  );
}
