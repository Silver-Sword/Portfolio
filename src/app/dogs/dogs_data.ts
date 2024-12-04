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
];

export function getDogs() {
  return DOGS.filter((dog) => dog.imageData !== undefined);
}
