"use client";
import { useState, useEffect } from "react";
import BasicCardLayout from "@/components/clickable-card-layout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import SkeletonCard from "@/components/isLoading";
import ScrollingTabs from "@/components/scrolling-tabs";

interface Location {
  id: string;
  role: string;
  image: string;
  image_height: number;
  image_width: number;
  name: string;
  description: string;
  link: string | null;
}

export default function Locations() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-locations");
        const data = await response.json();
        setLocations(data.locations);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const renderLocationCards = (role: String) => (
    <div className="grid xl:grid-cols-2 gap-4 mx-12 mt-6">
      {!locations.length ? (
        <SkeletonCard />
      ) : (
        locations
          .filter((location) => location.role === role)
          .map((location) => (
            <motion.div
              whileHover={{ translateY: -3 }}
              whileTap={{ scale: 0.95 }}
              key={location.id}
            >
              <BasicCardLayout
                key={location.id}
                title={location.name}
                description={location.description}
              >
                <Image
                  src={location.image}
                  width={location.image_width}
                  height={location.image_height}
                  alt={location.name}
                  className="flex justify-center items-center m-auto rounded-lg aspect-square md:size[500px] object-cover"
                />
              </BasicCardLayout>
            </motion.div>
          ))
      )}
    </div>
  );

  return (
    <>
      <Tabs className="text-center">
        <ScrollingTabs>
          <TabsList>
            <Link href="/temples">
              <TabsTrigger value="temples">Temples</TabsTrigger>
            </Link>
            <Link href="/agencies">
              <TabsTrigger value="agencies">Agencies</TabsTrigger>
            </Link>
          </TabsList>
        </ScrollingTabs>
      </Tabs>
      {renderLocationCards("Location")}
    </>
  );
}
