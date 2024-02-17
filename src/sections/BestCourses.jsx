import { arrow } from '../assets/icons';
import { courseCards } from '../constants'
import { CourseCard } from "../components";

const BestCourses = () => {
  return (
    <section className="container py-[70px] ">
      <h2 className="mb-12 md:text-[58px] text-5xl leading-[1.3] uppercase">
        Start Your Learning Adventure: Browse Our Courses
      </h2>
      <ul className="grid md:grid-cols-3 ss:grid-cols-2 grid-cols-1 gap-[30px]  w-full mb-[50px]">
        {courseCards.map((item) => (
          <CourseCard key={item.id} {...item} />
        ))}
      </ul>
      <a className="flex gap-2 uppercase ml-auto w-fit text-accent" href="#">
        All Courses
        <img src={arrow} alt="" width={36} height={16} />
      </a>
    </section>
  );
}

export default BestCourses