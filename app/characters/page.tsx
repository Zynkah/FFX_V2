"use client";
import { useState, useEffect } from "react";
import BasicPageLayout from "@/components/basic-page-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

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
            <Card className="relative hover:shadow-xl duration-500 ease-in-out">
              <CardHeader>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <Image
                        src={character.image}
                        width={character.image_width}
                        height={character.image_height}
                        alt={character.name}
                        className="m-auto"
                      />
                    </AccordionTrigger>

                    <AccordionContent>
                      <motion.article
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, transition: { duration: 1 } }}
                        variants={{
                          visible: { transition: { staggerChildren: 0.3 } },
                        }}
                        className="space-y-6 my-12"
                      >
                        <CardTitle>
                          <motion.h1
                            variants={{
                              hidden: { opacity: 0, y: -20 },
                              visible,
                            }}
                          >
                            {character.name}
                          </motion.h1>
                        </CardTitle>

                        <CardDescription className="max-w-[400px] mx-auto">
                          <motion.p variants={itemVariants}>
                            {character.description}
                          </motion.p>
                        </CardDescription>

                        <CardFooter className="absolute bottom-0 right-0">
                          <motion.p variants={itemVariants}>
                            {character.link && (
                              <Link href={character.link} className="hover:text-fuchsia-500"> Learn More →</Link>
                            )}
                          </motion.p>
                        </CardFooter>
                      </motion.article>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardHeader>
            </Card>
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
