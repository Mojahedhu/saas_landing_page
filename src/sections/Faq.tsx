import { Element } from "react-scroll";
import { faq } from "../constants";
import { FaqItem } from "../components";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);
  return (
    <section>
      <Element name="faq" className="relative">
        <div className="relative z-2 container py-28">
          <div>
            <h3 className="h3 max-md:h5 text-p4 mb-7 max-w-640 max-lg:max-w-md">
              Curiosity didn't kill the cat, it gave it answer.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
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

            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={`faq-${item.id}`} item={item} index={index} />
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem
                  key={`faq-${item.id}`}
                  item={item}
                  index={index + halfLength}
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
