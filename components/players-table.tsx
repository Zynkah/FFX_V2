import { TableCell, TableRow } from "@/components/ui/table";

interface PlayerProps {
  name: string;
  location: string;
  techniques: string;
  children: React.ReactNode;
}

export default function PlayersTable({
  name,
  location,
  techniques,
  children,
}: PlayerProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{children}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{location}</TableCell>
      <TableCell className="text-right">{techniques}</TableCell>
    </TableRow>
  );
}
