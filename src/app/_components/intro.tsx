
export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 sm:mb-2">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Kimberley Baldwin.
      </h1>
      <div>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 text-primary-pink">
          Software Developer.
        </h4>
        <h4 className="text-center md:text-left text-lg md:pl-8 text-secondary-pink">
          Environmental Engineer.
        </h4>
        <h4 className="text-center md:text-left text-lg md:pl-8 text-light-pink">
          Taco Tuesday Advocate.
        </h4>
      </div>
    </section>
  );
}
