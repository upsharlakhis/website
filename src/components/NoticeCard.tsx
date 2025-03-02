import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function NoticeCard({
  title,
  description,
  src,
  href,
}: {
  title: string;
  description?: string; // Make description optional here too
  src: string;
  href: string;
}) {
  return (
    <Link href={href} target="_blank" className="mx-auto block max-w-sm transition-transform hover:scale-[1.02]">
      <Card className="relative bg-admission overflow-hidden group h-[6rem]">


        {/* Content */}
        <CardHeader className="relative">
          <CardTitle className="text-lg font-bold">
            {title}
          </CardTitle>
        </CardHeader>

        {/* Icon */}
        <div className="absolute top-3 right-3 opacity-70 group-hover:opacity-100">
          <ExternalLink className="w-5 h-5" />
        </div>
      </Card>
    </Link>
  );
}