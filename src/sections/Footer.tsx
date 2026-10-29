import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
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
              <li key={"social" + id}>
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
