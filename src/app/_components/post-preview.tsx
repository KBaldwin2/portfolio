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
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} website={website}/>
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={website} className="hover:underline" target="__blank">
          {title}
        </Link>
      </h3>
      <div className="flex flex-col lg:flex-row lg:items-center text-primary-pink text-lg mb-4">
        <DateFormatter dateString={date} />
        <div className="lg:bg-primary-pink lg:w-2 lg:h-2 lg:rounded-full mx-2"></div>
        <p>{jobType}</p>
      </div>

      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
