import { Element } from "react-scroll";
import { Button, NavLink } from "../components";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:w-388">
            <div className="caption small-2 text-p3 uppercase">
              Video Editing
            </div>
            <h1 className="h1 text-p4 max-lg:h2 mb-6 uppercase max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>

            <p className="body-1 mb-14 max-w-440 max-md:mb-10">
              We design XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>

            <NavLink to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </NavLink>
          </div>

          <div className="hero-img_res pointer-events-none absolute -top-32 left-[calc(50%-340px)] w-1230">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
