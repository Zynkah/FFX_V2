import { Card, CardDescription } from "@/components/ui/card";

interface SimpleCardLayoutProps {
  description_1: string;
  description_2: string;
  description_3: string;
}

export default function SimpleCardLayout({
  description_1,
  description_2,
  description_3,
}: SimpleCardLayoutProps) {
  return (
    <>
      <Card className="">
        <CardDescription className="">{description_1}</CardDescription>
      </Card>
      <Card className="">
        <CardDescription className="">{description_2}</CardDescription>
      </Card>
      <Card className="">
        <CardDescription className="">{description_3}</CardDescription>
      </Card>
    </>
  );
}
