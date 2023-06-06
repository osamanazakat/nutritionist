import "./VideoSection.scss";
import Wrapper from "../../../components/wrapper/Wrapper";
import { Thumbnail, Video, SecondLayer } from "../../../assets";

const VideoSection = () => {
  return (
    <section className="video">
      <div className="video__bg"></div>
      <Wrapper>
        <img src={SecondLayer} alt="" className="layer" />
        <h2>What makes me an expert in nutrition</h2>
        <div className="video__section">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/Ojiv9Smi4XE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {/* <img src={Thumbnail} alt="" className="video__img-1" />
          <img src={Video} alt="" className="video__img-2" /> */}
        </div>

        <div className="video__flex">
          <div className="video__card">
            <h2>
              10<span className="green">+</span>
            </h2>
            <p>Years of experience</p>
          </div>
          <div className="video__card">
            <h2>
              2,500<span className="red">+</span>
            </h2>
            <p>Happy clients</p>
          </div>
          <div className="video__card">
            <h2>
              100<span className="green">%</span>
            </h2>
            <p>Satisfaction</p>
          </div>
          <div className="video__card">
            <h2>
              400<span className="red">+</span>
            </h2>
            <p>Healthy recipes</p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default VideoSection;
