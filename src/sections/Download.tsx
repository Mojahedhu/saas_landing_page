import { Element } from "react-scroll";
import { links, logos } from "../constants";
import { Marker } from "../components";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pt-24 pb-32 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 shrink-0 grow-0 basis-135 max-xl:basis-70 max-lg:basis-[256px] max-md:basis-100">
              <div className="mb-10">
                <img
                  src="/images/xora.svg"
                  width={160}
                  height={55}
                  alt="xora"
                />
              </div>

              <p className="body-1 mb-10 max-w-md">
                Try it for free on iOS, PC, Web - whatever your flavor, we've
                got you covered
              </p>

              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={"line" + id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={url}
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

            <div className="mb-10 max-md:hidden">
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
              <li key={"logo" + id} className="mx-10">
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
