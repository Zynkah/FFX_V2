'use client';
import BasicPageLayout from "@/components/basic-page-layout"
import BasicCardLayout from "@/components/basic-card-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Religion() {
        return (
          <BasicPageLayout title="Religion">
            <Tabs className="text-center">
              <TabsList>
                <TabsTrigger value="maesters">Maesters</TabsTrigger>
                <TabsTrigger value="summoners">Summoners</TabsTrigger>
                <TabsTrigger value="aeons">Aeons</TabsTrigger>
                    </TabsList>
              <TabsContent value="maesters">
                {/* {renderRaceCards("Maesters")} */}
              </TabsContent>
              <TabsContent value="summoners">
                {/* {renderRaceCards("Summoners")} */}
              </TabsContent>
              <TabsContent value="aeons">
                {/* {renderRaceCards("Aeons")} */}
              </TabsContent>
            </Tabs>
            <div className="grid md:grid-cols-2 gap-4 m-8">
              <Image
                src="/images/Child_Seymour.webp"
                height={400}
                width={357}
                style={{
                  margin: "auto",
                  borderRadius: "5px",
                }}
                alt="Child Seymour with Anima"
              />
              <p>
                Religion is an important part of life for many of the peoples of
                Spira, with a large majority of the population describing
                themselves as &quot;Yevonites&quot;. Though by the end of Final
                Fantasy X some people had begun to question them, nevertheless
                the teachings of Yevon were millennium-old and heavily
                influential. The Yevonite clergy taught that Sin was a divine
                punishment set upon the people for their pride in the use of
                machines. As a result, the temples forbade the use of modern
                technology, and promoted a culture of atonement for past sins in
                the hopes of appeasing Sin. While the Yevon church forbids most
                machina including weapons, their capital Bevelle retains machina
                to ensure its dominance. The Al Bhed are seen as dangerous to
                the Yevon clergy because they use machina and pose a threat to
                the church&apos;s uncontested control of Spira. The church
                retains its power by role in using the Final Summoning which
                results in the sacrifice of the summoner and her guardian to
                prevent its secrets from being divulged. Though Yevon set up
                Operation Mi&apos;ihen to instill further loyalty to the
                teachings by making the Crusaders use machina that would never
                win against Sin.
              </p>
            </div>
          </BasicPageLayout>
        );
}