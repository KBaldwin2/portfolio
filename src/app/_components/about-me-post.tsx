
import { Download, Github, Linkedin } from "lucide-react";

export function AboutMePost() {
  return (
    <section className="md:py-10 px-2 md:px-0">
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h2 className="md:mb-8 mb-2 text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-primary-pink">
            About Me.
          </h2>

          <div className="grid gap-4 md:grid-cols-12 mb-2 grid-cols-8">
            <a
              href="https://www.linkedin.com/in/kimberley-baldwin-17694894/"
              target="_blank"
            >
              <Linkedin className="hover:border-b-4 border-light-pink" />
            </a>
            <a href="https://github.com/KBaldwin2" target="_blank">
              <Github className="hover:border-b-4 border-light-pink" />
            </a>

            <a
              href="/files/KBaldwin_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="hover:border-b-4 border-light-pink" />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <p className="leading-relaxed text-sm md:text-lg">
            I am a software engineer with a passion for startups and small
            companies. I have a background in project engineering and software
            development and I focus on creating robust technologies built with
            scalable architecture and enhanced user experience. I have full
            stack experience using a variety of languages and frameworks
            including .Net and React.
          </p>
          <p className="leading-relaxed text-sm md:text-lg">
            I enjoy talking about big ideas and meeting people through work and travel.
          </p>
        </div>
      </div>
    </section>
  );
}
