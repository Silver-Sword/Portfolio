import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MasonryCard } from "@/components/ui/masonry/MasonryCard";
import { ImageData } from "@/lib/ImageData";
interface FavoriteCardProps {
  category: string;
  name: string;
  link: string;
  imageData: ImageData;
  columnWidth: number;
}

export default function FavoriteCard({
  category,
  name,
  link,
  imageData,
  columnWidth,
}: FavoriteCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-primary/80"
      title={`Check out ${name}`}
    >
      <div className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <MasonryCard columnWidth={columnWidth} imageData={imageData}>
          {/* <div
          className="relative w-full"
          style={{ paddingBottom: `${100 / imageAspectRatio}%` }}
        >
          <Image
            src={image_url}
            alt={`Image for ${name}`}
            fill
            className="object-cover"
          /> */}
          <div className="p-4 flex flex-col">
            <h3 className="text-lg font-semibold leading-tight mt-1 mb-3">
              {name}
            </h3>
            <div className="flex justify-between items-start mb-1">
              <p className="text-xs text-muted-foreground">
                {category.replace(/_/g, " ")}
              </p>
            </div>
          </div>
        </MasonryCard>
      </div>
    </Link>
  );
}
