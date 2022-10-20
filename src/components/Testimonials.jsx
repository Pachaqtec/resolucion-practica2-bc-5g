import arrow from "../assets/images/arrow.png";
import iconStar from "../assets/images/icon-star.png";

import { testimonials } from "../data/dataTestimonials";

const Testimonials = () => {
  return (
    <section className="testimonial__container">
      <div className="testimonial__title">
        <h2>Transform your life through education</h2>
        <div className="testimonial__title--arrows">
          <img className="arrow left" src={arrow} />
          <img className="arrow right" src={arrow} />
        </div>
      </div>
      <div className="testimonial__items__container">
        {testimonials.map((testimonial) => (
          <article key={testimonial.frase} className="testimonial__item">
            <h3>{testimonial.frase}</h3>
            <p>{testimonial.testimonial}</p>
            <div className="testimonial__item__perfil">
              <img src={testimonial.avatarImg} />
              <div className="item__perfil__info">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.direction}</span>
                <div className="item__perfil__rate">
                  <img src={iconStar} />
                  <img src={iconStar} />
                  <img src={iconStar} />
                  <img src={iconStar} />
                  <img src={iconStar} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
