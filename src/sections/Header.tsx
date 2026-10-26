import clsx from "clsx";
import { useEffect, useState } from "react";
import { NavLink } from "../components";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500",
        hasScrolled
          ? "bg-black-100/70 py-2 backdrop-blur-sm"
          : "py-10 max-lg:py-4",
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <NavLink to="hero" className="z-2 flex-1 cursor-pointer lg:hidden">
          <img src="/images/xora.svg" alt="logo" height={55} width={115} />
        </NavLink>
        <div
          className={clsx(
            "max-lg:bg-s2 w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="sidebar-before max-lg:relative max-lg:flex max-lg:min-h-screen max-lg:flex-col max-lg:overflow-hidden max-lg:p-6 max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink
                    to={"features"}
                    setIsOpen={setIsOpen}
                    children="features"
                    activeClass="nav-active"
                    offset={-100}
                  />
                  <div className="dot" />
                  <NavLink
                    to={"pricing"}
                    setIsOpen={setIsOpen}
                    children="pricing"
                    activeClass="nav-active"
                    offset={-100}
                  />
                </li>

                <li className="nav-logo">
                  <NavLink
                    to="hero"
                    offset={-250}
                    className={clsx(
                      "cursor-pointer transition-transform duration-500 max-lg:hidden",
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      alt="logo"
                      width={160}
                      height={55}
                    />
                  </NavLink>
                </li>

                <li className="nav-li">
                  <NavLink
                    to=""
                    setIsOpen={setIsOpen}
                    children="faq"
                    activeClass="nav-active"
                    offset={-100}
                  />
                  <div className="dot" />
                  <NavLink
                    to=""
                    setIsOpen={setIsOpen}
                    children="download"
                    activeClass="nav-active"
                    offset={-100}
                  />
                </li>
              </ul>
            </nav>

            <div className="absolute top-1/2 left-0 h-95 w-960 -translate-x-72.5 -translate-y-1/2 rotate-90 lg:hidden">
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
                alt="outlines-fill"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
        </div>

        <button
          className="border-s4/25 z-2 flex size-10 items-center justify-center rounded-full border-2 lg:hidden"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
