import { getAllCharacters } from "@/actions/character.action";
import CardView from "@/components/CardView";

export default async function HomePage() {

  const characters = await getAllCharacters();


  return (
    <div className="p-10 overflow-hidden">
      <div className="flex justify-between items-center">
        <h1
          className="text-2xl font-bold mb-4"
        >
          Characters
        </h1>
        {/*   <input
          type="text"
          placeholder="Search characters..."
          className="mt-2 p-2 border border-gray-300 rounded"
        /> */}
      </div>
      <hr className="border-gray-400" />
      <br />

      <div className="grid grid-cols-12 gap-4">
        {characters.map((item) => (
          <div
            className="md:col-span-6 lg:col-span-2 col-span-12 mb-10"
            key={item.index}
          >
            <CardView
              link={`/${item.index}`}
              title={item.fullName}
              description={item.interpretedBy}
              image={item.image}
              viewName={`character-${item.index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
