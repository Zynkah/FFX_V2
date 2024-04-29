"use client";
import { useState, useEffect } from "react";
import BasicPageLayout from "@/components/basic-page-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

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
    <div className="grid grid-cols-2 gap-4 mx-12">
      {races
        .filter((race) => race.role === role)
        .map((race) => (
          <Card key={race.id}>
            <CardHeader>
              <CardTitle>{race.name}</CardTitle>
              <CardDescription>{race.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={race.image}
                width={race.image_width}
                height={race.image_height}
                alt={race.name}
              />
            </CardContent>
          </Card>
        ))}
    </div>
  );

  return (
    <BasicPageLayout title="Races & Creatures">
      <Tabs defaultValue="humanoids" className="text-center">
        <TabsList>
          <TabsTrigger value="humanoids">Humanoids</TabsTrigger>
          <TabsTrigger value="demiHumans">Demi-Humans</TabsTrigger>
          <TabsTrigger value="creatures">Creatures</TabsTrigger>
        </TabsList>
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
    </BasicPageLayout>
  );
}