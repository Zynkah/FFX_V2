"use client";

import Image from "next/image";
import { Card, CardDescription } from "@/components/ui/card";

interface AeonDetailProps {
  key: string;
  description_1: string;
  description_2: string;
  description_3: string;
  src_1: string;
  src_2: string;
  src_3: string;
  alt_1: string;
  alt_2: string;
  alt_3: string;
  width_1: number;
  width_2: number;
  width_3: number;
  height_1: number;
  height_2: number;
  height_3: number;
}

export default function AeonDetailCard({
  key,
  description_1,
  description_2,
  description_3,
  src_1,
  src_2,
  src_3,
  alt_1,
  alt_2,
  alt_3,
  width_1,
  width_2,
  width_3,
  height_1,
  height_2,
  height_3,
}: AeonDetailProps) {
  return (
    <div key={key} className="space-y-4">
      <div className="flex md:flex-row flex-col gap-4">
        <Card className="m-auto p-4 border-none">
          <CardDescription>{description_1}</CardDescription>
        </Card>
        <Image
          src={src_1}
          width={width_1}
          height={height_1}
          alt={alt_1}
          className="flex justify-center items-center m-auto rounded-lg object-scale-down"
        />
      </div>

      <div className="flex md:flex-row flex-col gap-4">
        <Image
          src={src_2}
          width={width_2}
          height={height_2}
          alt={alt_2}
          className="flex justify-center items-center m-auto rounded-lg  object-scale-down"
        />
        <Card className="m-auto p-4 border-none">
          <CardDescription>{description_2}</CardDescription>
        </Card>
      </div>

      <div className="flex md:flex-row flex-col gap-4">
        <Card className="m-auto p-4 border-none">
          <CardDescription>{description_3}</CardDescription>
        </Card>
        <Image
          src={src_3}
          width={width_3}
          height={height_3}
          alt={alt_3}
          className="flex justify-center items-center m-auto rounded-lg object-scale-down"
        />
      </div>
    </div>
  );
}
