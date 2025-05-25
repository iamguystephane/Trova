import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function ContactCard({ Icon, content }) {
  return (
    <Link
      href={`${content.includes("6") ? `tel:${content}` : `mailto:${content}`}`}
    >
      <Card className="w-[300px] h-[200px] flex items-center justify-center flex-col hover:-translate-y-4 transition-all duration-300 ease-in-out cursor-pointer">
        <CardHeader>
          <CardTitle>
            <Icon color="orangered" />
          </CardTitle>
        </CardHeader>

        <CardContent>{content}</CardContent>
      </Card>
    </Link>
  );
}
