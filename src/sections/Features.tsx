import { Button } from "../components";
import { details, features } from "../constants";

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="border-s3 rounded-7xl feature-after md:g7 relative flex flex-nowrap border-2 max-md:flex-col max-md:gap-3 max-md:rounded-none max-md:border-none md:flex-wrap md:overflow-hidden">
          {features.map(({ id, icon, caption, title, text, button }) => (
            <div
              key={"feature" + id}
              className="max-md:g7 max-md:border-s3 relative z-2 flex-50 px-5 pb-5 max-md:flex-320 max-md:rounded-3xl max-md:border-2 md:flex md:flex-col md:px-10 md:pb-10"
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
              <li className="relative px-4 pt-16 pb-14" key={"detail" + id}>
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
    </section>
  );
};

export default Features;
