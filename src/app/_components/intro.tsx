
export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mb-4 mt-8">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-primary-pink text-center md:text-left mb-2 md:mb-0">
        Kimberley Baldwin.
      </h1>
      <div className="md:flex-col md:flex">
        <div className="flex gap-2 md:flex-col md:gap-0">
        <h4 className="text-center md:text-left md:text-lg md:pl-8 text-primary-pink text-sm">
          Software Developer.
        </h4>
        <h4 className="text-center md:text-left md:text-lg md:pl-8 text-secondary-pink text-sm">
          Environmental Engineer.
        </h4>
        </div>
        <h4 className="text-center md:text-left md:text-lg md:pl-8 text-light-pink text-sm">
          Taco Tuesday Advocate.
        </h4>
      </div>
    </section>
  );
}
