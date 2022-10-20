import { stats } from "../data/dataStats";

const SchoolStats = () => {
  return (
    <section className="schoolstats__container">
      <div className="schoolstats__left"></div>
      <div className="schoolstats__right">
        <h2>How our online public schools works</h2>
        <div className="schoolstats__stats">
          {stats.map((stat) => (
            <article key={stat.title} className="stats__item">
              <div className="stats__item__img">
                <img src={stat.srcIcon} />
              </div>
              <h3>{stat.title}</h3>
              <p>{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolStats;
