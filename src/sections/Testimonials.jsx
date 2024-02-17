import { testimonials } from '../constants';
import { TestimonialCard } from "../components";
import { arrow } from '../assets/icons';

const Testimonials = () => {
  const showTestimonials = testimonials.slice(0,3);

  return (
    <section className="container py-[70px]" id="testimonials">
      <h2 className="mb-12 md:text-[58px] text-5xl leading-[1.3] uppercase">
        Start Your Learning Adventure: Browse Our Courses
      </h2>
      <ul className="grid md:grid-cols-3 ss:grid-cols-2 grid-cols-1 gap-[30px]  w-full mb-[50px]">
        {showTestimonials.map((item, index) => (
          <TestimonialCard key={item.id} {...item} index={index} />
        ))}
      </ul>
      <a className="flex gap-2 uppercase ml-auto w-fit text-accent" href="#">
        All Reviews
        <img src={arrow} alt="" width={36} height={16} />
      </a>
    </section>
  );
}

export default Testimonials