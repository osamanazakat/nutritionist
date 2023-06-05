import "./SecondSection.scss";
import Wrapper from "../../../components/wrapper/Wrapper";
import { SecondLayer, Food, Weight, Check } from "../../../assets";
import Button from "../../../components/button/Button";

const features = [
  {
    id: 1,
    title: "Learn to eat healthy food",
    des: "Excepteur sint occaecat cupidatat nones proident sunt in culpa qui officia dese.",
    img: Food,
  },
  {
    id: 2,
    title: "Reach your dream weight",
    des: "Lorem ipsum dolor sit amet ecteturolmer adipiscing elit sed do eiusmod.",
    img: Weight,
  },
  {
    id: 3,
    title: "Periodic health check",
    des: "Duis aute irure dolor in reprehenderit in te velit esse cillum dolore eu fugiat nulla.",
    img: Check,
  },
];

const SecondSection = () => {
  return (
    <section className="features">
      <div className="features__bg"></div>
      <Wrapper>
        <div className="features__text">
          <img src={SecondLayer} alt="layer" />
          <h2>What will you get?</h2>
          <p>
            Dolor sit amet consectetur adipiscing elit sed do eius mod tempor
            incididunt ut labore et dolore.
          </p>
        </div>

        <div className="features__container">
          {features.map((feature) => (
            <div key={feature.id} className="features__card">
              <img src={feature.img} alt="feature" />
              <h3>{feature.title}</h3>
              <p>{feature.des}</p>
            </div>
          ))}
        </div>

        <div className="features__btns">
          <Button className="btns btn-black">Browse plans</Button>
          <Button className="btns btn-white">Contact me</Button>
        </div>
      </Wrapper>
    </section>
  );
};

export default SecondSection;
