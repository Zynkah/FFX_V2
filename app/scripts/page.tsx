"use client";
import { useState, useEffect } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface Script {
  id: string;
  role: string;
  name: string;
  description: string;
  image: string;
  image_name: string;
  image_height: number;
  image_width: number;
  script_image: string;
  script_image_name: string;
  script_image_height: number;
  script_image_width: number;
}

export default function Scripts() {
  const [scripts, setScripts] = useState<Script[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-scripts");
        const data = await response.json();
        setScripts(data.scripts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const renderScriptCards = (role: String) => (
    <div className="mx-12">
      {scripts
        .filter((script) => script.role === role)
        .map((script) => (
          <Card
            key={script.id}
            className="text-center grid grid-cols-2 items-center p-4 border-none"
          >
            <CardHeader className="space-y-4">
              <CardTitle>{script.name}</CardTitle>
              <CardDescription>{script.description}</CardDescription>
              <Image
                src={script.image}
                width={script.image_width}
                height={script.image_height}
                alt={script.image_name}
                className="rounded-lg mx-auto"
              />
            </CardHeader>
            <CardContent>
              <Image
                src={script.script_image}
                width={script.script_image_width}
                height={script.script_image_height}
                alt={script.script_image_name}
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        ))}
    </div>
  );

  return (
    <Tabs defaultValue="spiran" className="text-center">
      <TabsList>
        <TabsTrigger value="spiran">Spiran Script</TabsTrigger>
        <TabsTrigger value="alBhed">Al Bhed Script</TabsTrigger>
        <TabsTrigger value="yevon">Yevon Script</TabsTrigger>
      </TabsList>
      <TabsContent value="spiran">
        {renderScriptCards("Spiran Scripts")}
      </TabsContent>
      <TabsContent value="alBhed">
        {renderScriptCards("Al Bhed Scripts")}
      </TabsContent>
      <TabsContent value="yevon">
        {renderScriptCards("Yevon Scripts")}
      </TabsContent>
    </Tabs>
  );
}
