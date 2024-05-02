// "use client";
// import { useState, useEffect } from "react";
import BasicPageLayout from "@/components/basic-page-layout";
import PlayersTable from "@/components/players-table";
import {
  Table,
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

export async function generateStaticParams() {
  return [
    "besaid-aurochs",
    "kilika-beasts",
    "luca-goers",
    "ronso-fangs",
    "al-bhed-psyches",
    "guado-glories",
    "zanarkand-duggles",
    "zanarkand-abes",
    "yocun-nomads",
    "bevelle-bells",
    "free-agents",
  ].map((team) => ({
    teamId: team,
  }));
}

type Props = {
  params: {
    teamId: string;
  };
};

export default async function TeamsPage({ params: { teamId } }: Props) {
//   const [players, setPlayers] = useState<Players[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("/api/get-players");
//         const data = await response.json();
//         setPlayers(data.players);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, []);

    
    const player = await fetch("/api/get-players");
    const data = await player.json();
    const players = data.players;

  return (
    <BasicPageLayout title={teamId}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="">Technique</TableHead>
          </TableRow>
        </TableHeader>
        {/* {players
          .filter((player) => player.team_name === teamId)
          .map((player) => ( */}
            {/* <PlayersTable
              key={teamId}
              name={player.name}
              location={player.location}
              techniques={player.techniques}
            >
              <Image
                src={player.image}
                alt={player.name}
                height={player.image_height}
                width={player.image_width}
              />
            </PlayersTable>
        ))} */}
      </Table>
    </BasicPageLayout>
  );
}
