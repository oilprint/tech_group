import {
  Hero,
  Statistics,
  Features,
  BestCourses,
  AboutCenter,
  Testimonials,
} from "../sections";

const Home = () => {
  return (
    <main>
      <div className="wrapper overflow-x-hidden">
        <Hero />
        <Statistics />
        <Features />
        <BestCourses />
        <AboutCenter />
        <Testimonials />
      </div>
    </main>
  );
}

export default Home