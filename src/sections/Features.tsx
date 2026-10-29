import { Element } from "react-scroll";
import { Button } from "../components";
import { details, features } from "../constants";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
        gsap.set(".feature-card", { autoAlpha: 0, y: 70 });
        // ✅ ScrollTrigger.batch() — one ST per target, callbacks batched together
        // Better than creating individual ScrollTriggers for each card
        ScrollTrigger.batch(".feature-card", {
          onEnter: (batch) =>
            ctx.add(() =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.18,
                ease: "power3.out",
                overwrite: true,
              }),
            ),
          start: "top 82%",
          once: true, // ✅ entrance-only; kills ST after firing
        });
        // Detail icons — spring pop with batch
        gsap.set(".detail-icon-item", { autoAlpha: 0, scale: 0.5, y: 30 });
        ScrollTrigger.batch(".detail-icon-item", {
          onEnter: (batch) =>
            ctx.add(() =>
              gsap.to(batch, {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "back.out(1.8)",
                overwrite: true,
              }),
            ),
          start: "top 85%",
          once: true,
        });
      });
      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="features">
      <Element name="features">
        <div className="container">
          <div className="border-s3 rounded-7xl feature-after md:g7 relative flex flex-nowrap border-2 max-md:flex-col max-md:gap-3 max-md:rounded-none max-md:border-none md:flex-wrap md:overflow-hidden">
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={"feature" + id}
                className="feature-card max-md:g7 max-md:border-s3 relative z-2 flex-50 px-5 pb-5 max-md:flex-320 max-md:rounded-3xl max-md:border-2 md:flex md:flex-col md:px-10 md:pb-10"
              >
                <div className="flex w-full items-start justify-start">
                  <div className="mb-12 ml-3 flex flex-col items-center justify-center">
                    <div className="bg-s3 h-16 w-0.5" />
                    <img
                      src={icon}
                      alt={title}
                      className="size-28 object-contain"
                    />
                  </div>
                </div>

                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                <h2 className="h3 text-p4 max-md-h3 mb-7 max-w-300 max-md:mb-6">
                  {title}
                </h2>
                <p className="body-1 max-md:body-3 mb-11 max-md:mb-8">{text}</p>
                <Button className="mt-auto w-fit" icon={button.icon}>
                  {button.title}
                </Button>
              </div>
            ))}

            <ul className="border-s3 rounded-7xl relative flex grow justify-around border-2 px-[5%] max-md:hidden">
              <div className="bg-s3/20 absolute top-[38%] right-0 left-0 z-10 h-px w-full" />

              {details.map(({ id, icon, title }) => (
                <li
                  className="detail-icon-item relative px-4 pt-16 pb-14"
                  key={"detail" + id}
                >
                  <div className="bg-s3/20 absolute top-8 bottom-0 left-1/2 z-10 h-full w-px" />

                  <div className="border-s2 hover:border-s4 shadow-500 mx-auto mb-3 flex size-20 items-center justify-center rounded-full border-2 transition-all duration-500">
                    <img
                      src={icon}
                      alt={title}
                      className="z-20 size-17/20 object-contain"
                    />
                  </div>

                  <h3 className="base-small relative z-2 mx-auto my-0 max-w-36 text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
