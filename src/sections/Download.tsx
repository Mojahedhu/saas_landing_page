import { Element } from "react-scroll";
import { links, logos } from "../constants";
import { Marker } from "../components";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Download = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
        // ✅ Left content — single timeline with ST on the timeline
        gsap.set(".download-logo", { autoAlpha: 0, y: -60 });
        gsap.set(".download-body", { autoAlpha: 0, y: 20 });
        gsap.set(".download-link", { opacity: 0, scale: 0.7, y: 20 });

        gsap.to(".download-logo", {
          scrollTrigger: {
            trigger: ".download-logo",
            start: "top 80%",
            once: true,
          },
          ease: "power3.out",
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
        });
        gsap.to(".download-body", {
          scrollTrigger: {
            trigger: ".download-body",
            start: "top 80%",
            once: true,
          },
          ease: "power3.out",
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
        });

        gsap.to(".download-link", {
          scrollTrigger: {
            trigger: ".download-link-container",
            start: "top 80%",
            once: true,
          },

          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        });
        // App preview — independent timeline with its own ST
        const previewTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".download-preview",
            start: "top 82%",
            once: true,
          },
        });
        previewTl.from(".download-preview", {
          autoAlpha: 0,
          x: 80,
          duration: 1.1,
          ease: "power3.out",
        });
        // Partner logos — batched fade-up
        gsap.set(".partner-logo", { autoAlpha: 0, y: 20 });
        ScrollTrigger.batch(".partner-logo", {
          onEnter: (batch) =>
            ctx.add(() =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                overwrite: true,
              }),
            ),
          start: "top 90%",
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
      <Element
        name="download"
        className="g7 relative pt-24 pb-32 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 shrink-0 grow-0 basis-135 max-xl:basis-70 max-lg:basis-[256px] max-md:mr-0 max-md:basis-full">
              <div className="download-logo mb-10">
                <img
                  src="/images/xora.svg"
                  width={160}
                  height={55}
                  alt="xora"
                />
              </div>

              <p className="download-body body-1 mb-10 max-w-md">
                Try it for free on iOS, PC, Web - whatever your flavor, we've
                got you covered
              </p>

              <ul className="download-link-container flex flex-wrap items-center gap-6">
                {links.map(({ id, title, url, icon }) => (
                  <li
                    key={"line" + id}
                    className="download-link download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={url}
                      aria-label={title}
                      className="download_tech-icon_before border-s3 rounded-half bg-s1 transition-borderColor relative flex size-22 items-center justify-center border-2 duration-500"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src="/images/lines.svg"
                        alt=""
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="download-preview mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 border-s5 relative w-238.75 border-2 p-6">
                <div className="bg-s1 pb-6pt-14 relative rounded-3xl px-6">
                  <span className="download_preview-dot bg-p2 left-6" />
                  <span className="download_preview-dot bg-s3 left-11" />
                  <span className="download_preview-dot bg-p1/15 left-16" />

                  <img
                    src="/images/screen.jpg"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={"logo" + id} className="partner-logo mx-10">
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;
