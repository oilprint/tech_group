import { statistics } from "../constants";

const Statistics = () => {
  console.log(statistics);
  return (
    <section>
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

