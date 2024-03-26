import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { courseCards } from '../constants';
import { SinglePageHero, SinglePageProgram } from '../sections';

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
    <>
      {course && (
        <div key={course.id}>
          <SinglePageHero {...course} />
          <SinglePageProgram program={course.program} subtitle={course.subtitle} id={course.id} />
        </div>
      )}
    </>
  );
};

export default SingleCourse;
