import ScrollingTabs from "./scrolling-tabs";
import { religionTabs } from "@/data/religion-tabs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function ReligionTabs() {
  return (
    <>
      <Tabs className="text-center">
        <ScrollingTabs>
          <TabsList>
            {religionTabs.map(({ id, link, value, title }) => (
              <Link key={id} href={link}>
                <TabsTrigger value={value}>{title}</TabsTrigger>
              </Link>
            ))}
          </TabsList>
        </ScrollingTabs>
      </Tabs>
    </>
  );
}
