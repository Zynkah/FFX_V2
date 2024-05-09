"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import ScrollingTabs from "@/components/scrolling-tabs";

interface Equipment {
  id: string;
  role: string;
  name: string;
  weapon_image: string;
  weapon_image_height: number;
  weapon_image_width: number;
  weapon_name: string;
  armor_image: string;
  armor_image_height: number;
  armor_image_width: number;
  armor_name: string;
  description: string;
}

export default function Equipment() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-equipment");
        const data = await response.json();
        setEquipment(data.equipment);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const renderRaceCards = (role: String) => (
    <div>
      {equipment
        .filter((equipment) => equipment.role === role)
        .map((equip) => (
          <Card key={equip.id} className="border-none">
            <CardHeader>
              <div className="flex flex-row justify-center items-center m-auto">
                <Image
                  src={equip.weapon_image}
                  width={equip.weapon_image_width}
                  height={equip.weapon_image_height}
                  alt={equip.weapon_name}
                  className="flex rounded-lg object-scale-down aspect-square size-[180px] md:size-[300px]"
                />
                <Image
                  src={equip.armor_image}
                  width={equip.armor_image_width}
                  height={equip.armor_image_height}
                  alt={equip.armor_name}
                  className="flex rounded-lg object-scale-down aspect-square size-[180px] md:size-[300px]"
                />
              </div>
              <CardTitle>{equip.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{equip.description}</p>
            </CardContent>
          </Card>
        ))}
    </div>
  );

  return (
    <Tabs defaultValue="tidus" className="text-center">
      <ScrollingTabs>
        <TabsList>
          <TabsTrigger value="tidus">Tidus</TabsTrigger>
          <TabsTrigger value="yuna">Yuna</TabsTrigger>
          <TabsTrigger value="auron">Auron</TabsTrigger>
          <TabsTrigger value="kimahri">Kimahri</TabsTrigger>
          <TabsTrigger value="wakka">Wakka</TabsTrigger>
          <TabsTrigger value="lulu">Lulu</TabsTrigger>
          <TabsTrigger value="rikku">Rikku</TabsTrigger>
        </TabsList>
      </ScrollingTabs>
      <TabsContent value="tidus">
        {renderRaceCards("Tidus Equipment")}
      </TabsContent>
      <TabsContent value="yuna">
        {renderRaceCards("Yuna Equipment")}
      </TabsContent>
      <TabsContent value="auron">
        {renderRaceCards("Auron Equipment")}
      </TabsContent>
      <TabsContent value="kimahri">
        {renderRaceCards("Kimahri Equipment")}
      </TabsContent>
      <TabsContent value="wakka">
        {renderRaceCards("Wakka Equipment")}
      </TabsContent>
      <TabsContent value="lulu">
        {renderRaceCards("Lulu Equipment")}
      </TabsContent>
      <TabsContent value="rikku">
        {renderRaceCards("Rikku Equipment")}
      </TabsContent>
    </Tabs>
  );
}
