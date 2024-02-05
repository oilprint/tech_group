import { features } from '../constants';
import { layout } from '../style';

import Button from './Button';
import FeatureCard from './FeatureCard';


const Features = () => {
  return (
    <section id="features" >
      <div className="container">
        <div className={`flex gap-[30px] items-center ${layout.sectionImg}`}>
          <div>
            <h2 className="text-6xl max-w-[500px] uppercase font-light leading-[120%] text-accent mb-12">
              Leading Cybersecurity Solutions for Digital Empowerment
            </h2>
            
              <Button />
            

          </div>

          <ul className="max-w-[500px] w-full gap-[30px] flex flex-1 flex-col">
            {features.map((item) => (
              <FeatureCard key={item.id} {...item} />
              
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features