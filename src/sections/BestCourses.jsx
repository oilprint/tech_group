import { arrow } from '../assets/icons';
import { courseCards } from '../constants'
import { CourseCard } from "../components";

const BestCourses = () => {
  return (
    <section className="container md:py-[70px] py-10 ">
      <h2 className="md:mb-12 mb-6 md:text-[52px] text-[36px] leading-[1.3] uppercase">
        Start Your Learning Adventure: Browse Our Courses
      </h2>
      <ul className="grid md:grid-cols-3 ss:grid-cols-2 grid-cols-1 gap-[30px]  w-full sm:mb-[50px] mb-10">
        {courseCards.map((item) => (
          <CourseCard key={item.id} {...item} />
        ))}
      </ul>
      <a
        className="flex gap-2 uppercase sm:mr-0 mx-auto w-fit text-accent"
        href="#"
      >
        All Courses
        <img src={arrow} alt="" width={36} height={16} />
      </a>
    </section>
  );
}

export default BestCourses