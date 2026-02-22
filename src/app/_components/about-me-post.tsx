
import { Download, Github, Linkedin } from "lucide-react";

export function AboutMePost() {
  return (
    <section className="px-2 py-4 md:px-0 md:py-8">
      <div className="rounded-3xl bg-white p-6 md:p-10">
        <div className="grid gap-4 md:grid-cols-[1.05fr_1.35fr] md:gap-10">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-pink">
              Profile
            </p>
            <h2 className="text-5xl font-bold tracking-tighter leading-tight text-primary-pink md:text-7xl">
              About Me.
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-primary-pink/85 md:text-base">
              Software engineer focused on shipping practical, scalable products
              for startups and growing teams.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="rounded-full border border-secondary-pink/30 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-pink">
                React
              </span>
              <span className="rounded-full border border-secondary-pink/30 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-pink">
                .Net
              </span>
              <span className="rounded-full border border-secondary-pink/30 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-pink">
                Product Thinking
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/kimberley-baldwin-17694894/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-pink px-4 py-2 text-sm font-semibold text-white transition hover:bg-secondary-pink"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://github.com/KBaldwin2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-secondary-pink px-4 py-2 text-sm font-semibold text-white transition hover:bg-light-pink"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="/files/KBaldwin_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-light-pink px-4 py-2 text-sm font-semibold text-primary-pink transition hover:bg-secondary-pink hover:text-white"
              >
                <Download size={16} /> Resume
              </a>
            </div>
          </div>

          <div className="space-y-5 rounded-2xl bg-white/80 p-5 md:p-6 md:pt-12">
            <p className="text-sm leading-relaxed text-primary-pink/90 md:text-lg">
              I am a software engineer with a passion for startups and small
              companies. I have a background in project engineering and software
              development and I focus on creating robust technologies built with
              scalable architecture and enhanced user experience.
            </p>
            <p className="text-sm leading-relaxed text-primary-pink/90 md:text-lg">
              I have full stack experience using a variety of languages and
              frameworks including .Net and React. I enjoy talking about big
              ideas and meeting people through work and travel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
