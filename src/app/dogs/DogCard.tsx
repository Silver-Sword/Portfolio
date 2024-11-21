import Image from "next/image";

import { DogProperties } from "./dogs_data";

export function DogCard({ name, description, image }: DogProperties) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
      <Image
        src={image as string}
        alt={name}
        width={200}
        height={300}
        className="h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
