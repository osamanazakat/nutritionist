import "./HeroSection.scss";
import Wrapper from "../../../components/wrapper/Wrapper";
import Button from "../../../components/button/Button";
import { Hero, Layer } from "../../../assets";

const HeroSection = () => {
  return (
    <section className="hero">
      <Wrapper className="hero__container">
        <div className="hero__left">
          <img src={Layer} alt="layer" />
          <h1>I am Sophie Moore, your nutritionist</h1>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat aute irure dolor in
            reprehenderit.
          </p>
          <div className="hero__btns">
            <Button className="btns btn-black">Browse plans</Button>
            <Button className="btns btn-white">Contact me</Button>
          </div>
        </div>

        <div className="hero__right">
          <img src={Hero} alt="Hero" />
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
