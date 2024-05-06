"use client";
import { useState, useEffect } from "react";
import BasicCardLayout from "@/components/basic-card-layout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlitzballTeams {
  id: string;
  role: string;
  image: string;
  image_height: number;
  image_width: number;
  name: string;
  description: string;
  link: string;
  location: string;
}

export default function BlitzballTeams() {
  const [teams, setTeams] = useState<BlitzballTeams[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-teams");
        const data = await response.json();
        setTeams(data.teams);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (

      <div className="grid lg:grid-cols-2 gap-4 mx-12">
        {Array.isArray(teams) &&
          teams.map((team) => (
            <motion.div
              whileHover={{ translateY: -3 }}
              whileTap={{ scale: 0.95 }}
              key={team.id}
            >
              <BasicCardLayout
                title={team.name}
                description={team.description}
                link={
                  team.link && (
                    <Link href={team.link} className="hover:text-fuchsia-500">
                      Learn More →
                    </Link>
                  )
                }
              >
                <Image
                  src={team.image}
                  width={team.image_width}
                  height={team.image_height}
                  alt={team.name}
                  className="flex justify-center items-center m-auto rounded-lg h-[500px] w-[500px] object-scale-down"
                />
              </BasicCardLayout>
            </motion.div>
          ))}
      </div>

  );
}
