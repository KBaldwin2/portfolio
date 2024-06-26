import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  website?: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug, website }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {website ? (
        <Link href={website} aria-label={title} target="__blank">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
