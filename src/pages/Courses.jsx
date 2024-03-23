import { courseCards } from '../constants';
import { CourseCard } from '../components';

const Courses = () => {
  return (
    <div>
      <h1>All Courses</h1>
      {courseCards.map((item, index) => (
        <CourseCard key={item.id} {...item} index={index} />
      ))}
    </div>
  );
};

export default Courses;
