import clsx from "clsx";

interface SlideDownProps {
  panelId: string;
  buttonId: string;
  active: boolean;
  answer: string;
}

const SlideDown = ({ panelId, buttonId, active, answer }: SlideDownProps) => {
  return (
    <div
      id={panelId}
      role="region"
      aria-labelledby={buttonId}
      inert={!active}
      className={clsx(
        "grid transition-[grid-template-rows,opacity] duration-500 ease-in-out motion-reduce:transition-none",
        active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className="overflow-hidden">
        <div className="body-3 px-7 py-3.5">{answer}</div>
      </div>
    </div>
  );
};

export default SlideDown;
