import { getDogs } from "./dogs_data";
import { DogCard } from "./DogCard";

const dogs = getDogs();
export default function Dogs() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Collection of My Furry Friends
      </h1>
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${175}px, 1fr))`,
          gridAutoRows: "285px",
        }}
      >
        {dogs.map((dog) => (
          <DogCard {...dog} />
        ))}
      </div>
    </div>
  );
}
