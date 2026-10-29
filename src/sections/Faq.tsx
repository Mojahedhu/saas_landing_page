import { Element } from "react-scroll";
import { faq } from "../constants";
import { FaqItem } from "../components";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
        // ✅ ST is on the timeline, not on a child tween
        const headTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".faq-heading",
            start: "top 85%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });
        headTl
          .from(".faq-heading-title", { autoAlpha: 0, x: -50, duration: 0.9 })
          .from(
            ".faq-heading-body",
            { autoAlpha: 0, x: -30, duration: 0.7 },
            "-=0.4",
          );
        // Left column slides from left, right column from right — both batched
        gsap.set(".faq-col-left .faq-item", { autoAlpha: 0, x: -40 });
        gsap.set(".faq-col-right .faq-item", { autoAlpha: 0, x: 40 });
        ScrollTrigger.batch(".faq-col-left .faq-item", {
          onEnter: (batch) =>
            ctx.add(() =>
              gsap.to(batch, {
                autoAlpha: 1,
                x: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: "power3.out",
                overwrite: true,
              }),
            ),
          start: "top 82%",
          once: true,
        });
        ScrollTrigger.batch(".faq-col-right .faq-item", {
          onEnter: (batch) =>
            ctx.add(() =>
              gsap.to(batch, {
                autoAlpha: 1,
                x: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: "power3.out",
                overwrite: true,
              }),
            ),
          start: "top 82%",
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
    <section ref={sectionRef}>
      <Element name="faq" className="relative">
        <div className="relative z-2 container py-28">
          <div className="faq-heading">
            <h3 className="faq-heading-title h3 max-md:h5 text-p4 mb-7 max-w-640 max-lg:max-w-md">
              Curiosity didn't kill the cat, it gave it answer.
            </h3>
            <p className="faq-heading-body body-1 max-lg:max-w-sm">
              You've got questions, we've got answers.
            </p>
          </div>
          <div className="faq-line_after left-[calc(50% - 1px)] bg-s2 absolute top-0 -z-1 h-full w-0.5" />
        </div>

        <div className="faq-glow_before border-s2 bg-s1 relative z-2 border-2">
          <div className="container flex gap-10 max-lg:block">
            <div className="rounded-half border-s2 bg-s1 absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2">
              <img src="images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>

            <div className="faq-col-left relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem
                  key={`faq-${item.id}`}
                  item={item}
                  index={index}
                  className="faq-item"
                />
              ))}
            </div>

            <div className="faq-col-right relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem
                  key={`faq-${item.id}`}
                  item={item}
                  index={index + halfLength}
                  className="faq-item"
                />
              ))}
            </div>
          </div>

          <div className="faq-line_after bg-s3 absolute top-0 left-[calc(50%-1px)] -z-1 h-full w-0.5 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
