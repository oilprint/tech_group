import { Link } from 'react-router-dom';
import { courseCards } from '../constants';
import { CourseCard, LinkCustom } from '../components';
import { arrow } from '../assets/icons';

const BestCourses = () => {
  const firstThreeElements = courseCards.filter((item, index) => index < 3);
  return (
    <section className="container md:py-[70px] py-10 ">
      <h2 className="md:mb-12 mb-6 md:text-[52px] text-[36px] leading-[1.3] uppercase">
        Start Your Learning Adventure: Browse Our Courses
      </h2>
      <ul className="grid md:grid-cols-3 ss:grid-cols-2 grid-cols-1 gap-[30px]  w-full sm:mb-[50px] mb-10">
        {firstThreeElements.map((item, index) => (
          <CourseCard key={item.id} index={index} {...item} />
        ))}
      </ul>

      <Link
        to="courses"
        className="flex gap-2 uppercase sm:mr-0 mx-auto w-fit text-accent  transition ease-in-out duration-300  focus:outline focus:outline-1 focus:outline-offset-4 focus:outline-accent rounded hover:text-white active:text-accent">
        All Courses
        <img src={arrow} alt="arrow" width={36} height={16} />
      </Link>

      <LinkCustom label="All Courses" href="courses" />
    </section>
  );
};

export default BestCourses;
