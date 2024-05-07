"use client";
import { useState, useEffect } from "react";

import BasicCardLayout from "@/components/basic-card-layout";
import Image from "next/image";
import { motion } from "framer-motion";
import SkeletonCard from "@/components/isLoading";

interface Agencies {
  id: string;
  role: string;
  image: string;
  image_height: number;
  image_width: number;
  name: string;
}

export default function Agencies() {
  const [agencies, setAgencies] = useState<Agencies[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-agencies");
        const data = await response.json();
        setAgencies(data.agencies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="grid xl:grid-cols-2 gap-4 mx-12">
      {!agencies.length ? (
        <SkeletonCard />
      ) : (
        agencies.map((agency) => (
          <motion.div
            whileHover={{ translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            key={agency.id}
          >
            <BasicCardLayout title={agency.name} description={agency.role}>
              <Image
                src={agency.image}
                width={agency.image_width}
                height={agency.image_height}
                alt={agency.name}
                className="flex justify-center items-center m-auto rounded-lg h-[500px] w-[500px] object-cover"
              />
            </BasicCardLayout>
          </motion.div>
        ))
      )}
    </div>
  );
}
