import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-primary-pink text-white border-t border-neutral-200">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Coding is Fun.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.linkedin.com/in/kimberley-baldwin-17694894/"
              className="mx-3 bg-secondary-pink hover:bg-primary-pink border border-secondary-pink text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              target="__blank"
            >
              Let's Chat
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
