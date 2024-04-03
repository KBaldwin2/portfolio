
import CoverImage from "@/app/_components/cover-image";
import { Download, Github, Linkedin } from "lucide-react";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
};

const languages: string[] = [
  "C#",
  "React",
  "Typescript",
  "Docker",
  "NodeJS",
  "Python",
];

export function AboutMePost({ title, coverImage, slug }: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
            <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              About Me.
            </h2>

          <div className="grid gap-2 grid-cols-12">
            <a
              href="https://www.linkedin.com/in/kimberley-baldwin-17694894/"
              target="_blank"
            >
              <Linkedin
                className="hover:border-b-4 border-light-pink"
              />
            </a>
            <a href="https://github.com/KBaldwin2" target="_blank">
              <Github
                className="hover:border-b-4 border-light-pink"
              />
            </a>

            <a href="/files/KBaldwin_CV.pdf" target="_blank" rel="noopener noreferrer">
            <Download
              className="hover:border-b-4 border-light-pink"
            />
            </a>


          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed my-4">
            I am a full stack developer with a Masters of Software Engineering
            from the University of Calgary. I have a wide variety of development
            experience specializing in .NET and JS frameworks (including Node
            and React). I have worked on projects as a sole contractor, a member
            of a team and a founder.
          </p>

          <p className="text-lg leading-relaxed mb-4">Key skills include:</p>
          <div className="grid gap-2 lg:grid-cols-3">
            {languages.map((x) => (
              <div className="flex items-center" key={x}>
                <div className="bg-secondary-pink w-2 h-2 rounded-full mr-2"></div>
                <div className="text-xl font-bold text-secondary-pink">{x}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
