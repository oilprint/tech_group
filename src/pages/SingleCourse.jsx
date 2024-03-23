import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CourseCard } from '../components';
import { courseCards } from '../constants';

const SingleCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    console.log(id);
    const singleCourse = courseCards.find((el) => el.id === id);
    console.log(singleCourse);
    setCourse(singleCourse);
  }, []);

  return (
    <div>
      <Link to="/"> Back</Link>
      <p>{id}</p>

      {course && <CourseCard key={course.id} {...course} />}
    </div>
  );
};

export default SingleCourse;
