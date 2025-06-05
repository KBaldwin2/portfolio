import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  website: string;
  jobType: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  website,
  jobType,
}: Props) {
  return (
    <div>
      <div className="mb-4">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          website={website}
        />
      </div>
      <h3 className="text-lg md:text-2xl leading-snug flex justify-between font-bold text-primary-pink">
        <Link href={website} className="hover:underline" target="__blank">
          {title}
        </Link>
        <DateFormatter dateString={date} />
      </h3>
      <div className="flex flex-col lg:flex-row lg:justify-between text-secondary-pink text-sm md:text-lg">
        <p>{jobType}</p>
      </div>

      <p className="leading-relaxed mb-4 text-sm">{excerpt}</p>
    </div>
  );
}
