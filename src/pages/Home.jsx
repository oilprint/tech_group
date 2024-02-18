import { Hero, Statistics, Features,
  BestCourses, AboutCenter, Testimonials, ContactUs, Faqs } from "../sections";
  import { Modal } from "../components"

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
        <Modal />
      </div>
    </main>
  );
}

export default Home