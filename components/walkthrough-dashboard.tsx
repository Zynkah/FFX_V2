import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zanarkandBoss, zanarkandStory } from "@/data/zanarkand-data";
import Image from "next/image";

export default function WalkthroughDashboard() {
  return (
    <div>
      <Card className="w-[700px] relative">
        <CardHeader>
          <CardTitle>Zanarkand</CardTitle>

          <Tabs defaultValue="objective" className="mx-auto">
            <TabsList>
              <TabsTrigger value="objective">Objective</TabsTrigger>
              <TabsTrigger value="enemies">Enemies</TabsTrigger>
              <TabsTrigger value="story">Story</TabsTrigger>
              <TabsTrigger value="boss">Boss</TabsTrigger>
            </TabsList>

            <TabsContent value="objective">
              <ul className="list-disc">
                <li>Break through the Sinscales</li>
                <li>Eliminate the Sinspawn</li>
              </ul>
            </TabsContent>
            <TabsContent value="enemies">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Sinscales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul>
                      <li>HP: 100 | AP: 0</li>
                      <li>Gil: 0</li>
                      <li>Drop: N/A</li>
                      <li>Steal: N/A</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Sinspawn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul>
                      <li>HP: 2400 | AP: 0</li>
                      <li>Gil: 0</li>
                      <li>Drop: N/A</li>
                      <li>Steal: N/A</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="story">
              <div className="flex gap-4">
                <div className="flex-1 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>The Star Blitzer</CardTitle>
                    </CardHeader>
                    <CardContent>
                      As the game begins, Tidus is on his way to a blitzball
                      match at Zanarkand&apos;s stadium. He is stopped by a
                      small crowd that has gathered outside of his residence.
                      After speaking with the people in the crowd, he can move
                      past them. To get to the stadium, he travels across a
                      bridge full of people. While jogging down the bridge, a
                      presentation of Jecht, Tidus&apos;s father, is played on a
                      big screen. Jecht was a legendary Blitzball player who
                      mysteriously dissapeared. As you approach the stadium, a
                      crowd mobs Tidus and won&apos;t let him through. He
                      squeezes through the people to the large doorway.
                    </CardContent>
                  </Card>
                  <Image
                    src="/images/Dream_Zanarkand.jpg"
                    width={320}
                    height={100}
                    alt="Dream Zanarkand"
                    className="flex justify-center items-center m-auto rounded-lg  md:size[500px] object-cover"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  {zanarkandStory.map((story) => (
                    <Card key={story.id}>
                      <CardHeader>
                        <CardTitle>{story.title}</CardTitle>
                      </CardHeader>
                      <CardContent>{story.description}</CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="boss">
              {zanarkandBoss.map((boss) => (
                <Card key={boss.id}>
                  <CardHeader>
                    <CardTitle>{boss.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative space-y-4">
                    <div className="flex gap-4">
                      <p className="my-auto">{boss.description_1} </p>
                      <div className="p-4 border rounded-lg mr-4">
                        {boss.magic}
                      </div>
                    </div>
                    <p>{boss.description_2}</p>
                    <p>{boss.description_3}</p>
                    <p>{boss.description_4}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </CardHeader>
        {/* <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </div>
  );
}
