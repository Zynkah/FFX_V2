"use client";
import { useState, useEffect } from "react";
import BasicPageLayout from "@/components/basic-page-layout";
import BasicCardLayout from "@/components/basic-card-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <div className="mx-12">
      {equipment
        .filter((equipment) => equipment.role === role)
        .map((equip) => (
          <motion.div
            whileHover={{ translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            key={equip.id}
          >
                <BasicCardLayout title={equip.name} description={equip.description}>
                    <div className='flex xl:flex-row flex-col'>
              <Image
                src={equip.weapon_image}
                width={equip.weapon_image_width}
                height={equip.weapon_image_height}
                alt={equip.weapon_name}
                className="flex justify-center items-center m-auto rounded-lg [500px] w-[500px] object-scale-down"
              />
              <Image
                src={equip.armor_image}
                width={equip.armor_image_width}
                height={equip.armor_image_height}
                alt={equip.armor_name}
                className="flex justify-center items-center m-auto rounded-lg [500px] w-[500px] object-scale-down"
              /></div>
            </BasicCardLayout>
          </motion.div>
        ))}
    </div>
  );

  return (
    <BasicPageLayout title="Equipment">
      <Tabs defaultValue="tidus" className="text-center">
        <TabsList>
          <TabsTrigger value="tidus">Tidus</TabsTrigger>
          <TabsTrigger value="yuna">Yuna</TabsTrigger>
          <TabsTrigger value="auron">Auron</TabsTrigger>
          <TabsTrigger value="kimahri">Kimahri</TabsTrigger>
          <TabsTrigger value="wakka">Wakka</TabsTrigger>
          <TabsTrigger value="lulu">Lulu</TabsTrigger>
          <TabsTrigger value="rikku">Rikku</TabsTrigger>
        </TabsList>
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
    </BasicPageLayout>
  );
}
