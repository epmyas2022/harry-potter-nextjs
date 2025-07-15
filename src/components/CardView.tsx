import Image from "next/image";
import { IconExternalLink } from "@tabler/icons-react";
import { Link } from "next-view-transitions";
interface Options {
  title: string;
  description?: string;
  link: string;
  image: string;
  viewName?: string;
}
function CardView({ title, description, link, image, viewName }: Options) {
  return (
    <div
      className="box box--stacked max-w-sm"
      style={{ viewTransitionName: viewName }}
    >
      <div className="relative w-full h-0 pb-[90%] ">
        <Image
          fetchPriority="high"
          id="character-image"
          src={image}
          alt="Picture of a card"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="rounded-t-lg object-cover"
        ></Image>
      </div>

      <div className="p-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-600 ">{description}</p>
        </div>

        <Link className="cursor-pointer" href={link}>
          <IconExternalLink />
        </Link>
      </div>
    </div>
  );
}

export default CardView;
