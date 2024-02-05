// import styles from './style';

import { Header, Hero, Stats, Features, About, Testimonials, Footer} from './components';


const App = () => {
  return (
    <div className="bg-bg w-full overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App 