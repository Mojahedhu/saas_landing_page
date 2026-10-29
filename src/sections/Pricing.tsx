import clsx from "clsx";
import { useRef, useState } from "react";
import { Element } from "react-scroll";
import { plans } from "../constants";
import _CountUp from "react-countup";
import { Button } from "../components";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CountUp = (
  "default" in _CountUp ? _CountUp.default : _CountUp
) as typeof _CountUp;

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
        // ✅ ScrollTrigger goes on the TIMELINE, not on a child tween
        const headTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".pricing-heading",
            start: "top 85%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });
        headTl.from(".pricing-heading", { opacity: 0, y: 40, duration: 0.9 });
        // ✅ Batch the plan cards — handles stagger across all three cleanly

        // 1. Set initial state immediately so they don't pop in before scrolling
        gsap.set(".pricing-card", { opacity: 0, y: 80 });

        ScrollTrigger.batch(".pricing-card", {
          onEnter: (batch) =>
            ctx.add(() =>
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.85,
                stagger: { amount: 0.4 },
                ease: "power3.out",
                overwrite: "auto",
              }),
            ),
          start: "top 80%",
          once: true,
        });
        // Subtle repeating glow on the featured (middle) card only
        const glowTween = gsap.to(".pricing-card-featured", {
          boxShadow: "0 0 40px 8px rgba(46,242,255,0.18)",
          scale: 1.02,
          repeat: -1,
          yoyo: true,
          duration: 2.2,
          ease: "sine.inOut",
          paused: true,
        });

        ScrollTrigger.create({
          trigger: ".pricing-card-featured",
          start: "top bottom",
          end: "bottom top",
          onEnter: () => glowTween.resume(),
          onLeave: () => glowTween.pause(),
          onEnterBack: () => glowTween.resume(),
          onLeaveBack: () => glowTween.pause(),
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
      <Element name="pricing">
        <div className="container">
          <div className="pricing-heading pricing-head_before border-s2 bg-s1/50 relative mx-auto max-w-960 border-r border-l pt-28 pb-40 max-xl:max-w-4xl max-lg:border-none max-md:pt-16 max-md:pb-32">
            <h3 className="h3 max-lg:h4 max-md:h5 text-p4 relative z-3 mx-auto mb-14 max-w-lg text-center max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>

            <div className="border-s4/25 bg-s1/50 relative z-4 mx-auto flex w-93.75 rounded-3xl border-[3px] p-2 backdrop-blur-[6px] max-md:w-77.5">
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                aria-pressed={monthly}
                onClick={() => {
                  setMonthly(true);
                }}
              >
                Monthly
              </button>

              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                aria-pressed={!monthly}
                onClick={() => {
                  setMonthly(false);
                }}
              >
                Annually
              </button>

              <div
                className={clsx(
                  "g4 rounded-14 pricing-head_btn_before shadow-400 absolute top-2 left-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden transition-transform duration-500 before:h-100",
                  monthly ? "" : "translate-x-full",
                )}
              />
            </div>

            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline-fill"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
          {/* Pricing section */}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:overflow-auto max-xl:pt-6 max-lg:gap-5 lg:justify-center">
            {plans.map(
              (
                {
                  id,
                  logo,
                  title,
                  priceMonthly,
                  priceYearly,
                  caption,
                  features,
                  icon,
                },
                index,
              ) => (
                <div
                  key={"plan" + id}
                  className={clsx(
                    "pricing-card pricing-plan_first pricing-plan_last pricing-plan_even pricing-plan_odd xl:w-[calc(33.33% + 2px)] relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl",
                    index === 1 && "pricing-card-featured relative z-1",
                  )}
                >
                  {index === 1 && (
                    <div className="g4 absolute top-0 right-0 left-0 z-1 h-330 rounded-tl-3xl rounded-tr-3xl" />
                  )}

                  <div
                    className={clsx(
                      "absolute right-0 left-0 z-2 flex items-center justify-center",
                      index === 1 ? "-top-6" : "-top-6 max-xl:-top-11",
                    )}
                  >
                    <img
                      src={logo}
                      alt={title}
                      className={clsx(
                        "drop-shadow-3xl object-contain",
                        index === 1 ? "size-30" : "size-22",
                      )}
                    />
                  </div>

                  <div
                    className={clsx(
                      "relative flex flex-col items-center",
                      index === 1 ? "pt-24" : "pt-12",
                    )}
                  >
                    <div
                      className={clsx(
                        "small rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                        index === 1 ? "border-p3 text-p3" : "border-p1 text-p1",
                      )}
                    >
                      {title}
                    </div>

                    <div className="relative z-2 flex items-center justify-center">
                      <div
                        className={clsx(
                          "h-num flex items-start",
                          index === 1 ? "text-p3" : "text-p4",
                        )}
                      >
                        ${" "}
                        <CountUp
                          start={priceMonthly}
                          end={monthly ? priceMonthly : priceYearly}
                          duration={0.4}
                          useEasing={false}
                          preserveValue
                          // eslint-disable-next-line @typescript-eslint/no-deprecated
                          enableScrollSpy={true}
                        />
                      </div>
                      <div className="small relative top-3 uppercase">/ mo</div>
                    </div>

                    <div
                      className={clsx(
                        "body-1 border-b-s2 text-p4 relative z-2 mb-10 w-full pb-9 text-center",
                        index === 1 && "border-b",
                      )}
                    >
                      {caption}
                    </div>

                    <ul className="mx-auto space-y-4 xl:px-7">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className="relative flex items-center gap-5"
                        >
                          <img
                            src="/images/check.png"
                            alt=""
                            className="size-10 object-contain"
                          />
                          <p className="flex-1">{feature}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 flex w-full justify-center">
                      <Button icon={icon}>Get Started</Button>
                    </div>

                    {index === 1 && (
                      <p className="small-compact text-p3 mt-9 text-center before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                        Limited time offer
                      </p>
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        <div className="mb-30" />
      </Element>
    </section>
  );
};

export default Pricing;
