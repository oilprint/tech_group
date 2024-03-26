import { courseCards } from '../constants';
import { CourseCard } from '../components';

const CoursesHero = () => {
  return (
    <section className="container pt-[130px] pb-12">
      <h1 className="font-tektur md:text-6xl text-3xl block md:mb-12  mb-8 text-center">
        Explore our <span className="text-accent">educational</span> programs
      </h1>
      <ul className="grid md:grid-cols-3 ss:grid-cols-2 grid-cols-1 gap-8 gap-y-11">
        {courseCards.map((item, index) => (
          <CourseCard key={item.id} {...item} index={index} />
        ))}
      </ul>
    </section>
  );
};

export default CoursesHero;
