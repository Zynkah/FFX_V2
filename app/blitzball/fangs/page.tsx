"use client";
import { useState, useEffect } from "react";
import PlayersTable from "@/components/players-table";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

export default function AlBhedPsyches() {
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
        .filter((player) => player.team_name === "Ronso Fangs")
        .map((player) => (
          <PlayersTable
            key={player.id}
            name={player.name}
            location={player.location}
            techniques={player.techniques}
            src={player.image}
            width={player.image_width}
            height={player.image_height}
            alt={player.name}
          ></PlayersTable>
        ))}
    </Table>
  );
}
