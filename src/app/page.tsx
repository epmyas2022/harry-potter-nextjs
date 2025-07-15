import { getAllCharacters } from "@/actions/character.action";
import CardView from "@/components/CardView";
import Search from "@/components/Search";

interface PageProps {
  search?: string;
}
export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<PageProps>;
}) {
  const { search } = await searchParams;
  const characters = await getAllCharacters(search);

  return (
    <div className="p-10 overflow-hidden">
      <div className="flex flex-wrap gap-2 justify-between items-center">
        <h1 className="text-2xl font-bold">Characters</h1>
        <Search />
      </div>
      <br />
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
