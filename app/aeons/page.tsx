"use client";
import { useState, useEffect } from "react";
import BasicPageLayout from "@/components/basic-page-layout";
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
      <div className="grid grid-cols-2 gap-4 mx-12">
        {Array.isArray(aeons) &&
          aeons.map((aeon) => (
            <Card key={aeon.id} className="">
              <CardHeader>
                <CardTitle>{aeon.name}</CardTitle>
                <CardDescription>{aeon.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={aeon.image}
                  width={aeon.image_width}
                  height={aeon.image_height}
                  alt={aeon.name}
                />
                <p>Location: {aeon.location}</p>
              </CardContent>
              <CardFooter>
                <Link href={aeon.link} className="buttonLink">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>
    </BasicPageLayout>
  );
}
