"use client";

import BasicPageLayout from "@/components/basic-page-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function Characters() {
  return (
    <BasicPageLayout title="Characters">
      <Tabs defaultValue="account" className="w-[400px] text-center">
        <TabsList>
          <TabsTrigger value="mainCharacters">Main Characters</TabsTrigger>
          <TabsTrigger value="sideCharacters">Side Characters</TabsTrigger>
        </TabsList>
        <TabsContent value="mainCharacters">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="sideCharacters">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </BasicPageLayout>
  );
}
