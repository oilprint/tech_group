import { Link, useRouteError } from 'react-router-dom';
import bgHero from '../assets/images/bg-hero.jpg';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <section
      id="hero"
      className="relative bg-cover bg-no-repeat bg-center h-[100vh] "
      style={{
        backgroundImage: ` linear-gradient(0deg, rgba(0,4,15,1) 0%, rgba(0,4,15,0.48783263305322133) 18%, rgba(0,4,15,0.011642156862745057) 41%), url(${bgHero})`,
      }}>
      <div className="h-full flex flex-col gap-10 justify-center items-center">
        <span className="md:text-[350px] ss:text-[300px] text-[150px] opacity-35 font-bold ">
          404
        </span>
        <p className="font-semibold md:text-5xl text-3xl text-accent">Page not found</p>
        <div>{error.message}</div>
        <Link to="/" className="secondaryBtn">
          Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
