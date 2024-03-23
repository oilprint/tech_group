import { statistics } from '../constants';

const Statistics = () => {
  console.log(statistics);
  return (
    <section id="statistics">
      <ul className="flex justify-center gap-[30px] flex-wrap ">
        {statistics.map((item, index) => (
          <li
            className="p-6 flex justify-center  items-center  bg-gray-gradient rounded-2xl md:min-w-[300px] min-w-[250px]"
            key={index}>
            <span className="text-3xl mr-2.5 font-tektur ">{item.value}</span>
            <p className="text-accent md:text-xl text-base uppercase">{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
