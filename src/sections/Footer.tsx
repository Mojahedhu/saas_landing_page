import { useRef } from "react";
import { socials } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
        // Legal text — timeline with ST on the timeline
        const legalTl = gsap.timeline({
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            once: true,
          },
          defaults: { ease: "power2.out" },
        });
        legalTl.from(".footer-legal", { autoAlpha: 0, x: -20, duration: 0.7 });
        // Social icons — batched spring pop
        gsap.set(".footer-social", { autoAlpha: 0, scale: 0.7, y: 10 });
        ScrollTrigger.batch(".footer-social", {
          onEnter: (batch) =>
            ctx.add(() =>
              gsap.to(batch, {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "back.out(1.5)",
                overwrite: true,
              }),
            ),
          start: "top bottom",
          once: true,
        });
      });
      return () => {
        mm.revert();
      };
    },
    { scope: footerRef },
  );

  return (
    <footer ref={footerRef}>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="footer-legal small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">&copy; MH Dev</p>
            <div className="flex items-center justify-center sm:ml-auto">
              <p className="legal-after text-p5 hover:text-p1 relative mr-9 cursor-pointer transition-all duration-500 hover:underline">
                Privacy Policy
              </p>
              <p className="text-p5 hover:text-p1 cursor-pointer transition-all duration-500 hover:underline">
                Terms of use
              </p>
            </div>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, title, url, icon }) => (
              <li key={"social" + id} className="footer-social">
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
