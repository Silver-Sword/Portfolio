import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface FavoriteCardProps {
  category: string;
  name: string;
  link: string;
  image_url: string;
  imageAspectRatio: number;
}

export default function FavoriteCard({
  category,
  name,
  link,
  image_url,
  imageAspectRatio,
}: FavoriteCardProps) {
  return (
    <div
      className="break-inside-avoid"
      style={{
        gridRowEnd: `span ${Math.floor((200 / (imageAspectRatio || 1)) * 0.046) + 4}`,
      }}
    >
      <Card className="h-full flex flex-col">
        <div
          className="relative w-full"
          style={{ paddingBottom: `${100 / imageAspectRatio}%` }}
        >
          <Image
            src={image_url}
            alt={`Image for ${name}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 flex flex-col justify-between h-[88px]">
          <div className="flex justify-between items-start">
            <Badge variant="secondary" className="text-xs">
              {category.replace(/_/g, " ")}
            </Badge>
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Visit {name}</span>
            </Link>
          </div>
          <h3 className="text-lg font-semibold leading-tight">{name}</h3>
        </div>
      </Card>
    </div>
  );
}
