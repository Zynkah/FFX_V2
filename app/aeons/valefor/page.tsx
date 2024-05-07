"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardDescription } from "@/components/ui/card";
import SimpleCardLayout from "@/components/simple-card-layout";

interface AeonDetails {
  id: string;
  role: string;
  name: string;
  description_1: string;
  description_2: string;
  description_3: string;
  location: string;
  image_profile: string;
  image_profile_height: number;
  image_profile_width: number;
  image_body: string;
  image_body_height: number;
  image_body_width: number;
  image_fayth: string;
  image_fayth_height: number;
  image_fayth_width: number;
}

export default function Valefor() {
  const [aeonDetails, setAeonDetails] = useState<AeonDetails[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-aeon-detail");
        const data = await response.json();
        setAeonDetails(data.aeon_detail);
        console.log(data.aeon_detail);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {aeonDetails
        .filter((aeon) => aeon.name === "Valefor")
        .map((aeon) => (
          <div key={aeon.name} className="space-y-4">
            <div className="flex flex-row gap-4">
              <Card className="m-auto p-4 border-none">
                <CardDescription>{aeon.description_1}</CardDescription>
              </Card>
              <Image
                src={aeon.image_profile}
                width={aeon.image_profile_width}
                height={aeon.image_profile_height}
                alt={aeon.name}
                className="flex justify-center items-center m-auto rounded-lg object-scale-down"
              />
            </div>

            <div className="flex flex-row gap-4">
              <Image
                src={aeon.image_body}
                width={aeon.image_body_width}
                height={aeon.image_body_height}
                alt={aeon.name}
                className="flex justify-center items-center m-auto rounded-lg  object-scale-down"
              />
              <Card className="m-auto p-4 border-none">
                <CardDescription>{aeon.description_2}</CardDescription>
              </Card>
            </div>

            <div className="flex flex-row gap-4">
              <Card className="m-auto p-4 border-none">
                <CardDescription>{aeon.description_3}</CardDescription>
              </Card>
              <Image
                src={aeon.image_fayth}
                width={aeon.image_fayth_width}
                height={aeon.image_fayth_height}
                alt={aeon.name}
                className="flex justify-center items-center m-auto rounded-lg object-scale-down"
              />
            </div>
          </div>
        ))}
    </div>
  );
}
