import { ImageData } from "@/lib/ImageData";

export type DogProperties = {
  name: string;
  imageData?: ImageData;
  description: string;
  lastPet: string;
};

const IMAGE_URL = "/dog-images";

export const DOGS: DogProperties[] = [
  {
    name: "Buddy",
    description: "Family",
    lastPet: "June 2023",
    imageData: {
      url: `${IMAGE_URL}/Buddy.jpg`,
      pixelWidth: 3024,
      pixelHeight: 4032,
      alt: "Buddy",
    },
  },
  {
    name: "Bailey",
    description: "Family",
    lastPet: "April 2019",
    imageData: {
      url: `${IMAGE_URL}/Bailey.jpg`,
      pixelWidth: 3072,
      pixelHeight: 2304,
      alt: "Bailey",
    },
  },
  {
    name: "Molly",
    lastPet: "2007",
    description: "Family Dog",
  },

  {
    name: "Olaf",
    lastPet: "December 2024",
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
    lastPet: "December 2024",
    description: "Family Friend",
    imageData: {
      url: `${IMAGE_URL}/Sven.jpg`,
      pixelWidth: 3024,
      pixelHeight: 4032,
      alt: "Sven",
    },
  },
  {
    name: "Ferris",
    lastPet: "November 2024",
    description: "Cousin",
    imageData: {
      url: `${IMAGE_URL}/Ferris.png`,
      pixelWidth: 875,
      pixelHeight: 874,
      alt: "Ferris",
    },
  },
  {
    name: "Mora",
    lastPet: "August 2024",
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
    lastPet: "August 2024",
    description: "Statsig",
    imageData: {
      url: `${IMAGE_URL}/Kiwi.jpg`,
      pixelWidth: 2048,
      pixelHeight: 1145,
      alt: "Kiwi",
    },
  },
  {
    name: "Ollie",
    lastPet: "August 2024",
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
    lastPet: "July 2024",
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
    lastPet: "July 2024",
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
    lastPet: "July 2024",
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
    lastPet: "June 2024",
    description: "Statsig",
    imageData: {
      url: `${IMAGE_URL}/Charlie.jpg`,
      pixelWidth: 400,
      pixelHeight: 600,
      alt: "Charlie",
    },
  },

  {
    name: "Kirby",
    lastPet: "July 2024",
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
