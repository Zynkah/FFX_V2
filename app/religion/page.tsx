"use client";

import ScrollingTabs from "@/components/scrolling-tabs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export default function Religion() {
  return (
    <>
      <Tabs className="text-center">
        <ScrollingTabs>
          <TabsList>
            <Link href="/maesters">
              <TabsTrigger value="maesters">Maesters</TabsTrigger>
            </Link>
            <Link href="/summoners">
              <TabsTrigger value="summoners">Summoners</TabsTrigger>
            </Link>
            <Link href="/aeons">
              <TabsTrigger value="aeons">Aeons</TabsTrigger>
            </Link>
          </TabsList>
        </ScrollingTabs>
      </Tabs>
      <div className="p-4 md:p-16 max-w-prose">
        <p className="text-lg">
          <span className="text-2xl">R</span>eligion is an important part of
          life for many of the peoples of Spira, with a large majority of the
          population describing themselves as{" "}
          <span className="italic">
            <q>Yevonites</q>
          </span>
          .
        </p>
        <div>
          <Image
            src="/images/Child_Seymour.webp"
            height={400}
            width={357}
            alt="Child Seymour with Anima"
            className="m-auto md:float-left xl:float-none p-4"
          />
          <p>
            Though by the end of Final Fantasy X some people had begun to
            question them, nevertheless the teachings of Yevon were
            millennium-old and heavily influential. The Yevonite clergy taught
            that Sin was a divine punishment set upon the people for their pride
            in the use of machines. As a result, the temples forbade the use of
            modern technology, and promoted a culture of atonement for past sins
            in the hopes of appeasing Sin. While the Yevon church forbids most
            machina including weapons, their capital Bevelle retains machina to
            ensure its dominance. The Al Bhed are seen as dangerous to the Yevon
            clergy because they use machina and pose a threat to the
            church&apos;s uncontested control of Spira. The church retains its
            power by role in using the Final Summoning which results in the
            sacrifice of the summoner and her guardian to prevent its secrets
            from being divulged. Though Yevon set up Operation Mi&apos;ihen to
            instill further loyalty to the teachings by making the Crusaders use
            machina that would never win against Sin.
          </p>
        </div>
      </div>
    </>
  );
}
