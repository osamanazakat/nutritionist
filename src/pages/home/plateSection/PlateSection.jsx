import "./PlateSection.scss";
import Button from "../../../components/button/Button";
import { ThirdLayer, Plate, Lea } from "../../../assets";
import Wrapper from "../../../components/wrapper/Wrapper";

const PlateSection = () => {
  return (
    <section className="plate">
      <Wrapper className="plate__container">
        <div className="plate__left">
          <img src={ThirdLayer} alt="layer" />
          <h2>Are you ready to take the first step?</h2>
          <p>
            Dolor sit amet consectetur adipiscing elit sed do eius mod tempor
            incididunt mod tempor incidi
          </p>
          <div className="plate__btns">
            <Button className="btn-black">Browse plans</Button>
            <Button className="btn-white">Contact me</Button>
          </div>
        </div>

        <div className="plate__right">
          <img src={Plate} alt="plate" className="img-1" />
        </div>
      </Wrapper>

      <div className="plate__circle-1"></div>
      <div className="plate__circle-2"></div>
    </section>
  );
};

export default PlateSection;
