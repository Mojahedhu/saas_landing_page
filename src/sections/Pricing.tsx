import clsx from "clsx";
import { useState } from "react";
import { Element } from "react-scroll";
import { plans } from "../constants";
import _CountUp from "react-countup";
import { Button } from "../components";

const CountUp = (
  "default" in _CountUp ? _CountUp.default : _CountUp
) as typeof _CountUp;

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="pricing-head_before border-s2 bg-s1/50 relative mx-auto max-w-960 border-r border-l pt-28 pb-40 max-xl:max-w-4xl max-lg:border-none max-md:pt-16 max-md:pb-32">
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
                  className="pricing-plan_first pricing-plan_last pricing-plan_even pricing-plan_odd xl:w-[calc(33.33% + 2px)] relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl"
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
