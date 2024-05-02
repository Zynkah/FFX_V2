"use client";
import { useState, useEffect } from "react";
import BasicPageLayout from "@/components/basic-page-layout";
import PlayersTable from "@/components/players-table"; 
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";


interface Players {
  id: string;
  team_name: string;
  name: string;
  location: string;
  techniques: string;
  image: string;
  image_height: number;
  image_width: number;
}


export default function BesaidAurochs() {
   const [players, setPlayers] = useState<Players[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/get-players");
        const data = await response.json();
        setPlayers(data.players);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <BasicPageLayout title="Besaid Aurochs">
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="">Technique</TableHead>
        </TableRow>
      </TableHeader>
      {players
        .filter((player) => player.team_name === "Besaid Aurochs")
        .map((player) => (
          <PlayersTable
            key={player.id}
            name={player.name}
            location={player.location}
            techniques={player.techniques}
          >
            <Image
              src={player.image}
              width={player.image_width}
              height={player.image_height}
              alt={player.name}
              className="flex justify-center items-center m-auto rounded-lg object-scale-down"
            />
          </PlayersTable>
        ))}</Table>
    
    </BasicPageLayout>
  );
  }

