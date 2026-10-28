import { testimonials } from "../constants";
import { TestimonialItem } from "../components";

const Testimonials = () => {
  const halfLength = Math.ceil(testimonials.length / 2);

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="container block lg:flex">
        <div className="testimonials_head-res relative z-2 flex-300 lg:sticky lg:top-10 lg:mr-20 lg:min-w-75 lg:self-start">
          <p className="caption mb-5 max-md:mb-2.5">Wall of love</p>
          <p className="h3 max-md:h5 text-p4">Words from our fans</p>
        </div>

        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                testimonial={testimonial}
                className="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                testimonial={testimonial}
                className="after:right-auto after:left-0 last:after:hidden after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
