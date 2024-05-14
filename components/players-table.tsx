import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";

interface PlayerProps {
  name: string;
  location: string;
  techniques: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

export default function PlayersTable({
  name,
  location,
  techniques,
  src,
  width,
  height,
  alt,
}: PlayerProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="flex justify-center items-center m-auto rounded-lg object-scale-down"
        />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{location}</TableCell>
      <TableCell className="text-right">{techniques}</TableCell>
    </TableRow>
  );
}
