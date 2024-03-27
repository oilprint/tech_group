import { Link } from 'react-router-dom';
import { courseCards } from '../constants';
import { CourseCard } from '../components';
import { arrow } from '../assets/icons';

const BestCourses = () => {
  const firstThreeElements = courseCards.filter((item, index) => index < 3);
  return (
    <section className="container md:py-[70px] py-10" id="best">
      <h2 className="title">Start Your Learning Adventure: Browse Our Courses</h2>
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
    </section>
  );
};

export default BestCourses;
