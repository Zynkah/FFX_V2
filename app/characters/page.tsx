"use client";
import { useState, useEffect } from "react";
import BasicPageLayout from "@/components/basic-page-layout";
import BasicCardLayout from "@/components/basic-card-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
      }
    }

    fetchData();
  }, []);

  const renderCharacterCards = (role: String) => (
    <div className="grid lg:grid-cols-2 gap-4 mx-12">
      {characters
        .filter((character) => character.role === role)
        .map((character) => (
          <motion.div
            whileHover={{ translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            key={character.id}
          >
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
              <Image
                src={character.image}
                width={character.image_width}
                height={character.image_height}
                alt={character.name}
                className="m-auto"
              />
            </BasicCardLayout>
          </motion.div>
        ))}
    </div>
  );

  return (
    <BasicPageLayout title="Characters">
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
    </BasicPageLayout>
  );
}
