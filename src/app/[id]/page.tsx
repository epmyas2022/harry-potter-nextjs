import { getCharacterByIndex } from "@/actions/character.action";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Metadata } from "next";
import { shieldsHouseColor } from "@/helpers/shields";
export const metadata: Metadata = {
  title: "Character Detail",
  description: "Detailed view of a character from the Harry Potter API",
};

interface DetailPageProps {
  params: Promise<{ id: string }>;
}
export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;

  if (isNaN(Number(id))) {
    return;
  }
  const character = await getCharacterByIndex(+id);

  return (
    <div className="md:p-10 box box--stacked md:m-10">
      <div className="my-4 mx-2">
        <Link href="/" className="cursor-pointer">
          <IconArrowNarrowLeft className="size-12 rounded-full bg-black text-white" />
        </Link>
      </div>

      <div className="flex gap-4 md:gap-20 flex-wrap justify-center items-center">
        <Image
          style={{ viewTransitionName: `character-${+id}` }}
          src={character.image}
          alt={character.fullName}
          width={400}
          height={200}
          fetchPriority="high"
          className="rounded-lg mb-4 w-full md:w-auto h-auto"
        />

        <div className="p-4">
          <h1 className="md:text-5xl text-4xl font-bold mb-4">
            {character.fullName}
          </h1>
          <p className="md:text-2xl  text-lg  mb-2 ">
            Interpreted by:{" "}
            <a
              className="underline cursor-pointer"
              href={`https://www.imdb.com/find?q=${encodeURIComponent(
                character.interpretedBy
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {character.interpretedBy}
            </a>
          </p>
          <div className="flex items-center gap-4">
            <p className="md:text-2xl  text-lg mb-2">
              House:{" "}
              <span
                className={`${shieldsHouseColor(
                  character.hogwartsHouse
                )} font-bold`}
              >
                {character.hogwartsHouse}
              </span>
            </p>
            {/*  <Image
              src={shieldsHouseSrc(character.hogwartsHouse)}
              alt={`${character.hogwartsHouse} shield`}
              width={50}
              height={50}
              className="mb-4 object-cover"
            /> */}
          </div>
          <p className="md:text-2xl  text-lg mb-2">
            Nickname: {character.nickname}
          </p>
          <p className="text-gray-700 text-lg  md:text-2xl">
            {character.birthdate}
          </p>
        </div>
      </div>
    </div>
  );
}
