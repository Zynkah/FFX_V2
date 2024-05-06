"use client";
import { useState, useEffect } from "react";
import BasicCardLayout from "@/components/basic-card-layout";
import Image from "next/image";
import { motion } from "framer-motion";

interface Summoner {
  id: string;
  role: string;
  image: string | null;
  image_height: number | null;
  image_width: number | null;
  name: string;
  description: string;
}

export default function Summoners() {
  const [summoners, setSummoners] = useState<Summoner[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-summoners");
        const data = await response.json();
        setSummoners(data.summoners);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-4 mx-12">
      {Array.isArray(summoners) &&
        summoners.map((summoner) => (
          <motion.div
            whileHover={{ translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            key={summoner.id}
          >
            <BasicCardLayout
              title={summoner.name}
              description={summoner.description}
            >
              {summoner?.image &&
                summoner?.image_width &&
                summoner?.image_height && (
                  <Image
                    src={summoner.image}
                    width={summoner.image_width}
                    height={summoner.image_height}
                    alt={summoner.name}
                    className="flex justify-center items-center m-auto rounded-lg h-[500px] w-[500px] object-scale-down"
                  />
                )}
            </BasicCardLayout>
          </motion.div>
        ))}
    </div>
  );
}
