import { ImageData } from "@/lib/ImageData";

export type DogProperties = {
  name: string;
  imageData?: ImageData;
  description: string;
};

const IMAGE_URL = "/dog-images";

export const DOGS: DogProperties[] = [
  {
    name: "Buddy",
    description: "Family Dog",
    imageData: {
      url: `${IMAGE_URL}/Buddy.jpg`,
      pixelWidth: 3024,
      pixelHeight: 4032,
      alt: "Buddy",
    },
  },
  {
    name: "Bailey",
    description: "Family Dog",
    imageData: {
      url: `${IMAGE_URL}/Bailey.jpg`,
      pixelWidth: 3072,
      pixelHeight: 2304,
      alt: "Bailey",
    },
  },
  {
    name: "Molly",
    description: "Family Dog",
  },
  {
    name: "Ferris",
    description: "Cousin's Dog",
  },
  {
    name: "Mora",
    description: "Statsig",
    imageData: {
      url: `${IMAGE_URL}/Mora.jpg`,
      pixelWidth: 3024,
      pixelHeight: 4032,
      alt: "Mora",
    },
  },
  {
    name: "Kiwi",
    description: "Statsig",
  },
  {
    name: "Ollie",
    description: "Statsig",
    imageData: {
      url: `${IMAGE_URL}/Ollie.jpg`,
      pixelWidth: 3024,
      pixelHeight: 4032,
      alt: "Ollie",
    },
  },
  {
    name: "Ross",
    description: "Statsig",
    imageData: {
      url: `${IMAGE_URL}/Ross.jpg`,
      pixelWidth: 1200,
      pixelHeight: 664,
      alt: "Ross",
    },
  },
  {
    name: "Bodie",
    description: "Statsig",
    imageData: {
      url: `${IMAGE_URL}/Bodie.jpg`,
      pixelWidth: 3072,
      pixelHeight: 4096,
      alt: "Bodie",
    },
  },
  {
    name: "Smudge",
    description: "Statsig",
    imageData: {
      url: `${IMAGE_URL}/Smudge.jpg`,
      pixelWidth: 2048,
      pixelHeight: 2731,
      alt: "Smudge",
    },
  },
  {
    name: "Charlie",
    description: "Statsig",
    imageData: {
      url: `${IMAGE_URL}/Charlie.jpg`,
      pixelWidth: 400,
      pixelHeight: 600,
      alt: "Charlie",
    },
  },
  {
    name: "Olaf",
    description: "Family Friend",
    imageData: {
      url: `${IMAGE_URL}/Olaf.jpg`,
      pixelWidth: 3024,
      pixelHeight: 4032,
      alt: "Olaf",
    },
  },
  {
    name: "Sven",
    description: "Family Friend",
    imageData: {
      url: `${IMAGE_URL}/Sven.jpg`,
      pixelWidth: 3024,
      pixelHeight: 4032,
      alt: "Sven",
    },
  },
  {
    name: "Kirby",
    description: "Statsig",
    imageData: {
      url: `${IMAGE_URL}/Kirby.jpg`,
      pixelWidth: 400,
      pixelHeight: 600,
      alt: "Kirby",
    },
  },
];

export function getDogs() {
  return DOGS.filter((dog) => dog.imageData !== undefined) as (DogProperties & {
    imageData: ImageData;
  })[];
}
