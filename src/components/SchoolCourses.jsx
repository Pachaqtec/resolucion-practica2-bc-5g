import iconUser from "../assets/images/icon-user.png";
import iconTime from "../assets/images/icon-time.png";

import { courses } from "../data/dataCourses";

const SchoolCourses = () => {
  return (
    <section className="schoolcourses__container">
      <div className="schoolcourses__title">
        <h2>How our online public schools works</h2>
        <button className="btn-outlined">View all courses</button>
      </div>
      <div className="schoolcourses__cards__container">
        {courses.map((course) => (
          <article key={course.title} className="schoolcourses__card">
            <div className="schoolcourses__card__img">
              <img src={course.imgCourse} />
            </div>
            <div className="schoolcourses__card__body">
              <h3 className="schoolcourses__card__title">{course.title}</h3>
              <div className="schoolcourses__card__info">
                <div className="card__info--item">
                  <img src={iconUser} />
                  <span>{course.students}</span>
                </div>
                <div className="card__info--item">
                  <img src={iconTime} />
                  <span>{course.month} monts</span>
                </div>
              </div>
            </div>
            <div className="schoolcourses__card__action">
              <button>Add to Cart</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SchoolCourses;
