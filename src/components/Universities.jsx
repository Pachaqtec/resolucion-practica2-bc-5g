import { images } from "../data/universities";

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
