import Dogs from "./page";

export type DogProperties = {
  name: string;
  image?: string;
  description: string;
};

const IMAGE_URL = "/dog-images";

export const DOGS: DogProperties[] = [
  {
    name: "Buddy",
    description: "Family Dog",
    image: `${IMAGE_URL}/Buddy.jpg`,
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
    image: `${IMAGE_URL}/Mora.jpg`,
  },
  {
    name: "Kiwi",
    description: "Statsig",
  },
  {
    name: "Ollie",
    description: "Statsig",
    image: `${IMAGE_URL}/Ollie.jpg`,
  },
  {
    name: "Ross",
    description: "Statsig",
    image: `${IMAGE_URL}/Ross.jpg`,
  },
  {
    name: "Bodie",
    description: "Statsig",
    image: `${IMAGE_URL}/Bodie.jpg`,
  },
  {
    name: "Smudge",
    description: "Statsig",
  },
  {
    name: "Charlie",
    description: "Statsig",
    image: `${IMAGE_URL}/Charlie.jpg`,
  },
];

export function getDogs() {
  return DOGS.filter((dog) => dog.image !== undefined);
}
