import { prices } from "../data/dataPrices";

const Prices = () => {
  return (
    <section className="prices__container">
      <div className="prices__title">
        <h2>Transform your life through education</h2>
        <button className="btn-outlined">Upgrade now</button>
      </div>
      <div className="prices__cards__container">
        {prices.map((price) => (
          <article
            key={price.type}
            className={`prices__card__item ${price.type}`}
          >
            <div className="card__item__header">
              <h4>{price.type}</h4>
            </div>
            <div className="card__item__body">
              <p>
                <span>$</span>
                {price.price}
              </p>
              <ul className="item__body__content">
                {price.content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card__item__action">
              <button>Buy Plan</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Prices;
