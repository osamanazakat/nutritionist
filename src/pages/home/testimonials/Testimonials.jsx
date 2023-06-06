import "./Testimonials.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Wrapper from "../../../components/wrapper/Wrapper";
import { Layer, Image1, Image2, Image3 } from "../../../assets";
import Button from "../../../components/button/Button";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Wrapper>
        <div className="testimonials__text">
          <img src={Layer} alt="" />
          <h2>Don’t take my word for it, take theirs</h2>
          <div className="testimonials__arrows"></div>
        </div>

        <Carousel
          responsive={responsive}
          autoPlay={false}
          showDots={false}
          infinite={true}
        >
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>

        <Button className="btn-black btn">Browse plans</Button>
      </Wrapper>
    </section>
  );
};

export default Testimonials;
