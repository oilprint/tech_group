import { Hero, Statistics, Features, BestCourses } from "./sections";

const Home = () => {
  return (
    <main>
      <div className="wrapper overflow-x-hidden">
        <Hero />
        <Statistics />
        <Features />
        <BestCourses />
      </div>
    </main>
  );
}

export default Home