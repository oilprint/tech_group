import { courseCards } from '../constants';
import { CourseCard } from '../components';

const CoursesHero = () => {
  return (
    <section className="container pt-[130px] pb-12">
      <h1 className="font-tektur md:text-6xl text-3xl block mb-10 text-center">
        Learn More About Our Courses
      </h1>
      <ul className="grid grid-cols-3 gap-8">
        {courseCards.map((item, index) => (
          <CourseCard key={item.id} {...item} index={index} />
        ))}
      </ul>
    </section>
  );
};

export default CoursesHero;
