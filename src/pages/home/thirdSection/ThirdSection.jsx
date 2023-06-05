import "./ThirdSection.scss";
import { Fruit, Plan, Girl, Layer } from "../../../assets";
import Wrapper from "../../../components/wrapper/Wrapper";
import Button from "../../../components/button/Button";

const ThirdSection = () => {
  return (
    <section className="healthy">
      <Wrapper className="healthy__container">
        <div className="healthy__left">
          <img src={Girl} alt="girl" />
        </div>

        <div className="healthy__right">
          <img src={Layer} alt="layer" />
          <h2>Get the healthy life you always dreamed of</h2>

          <div className="healthy__flex">
            <img src={Plan} alt="plan" />
            <div>
              <span>Tailor-made plan for your own needs</span>
              <p>
                Dolor sit amet consectetur adipiscing elit sed do eius mod
                tempor incididunt ut labore et dolore.
              </p>
            </div>
          </div>

          <div className="healthy__flex">
            <img src={Fruit} alt="fruit" />
            <div>
              <span>Tailor-made plan for your own needs</span>
              <p>
                Dolor sit amet consectetur adipiscing elit sed do eius mod
                tempor incididunt ut labore et dolore.
              </p>
            </div>
          </div>

          <Button className="btn-black btn">Browse plans</Button>
        </div>
      </Wrapper>
    </section>
  );
};

export default ThirdSection;
