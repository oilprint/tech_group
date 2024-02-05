import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="pb-16">
      <div className="container">
        <ul className="flex flex-1 flex-wrap gap-[30px]">
          {stats.map((stat) => (
            <li
              key={stat.id}
              className=" flex flex-1  justify-center items-center px-2 py-5 rounded-[20px] bg-black-gradient"
            >
              <h2 className="text-primary mr-2 text-4xl font-semibold ">
                {stat.value}
              </h2>
              <p className="text-accent uppercase text-sm">{stat.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Stats