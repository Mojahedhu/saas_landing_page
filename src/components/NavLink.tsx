import { Link as LinkScroll, type LinkProps } from "react-scroll";

interface NavLinkProps extends Omit<LinkProps, "ref"> {
  children: string | React.ReactNode;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLink = ({
  children,
  className = "",
  setIsOpen,
  ...rest
}: NavLinkProps) => {
  return (
    <LinkScroll
      {...rest}
      smooth
      spy
      className={`base-bold text-p4 hover:text-p1 cursor-pointer uppercase transition-colors duration-500 max-lg:my-4 max-lg:h5${className}`}
      onClick={() => setIsOpen?.(false)}
    >
      {children}
    </LinkScroll>
  );
};

export default NavLink;
