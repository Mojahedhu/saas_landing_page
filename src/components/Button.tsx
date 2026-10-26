import clsx from "clsx";
import { Marker } from "./Marker";

interface ButtonProps {
  icon: string;
  children: React.ReactNode | string;
  href?: string;
  className?: string;
  onClick?: () => void;
  markerFill?: string;
}
const Button = ({
  children,
  icon,
  href,
  className,
  onClick,
  markerFill,
}: ButtonProps) => {
  return href ? (
    <a
      href={href}
      className={clsx(
        "g5 shadow-500 group relative rounded-2xl p-0.5",
        className,
      )}
    >
      <Inner icon={icon} markerFill={markerFill}>
        {children}
      </Inner>
    </a>
  ) : (
    <button
      onClick={onClick}
      className={clsx(
        "g5 shadow-500 group relative rounded-2xl p-0.5",
        className,
      )}
    >
      <Inner icon={icon} markerFill={markerFill}>
        {children}
      </Inner>
    </button>
  );
};

export default Button;

const Inner = ({ children, icon, markerFill }: ButtonProps) => (
  <>
    <span className="g4 inner-before relative flex min-h-15 items-center overflow-hidden rounded-2xl px-4 group-hover:opacity-100">
      <span className="absolute -left-px">
        <Marker fill={markerFill} />
      </span>

      {icon && (
        <img
          src={icon}
          alt="circle"
          className="z-10 mr-5 size-10 object-contain"
        />
      )}

      <span className="font-poppins base-bold text-p1 relative z-2 uppercase">
        {children}
      </span>
      <span className="glow-before glow-after" />
    </span>
  </>
);
