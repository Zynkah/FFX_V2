import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ScrollingTabsProps {
  children: React.ReactNode;
}

export default function ScrollingTabs({ children }: ScrollingTabsProps) {
  return (
    <div className="w-screen lg:w-3/4 lg:mx-auto relative h-10">
      <ScrollArea>
        {children}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
