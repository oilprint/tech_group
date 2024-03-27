import { Button } from '../components';
import { useNavigate } from 'react-router-dom';

const SinglePageProgram = ({ program, subtitle, id }) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className="container ">
      <h2 className="md:mb-12 mb-6 md:text-4xl text-3xl leading-[1.3] uppercase">
        Course Program: {subtitle}
      </h2>
      <ol className="list-decimal gap-[60px] ss:columns-2 columns-1 mx-auto mb-10  pl-3">
        {program.map((item) => (
          <li key={item.id} className="mb-3">
            <h3 className=" md:text-2xl text-xl font-medium leading-[1.3] mb-1">{item.title}</h3>
            <ul className="pl-1">
              {item.description.map((el, ind) => (
                <li
                  key={ind}
                  className="relative pl-4 before:block before:absolute before:top-2 before:left-0 before:w-2 before:h-2 before:rounded-full  before:bg-primary">
                  {el}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <button onClick={goBack} className="secondaryBtn">
        Back
      </button>
    </section>
  );
};

export default SinglePageProgram;
