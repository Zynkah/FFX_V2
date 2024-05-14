"use client";
import { useState, useEffect } from "react";
import BasicCardLayout from "@/components/clickable-card-layout";
import Image from "next/image";
import { motion } from "framer-motion";
import ReligionTabs from "@/components/religion-tabs";

interface Maesters {
  id: string;
  role: string;
  image: string;
  image_height: number;
  image_width: number;
  name: string;
}

export default function Maesters() {
  const [maesters, setMaesters] = useState<Maesters[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-maesters");
        const data = await response.json();
        setMaesters(data.maesters);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <ReligionTabs />
      <div className="grid lg:grid-cols-2 gap-4 mx-12 mt-6">
        {maesters.map((maester) => (
          <motion.div
            whileHover={{ translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            key={maester.id}
          >
            <BasicCardLayout
              key={maester.id}
              title={maester.name}
              description={maester.role}
            >
              <Image
                src={maester.image}
                width={maester.image_width}
                height={maester.image_height}
                alt={maester.name}
                className="flex justify-center items-center m-auto rounded-lg aspect-square md:h-[500px] md:w-[500px] object-scale-down"
              />
            </BasicCardLayout>
          </motion.div>
        ))}
      </div>
    </>
  );
}
