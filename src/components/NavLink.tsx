import { Link as LinkScroll, type LinkProps } from "react-scroll";

interface NavLinkProps extends Omit<LinkProps, "ref"> {
  children: string | React.ReactNode;
}

const NavLink = ({ children, className = "", ...rest }: NavLinkProps) => {
  return (
    <LinkScroll
      {...rest}
      className={`base-bold text-p4 hover:text-p1 cursor-pointer uppercase transition-colors duration-500 max-lg:my-4 max-lg:h5${className}`}
    >
      {children}
    </LinkScroll>
  );
};

export default NavLink;
