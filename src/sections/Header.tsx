import clsx from "clsx";
import { useState } from "react";
import { NavLink } from "../components";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a href="" className="z-2 flex-1 cursor-pointer lg:hidden">
          <img src="/images/xora.svg" alt="logo" height={55} width={115} />
        </a>
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
                  <NavLink to={""} children="features" />
                  <div className="dot" />
                  <NavLink to="" children="pricing" />
                </li>

                <li className="nav-logo">
                  <NavLink
                    to=""
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
                  <NavLink to="" children="faq" />
                  <div className="dot" />
                  <NavLink to="" children="download" />
                </li>
              </ul>
            </nav>
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
