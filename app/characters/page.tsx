"use client";
import { useState, useEffect } from "react";
import BasicCardLayout from "@/components/clickable-card-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SkeletonCard from "@/components/isLoading";

interface Character {
  id: string;
  role: string;
  image: string;
  image_height: number;
  image_width: number;
  name: string;
  description: string;
  link: string | null;
}

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-characters");
        const data = await response.json();
        setCharacters(data.characters);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    }

    fetchData();
  }, []);

  const renderCharacterCards = (role: String) => (
    <div className="grid xl:grid-cols-2 gap-4 mx-12">
      {!characters.length ? (
        <SkeletonCard />
      ) : (
        characters
          .filter((character) => character.role === role)
          .map((character) => (
            <div key={character.id}>
              <BasicCardLayout
                title={character.name}
                description={character.description}
                link={
                  character.link && (
                    <Link
                      href={character.link}
                      className="hover:text-fuchsia-500"
                    >
                      Learn More →
                    </Link>
                  )
                }
              >
                <motion.div
                  whileHover={{ translateY: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={character.image}
                    width={character.image_width}
                    height={character.image_height}
                    alt={character.name}
                    className="flex justify-center items-center m-auto rounded-lg md:h-[500px] md:w-[500px] aspect-square object-scale-down"
                  />
                </motion.div>
              </BasicCardLayout>
            </div>
          ))
      )}
    </div>
  );

  return (
    <Tabs defaultValue="mainCharacters" className="text-center">
      <TabsList>
        <TabsTrigger value="mainCharacters">Main Characters</TabsTrigger>
        <TabsTrigger value="sideCharacters">Side Characters</TabsTrigger>
      </TabsList>
      <TabsContent value="mainCharacters">
        {renderCharacterCards("Main Characters")}
      </TabsContent>
      <TabsContent value="sideCharacters">
        {renderCharacterCards("Supporting Characters")}
      </TabsContent>
    </Tabs>
  );
}
