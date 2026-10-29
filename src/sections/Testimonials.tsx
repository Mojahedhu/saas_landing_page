import { testimonials } from "../constants";
import { TestimonialItem } from "../components";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonials = () => {
  const halfLength = Math.ceil(testimonials.length / 2);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
        // Sticky heading entrance — timeline with ST on the timeline
        const headTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".testimonials-head",
            start: "top 85%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });
        headTl
          .from(".testimonials-caption", { autoAlpha: 0, y: 16, duration: 0.6 })
          .from(
            ".testimonials-title",
            { autoAlpha: 0, x: -40, duration: 0.8 },
            "-=0.3",
          );

        gsap.set(".testimonials-card", { autoAlpha: 0, y: 50 });
        // ✅ Batch testimonial cards — one ST per card, stagger via gsap.from
        ScrollTrigger.batch(".testimonials-card", {
          onEnter: (batch) =>
            ctx.add(() =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.12,
                ease: "power2.out",
                overwrite: true,
              }),
            ),
          start: "top 80%",
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
    <section ref={sectionRef} className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="container block lg:flex">
        <div className="testimonials-head testimonials_head-res relative z-2 flex-300 lg:sticky lg:top-100 lg:mr-20 lg:min-w-75 lg:self-start">
          <p className="testimonials-caption caption mb-5 max-md:mb-2.5">
            Wall of love
          </p>
          <p className="testimonials-title h3 max-md:h5 text-p4">
            Words from our fans
          </p>
        </div>

        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                testimonial={testimonial}
                className="testimonials-card last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                testimonial={testimonial}
                className="testimonials-card after:right-auto after:left-0 last:after:hidden after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
