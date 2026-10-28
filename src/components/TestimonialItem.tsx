import clsx from "clsx";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  comment: string;
}

interface TestimonialItemProps {
  testimonial: Testimonial;
  className?: string;
}
const TestimonialItem = ({ testimonial, className }: TestimonialItemProps) => {
  const { avatarUrl, name, role, comment } = testimonial;
  return (
    <div
      className={clsx(
        "after:bg-s2 relative px-14 pt-11 pb-14 after:absolute after:right-0 after:bottom-0 after:h-0.5 after:w-screen after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4",
        className,
      )}
    >
      <blockquote className="h6 text-p4 mb-8">{comment}</blockquote>

      <div className="flex items-center max-xl:mr-8">
        <div className="rounded-half border-s2 mr-4 size-20 shrink-0 border-2 p-1.5">
          <img src={avatarUrl} alt={name} className="size-full object-cover" />
        </div>

        <div>
          <h4 className="body-2 text-p1 mb-0.5">{name}</h4>
          <p className="small-compact text-s3 uppercase">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
