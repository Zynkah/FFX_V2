"use client";
import { useState, useEffect } from "react";

import BasicCardLayout from "@/components/basic-card-layout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Temple {
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

export default function Temples() {
  const [temples, setTemples] = useState<Temple[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-temples");
        const data = await response.json();
        setTemples(data.temples);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (

      <div className="grid lg:grid-cols-2 gap-4 mx-12">
        {Array.isArray(temples) &&
          temples.map((temple) => (
            <motion.div
              whileHover={{ translateY: -3 }}
              whileTap={{ scale: 0.95 }}
              key={temple.id}
            >
              <BasicCardLayout
                title={temple.name}
                description={temple.description}
                link={
                  temple.link && (
                    <Link href={temple.link} className="hover:text-fuchsia-500">
                      Learn More →
                    </Link>
                  )
                }
              >
                <Image
                  src={temple.image}
                  width={temple.image_width}
                  height={temple.image_height}
                  alt={temple.name}
                  className="flex justify-center items-center m-auto rounded-lg h-[500px] w-[500px] object-cover"
                />
              </BasicCardLayout>
            </motion.div>
          ))}
      </div>

  );
}
