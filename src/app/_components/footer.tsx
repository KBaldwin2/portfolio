import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-primary-pink text-white">
      <Container>
        <div className="py-8">
          <div className="mx-2 rounded-2xl bg-primary-pink/70 px-4 py-7 sm:px-6 md:mx-0 md:rounded-3xl md:px-10 md:py-10 backdrop-blur-sm">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                  Let&apos;s connect
                </p>
                <h3 className="text-3xl font-bold tracking-tighter leading-tight text-white md:text-5xl lg:text-[3rem]">
                  Coding is fun.
                </h3>
                <p className="max-w-xl text-sm text-white/80 md:text-base">
                  Building practical software with teams who care about people,
                  product, and momentum.
                </p>
              </div>

              <div className="flex flex-col items-stretch sm:items-start lg:items-end">
                <a
                  href="https://www.linkedin.com/in/kimberley-baldwin-17694894/"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-primary-pink transition hover:bg-secondary-pink hover:text-white sm:w-auto md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let&apos;s Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
