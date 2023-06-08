import "./Cta.scss";
import Wrapper from "../../../components/wrapper/Wrapper";
import Button from "../../../components/button/Button";
import { LayerCta } from "../../../assets";

const Cta = () => {
  return (
    <section className="cta">
      <Wrapper className="cta__container">
        <h2>Are you ready to take the first step?</h2>

        <div className="cta__btns">
          <Button className="btn-black">Browse plans</Button>
          <Button className="btn-white">Contact me</Button>
        </div>
      </Wrapper>

      <img src={LayerCta} alt="" className="cta__img-1" />
      <img src={LayerCta} alt="" className="cta__img-2" />
      <img src={LayerCta} alt="" className="cta__img-3" />
      <img src={LayerCta} alt="" className="cta__img-4" />
    </section>
  );
};

export default Cta;
