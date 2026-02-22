import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function Projects({ posts }: Props) {
  return (
    <section className="md:py-8 px-2 md:px-0 mb-4">
      <div className="rounded-3xl bg-white p-6 md:p-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary-pink">
          Work
        </p>
        <h2 className="md:mb-8 mb-4 text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-primary-pink">
          Projects.
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              jobType={post.jobType}
              website={post.website}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
