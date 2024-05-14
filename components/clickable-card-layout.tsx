import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface BasicCardLayoutProps {
  key: string;
  title: string;
  description: string;
  link?: React.ReactNode;
  children?: React.ReactNode;
}

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

export default function BasicCardLayout({
  key,
  title,
  description,
  link,
  children,
}: BasicCardLayoutProps) {
  return (
    <div key={key}>
      <Card className="relative hover:shadow-xl duration-500 ease-in-out">
        <CardHeader>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <motion.div
                  whileHover={{ translateY: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {children}
                </motion.div>
              </AccordionTrigger>

              <AccordionContent>
                <motion.article
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 1 } }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.3 } },
                  }}
                  className="space-y-6 my-12 text-center"
                >
                  <CardTitle>
                    <motion.h1
                      variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible,
                      }}
                    >
                      {title}
                    </motion.h1>
                  </CardTitle>

                  <CardDescription className="max-w-[352px] mx-auto">
                    <motion.p variants={itemVariants}>{description}</motion.p>
                  </CardDescription>

                  <CardFooter className="absolute bottom-0 right-0">
                    <motion.p variants={itemVariants}>{link}</motion.p>
                  </CardFooter>
                </motion.article>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardHeader>
      </Card>
    </div>
  );
}
