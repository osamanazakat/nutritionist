import "./InstaSection.scss";
import Wrapper from "../../../components/wrapper/Wrapper";
import { SecondLayer } from "../../../assets";
import Button from "../../../components/button/Button";
import { Insta1, Insta2, Insta3, Insta4, Insta5 } from "../../../assets";

const InstaSection = () => {
  return (
    <section className="insta">
      <Wrapper>
        <div className="insta__text">
          <img src={SecondLayer} alt="" />
          <h2>Follow me on Instagram</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat aute irure.
          </p>
        </div>

        <div className="insta__container">
          <div className="insta__left">
            <img src={Insta1} alt="" />
          </div>

          <div className="insta__right">
            <img src={Insta2} alt="" />
            <img src={Insta3} alt="" />
            <img src={Insta4} alt="" />
            <img src={Insta5} alt="" />
          </div>
        </div>

        <div className="btn">
          <Button className="btn-black">@nutritionist</Button>
        </div>
      </Wrapper>
    </section>
  );
};

export default InstaSection;
