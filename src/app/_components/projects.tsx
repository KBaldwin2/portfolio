import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function Projects({ posts }: Props) {
  return (
    <section className="md:py-10 px-2 md:px-0 mb-6">
        <h2 className="md:mb-8 mb-2 text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-primary-pink">
          Projects.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-col-3 md:gap-x-2 lg:gap-x-8 gap-y-6">
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
    </section>
  );
}
