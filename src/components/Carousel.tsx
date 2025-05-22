import data from "../data/skill_list.json";
import "../Carousel.css";

function Carousel() {
  return (
    <>
      <div className="carousel">
        <div className="group">
          {data.combind_list.map((skill, index) => (
            <div className="skill">
              <img key={index} src={skill.src} alt={skill.alt} />
            </div>
          ))}
        </div>
        <div className="group">
          {data.combind_list.map((skill, index) => (
            <div className="skill">
              <img key={index} src={skill.src} alt={skill.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel">
        <div className="group-reverse">
          {data.combind_list.map((skill, index) => (
            <div className="skill">
              <img key={index} src={skill.src} alt={skill.alt} />
            </div>
          ))}
        </div>
        <div className="group-reverse">
          {data.combind_list.map((skill, index) => (
            <div className="skill">
              <img key={index} src={skill.src} alt={skill.alt} />
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Carousel;
