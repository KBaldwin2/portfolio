import Container from "@/app/_components/container";
import { AboutMePost } from "@/app/_components/about-me-post";
import { Intro } from "@/app/_components/intro";
import { Projects } from "@/app/_components/projects";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <AboutMePost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <Projects posts={morePosts} />}
      </Container>
    </main>
  );
}
