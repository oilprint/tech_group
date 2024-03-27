import {
  Hero,
  Statistics,
  Features,
  BestCourses,
  AboutCenter,
  Testimonials,
  ContactUs,
  Faqs,
} from '../sections';

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
        <Faqs />
        <ContactUs />
      </div>
    </main>
  );
};

export default Home;
