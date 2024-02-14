import { statistics } from "../constants";

const Statistics = () => {
  console.log(statistics);
  return (
    <section className="container ">
      <ul>
        {statistics.map((item, index) => (
          <li key={index}>
            <span>{item.value}</span>
            <p>{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

