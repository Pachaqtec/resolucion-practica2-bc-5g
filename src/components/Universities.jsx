import university1 from "../assets/images/university_1.png";
import university2 from "../assets/images/university_2.png";
import university3 from "../assets/images/university_3.png";
import university4 from "../assets/images/university_4.png";

const images = [university1, university2, university3, university4];

const Universities = () => {
  return (
    <div className="universities__container">
      <div className="universities__cant">
        <h2>400+</h2>
        <p>Universities worldwide that partner with us</p>
      </div>
      {images.map((img, i) => (
        <div key={i} className="universities__img">
          <img src={img} />
        </div>
      ))}
    </div>
  );
};

export default Universities;
