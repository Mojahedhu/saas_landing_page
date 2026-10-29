import { Element } from "react-scroll";
import { Button, NavLink } from "../components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // ✅ gsap.matchMedia() for prefers-reduced-motion support
      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { reduced } = ctx.conditions as {
            motion: boolean;
            reduced: boolean;
          };
          // ✅ Timeline with defaults — no delay chaining
          const tl = gsap.timeline({
            defaults: {
              ease: "power3.out",
              duration: reduced ? 0 : 0.8,
            },
          });
          // ✅ autoAlpha instead of opacity (hides from pointer events at 0)
          // ✅ Position parameter ("-=0.4") instead of delay on each tween
          tl.from("#hero-caption", { autoAlpha: 0, y: 20 })
            .from(
              "#hero-title",
              { autoAlpha: 0, y: 60, skewX: -4, duration: reduced ? 0 : 1 },
              "-=0.4",
            )
            .from("#hero-body", { autoAlpha: 0, y: 30 }, "-=0.5")
            .from(
              "#hero-cta",
              { autoAlpha: 0, scale: 0.88, duration: reduced ? 0 : 0.6 },
              "-=0.4",
            )
            .from(
              "#hero-image",
              {
                autoAlpha: 0,
                x: 80,
                scale: 0.96,
                duration: reduced ? 0 : 1.2,
                ease: "power2.out",
              },
              "<0.2", // ✅ starts 0.2s after the previous animation begins
            );
          // Continuous float bob — skip for reduced motion users
          if (!reduced) {
            gsap.to("#hero-image", {
              y: -18,
              duration: 3.5,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: 1.5,
            });
          }
        },
      );
      // ✅ Return mm.revert() so matchMedia cleans up when component unmounts
      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef }, // ✅ scope limits selectors to this component only
  );
  return (
    <section
      ref={sectionRef}
      className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32"
    >
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:w-388">
            <div
              id="hero-caption"
              className="caption small-2 text-p3 uppercase"
            >
              Video Editing
            </div>
            <h1
              id="hero-title"
              className="h1 text-p4 max-lg:h2 mb-6 uppercase max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12"
            >
              Amazingly simple
            </h1>

            <p id="hero-body" className="body-1 mb-14 max-w-440 max-md:mb-10">
              We design XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>

            <NavLink to="features" offset={-100} spy smooth>
              {/* ✅ Wrap in span so scale doesn't conflict with NavLink internals */}
              <span id="hero-cta" className="inline-block">
                <Button icon="/images/zap.svg">Try it now</Button>
              </span>
            </NavLink>
          </div>

          <div
            id="hero-image"
            className="hero-img_res pointer-events-none absolute -top-32 left-[calc(50%-340px)] w-1230"
          >
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
