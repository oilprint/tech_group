import { Hero, Statistics } from "./sections";

const Home = () => {
  return (
    <main>
      <div className="wrapper overflow-hidden ">
        <Hero />
        <Statistics />
      </div>
    </main>
  );
}

export default Home