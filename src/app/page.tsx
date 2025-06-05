import Container from "@/app/_components/container";
import { AboutMePost } from "@/app/_components/about-me-post";
import { Intro } from "@/app/_components/intro";
import { Projects } from "@/app/_components/projects";
import { getAllPosts } from "@/lib/api";
import CoverImage from "./_components/cover-image";
import { SectionSeparator } from "./_components/section-separator";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main className="space-y-6">
      <Container>
        <Intro />
        <CoverImage
          title={"Cover Image"}
          src={"/assets/blog/about-me/cover.jpg"}
          slug={"123"}
        />
        <SectionSeparator />
        <AboutMePost
        />
        <SectionSeparator />
        {morePosts.length > 0 && <Projects posts={morePosts} />}
      </Container>
    </main>
  );
}
