import clsx from "clsx";
import { useState } from "react";
import SlideDown from "./SlideDown";

interface Item {
  id: string;
  question: string;
  answer: string;
}
interface FaqItemProps {
  item: Item;
  index: number;
  className?: string;
}

const FaqItem = ({ item, index, className = "" }: FaqItemProps) => {
  const { id, question, answer } = item;
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = activeId === id;

  const toggle = () => {
    setActiveId(activeId === id ? null : id);
  };
  return (
    <div className={clsx("relative z-2 mb-16", className)}>
      <button
        id={`buttonId${id}`}
        type="button"
        aria-expanded={active}
        aria-controls={`panelId${id}`}
        onClick={toggle}
        className="group relative flex w-full cursor-pointer items-center justify-between gap-10 px-7 text-left"
      >
        <div className="flex-1">
          <div className="small-compact text-p3 mb-1.5 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h6 text-p4 max-md:mix-h-20 transition-colors duration-500 max-md:flex max-md:items-center",
              active && "max-lg:text-p1",
            )}
          >
            {question}
          </div>
        </div>

        <div
          className={clsx(
            "faq-icon border-s2 shadow-400 group-hover:border-s4 relative flex size-12 items-center justify-center rounded-full border-2 transition-all duration-500",
            active && "before:bg-p1 after:bg-p1 after:rotate-0",
          )}
        >
          <div className="g4 shadow-300 size-11/12 rounded-full" />
        </div>
      </button>

      <SlideDown
        panelId={"panelId" + id}
        buttonId={"buttonId" + id}
        active={active}
        answer={answer}
      />

      <div
        className={clsx(
          "g5 absolute -top-7 right-0 -bottom-7 left-0 -z-1 rounded-3xl opacity-0 duration-300",
          active && "opacity-100",
        )}
      >
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
        <div className="bg-p1 absolute top-0 left-8 h-0.5 w-40" />
      </div>
    </div>
  );
};

export default FaqItem;
