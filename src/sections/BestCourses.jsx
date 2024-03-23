import { courseCards } from '../constants';
import { CourseCard, LinkCustom } from '../components';

const BestCourses = () => {
  return (
    <section className="container md:py-[70px] py-10 ">
      <h2 className="md:mb-12 mb-6 md:text-[52px] text-[36px] leading-[1.3] uppercase">
        Start Your Learning Adventure: Browse Our Courses
      </h2>
      <ul className="grid md:grid-cols-3 ss:grid-cols-2 grid-cols-1 gap-[30px]  w-full sm:mb-[50px] mb-10">
        {courseCards.map((item, index) => (
          <CourseCard key={item.id} {...item} index={index} />
        ))}
      </ul>

      <LinkCustom label="All Courses" href="courses" />
    </section>
  );
};

export default BestCourses;
