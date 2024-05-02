import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import BasicPageLayout from "@/components/basic-page-layout";
import Image from "next/image";
import PlayersTable from "@/components/players-table";

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
  const player = await fetch("/api/get-players");
  const data = await player.json();

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
        {data
          .filter((player: any) => player.team_name === teamId)
          .map((player: any) => (
            <PlayersTable
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
          ))}
      </Table>
    </BasicPageLayout>
  );
}
