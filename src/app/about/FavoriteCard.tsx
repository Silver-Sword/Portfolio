import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, UndoDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FavoriteCardProps {
  category: string;
  name: string;
  link: string;
  height: number;
  image_url?: string;
}

export default function FavoriteCard({
  category,
  name,
  link,
  height,
  image_url,
}: FavoriteCardProps) {
  return (
    <Card className="h-full" style={{ minHeight: `${height * 10}px` }}>
      <div className="flex flex-col h-full">
        {image_url ? (
          <Image
            src={image_url}
            alt={name}
            width={300}
            height={300}
            className="w-full h-48 object-cover"
          />
        ) : null}
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <Badge className="self-start mb-2">{category}</Badge>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center text-blue-500 hover:text-blue-600"
        >
          Visit <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}
