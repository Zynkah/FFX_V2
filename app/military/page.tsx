"use client";
import { useState, useEffect } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Military {
  id: string;
  role: string;
  name: string;
  description: string;
  image: string;
  image_height: number;
  image_width: number;
}

export default function Military() {
  const [military, setMilitary] = useState<Military[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-military");
        const data = await response.json();
        setMilitary(data.military);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const renderRaceCards = (role: String) => (
    <div className="mx-12">
      {military
        .filter((military) => military.role === role)
        .map((militia) => (
          <Card key={militia.id} className="border-none">
            <CardHeader>
              <Image
                src={militia.image}
                width={militia.image_width}
                height={militia.image_height}
                alt={militia.name}
                className="flex justify-center items-center m-auto rounded-lg object-scale-down"
              />
              <CardTitle className="text-4xl">{militia.name}</CardTitle>
            </CardHeader>
            <CardContent className="mx-auto px-12 max-w-prose">
              {militia.description}
            </CardContent>
          </Card>
        ))}
    </div>
  );

  return (
    <Tabs defaultValue="crusaders" className="text-center">
      <TabsList>
        <TabsTrigger value="crusaders">Crusaders</TabsTrigger>
        <TabsTrigger value="guardians">Guardians</TabsTrigger>
        <TabsTrigger value="warrior monks">Warrior Monks</TabsTrigger>
        <TabsTrigger value="crimson squad">Crimson Squad</TabsTrigger>
        <TabsTrigger value="chocobo knights">Chocobo Knights</TabsTrigger>
      </TabsList>
      <TabsContent value="crusaders">
        {renderRaceCards("Crusaders")}
      </TabsContent>
      <TabsContent value="guardians">
        {renderRaceCards("Guardians")}
      </TabsContent>
      <TabsContent value="warrior monks">
        {renderRaceCards("Warrior Monks")}
      </TabsContent>
      <TabsContent value="crimson squad">
        {renderRaceCards("Crimson Squad")}
      </TabsContent>
      <TabsContent value="chocobo knights">
        {renderRaceCards("Chocobo Knights")}
      </TabsContent>
    </Tabs>
  );
}
