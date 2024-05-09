"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ScrollingTabs from "@/components/scrolling-tabs";

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
    <div className="md:mx-12 p-4">
      {technology
        .filter((technology) => technology.role === role)
        .map((tech) => (
          <Card key={tech.id} className="border-none">
            <CardHeader>
              <Image
                src={tech.image}
                width={tech.image_width}
                height={tech.image_height}
                alt={tech.name}
                className="flex justify-center items-center m-auto rounded-lg [500px] w-[500px] object-scale-down"
              />
              <CardTitle className="text-4xl">{tech.name}</CardTitle>
            </CardHeader>
            <CardContent className="mx-auto md:px-12 max-w-prose">
              {tech.description}
            </CardContent>
          </Card>
        ))}
    </div>
  );

  return (
    <Tabs defaultValue="machina" className="text-center">
      <ScrollingTabs>
        <TabsList>
          <TabsTrigger value="machina">Machina</TabsTrigger>
          <TabsTrigger value="movie sphere">Movie Sphere</TabsTrigger>
          <TabsTrigger value="gil">Gil</TabsTrigger>
          <TabsTrigger value="fire arms">Fire Arms</TabsTrigger>
          <TabsTrigger value="vehicle">Vehicle</TabsTrigger>
          <TabsTrigger value="hand held items">Hand Held Items</TabsTrigger>
        </TabsList>
      </ScrollingTabs>
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
  );
}
