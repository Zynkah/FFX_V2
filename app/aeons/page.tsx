"use client";
import { useState, useEffect } from "react";
import BasicPageLayout from "@/components/basic-page-layout";
import BasicCardLayout from "@/components/basic-card-layout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Aeon {
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

export default function Aeons() {
  const [aeons, setAeons] = useState<Aeon[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-aeons");
        const data = await response.json();
        setAeons(data.aeons);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <BasicPageLayout title="Aeons">
      <div className="grid lg:grid-cols-2 gap-4 mx-12">
        {Array.isArray(aeons) &&
          aeons.map((aeon) => (
            <motion.div
              whileHover={{ translateY: -3 }}
              whileTap={{ scale: 0.95 }}
              key={aeon.id}
            >
              <BasicCardLayout
                title={aeon.name}
                description={aeon.description}
                link={
                  aeon.link && (
                    <Link href={aeon.link} className="hover:text-fuchsia-500">
                      Learn More →
                    </Link>
                  )
                }
              >
                <Image
                  src={aeon.image}
                  width={aeon.image_width}
                  height={aeon.image_height}
                  alt={aeon.name}
                  className="m-auto"
                />
              </BasicCardLayout>
            </motion.div>
          ))}
      </div>
    </BasicPageLayout>
  );
}
