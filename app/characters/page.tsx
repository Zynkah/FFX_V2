"use client";
import { useState, useEffect } from "react";
import BasicPageLayout from "@/components/basic-page-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

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
    <div className="grid grid-cols-2 gap-4 mx-12">
      {characters
        .filter((character) => character.role === role)
        .map((character) => (
          <Card key={character.id}>
            <CardHeader>
              <CardTitle>{character.name}</CardTitle>
              <CardDescription>{character.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={character.image}
                width={character.image_width}
                height={character.image_height}
                alt={character.name}
              />
            </CardContent>
            <CardFooter>
              {character.link ? (
                <Link href={character.link}> Learn More →</Link>
              ) : (
                <></>
              )}
            </CardFooter>
          </Card>
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
