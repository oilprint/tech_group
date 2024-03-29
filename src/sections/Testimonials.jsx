import { testimonials } from '../constants';
import { Slider } from '../components';

const Testimonials = () => {
  return (
    <section className="container md:pt-[70px] pt-10 pb-5 relative" id="testimonials">
      <h2 className="title ">Start Your Learning Adventure: Browse Our Courses</h2>
      <Slider testimonials={testimonials} />
    </section>
  );
};

export default Testimonials;
