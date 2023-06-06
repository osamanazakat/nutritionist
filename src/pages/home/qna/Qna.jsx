import "./Qna.scss";
import QnaCard from "../../../components/qnaCard/QnaCard";
import Wrapper from "../../../components/wrapper/Wrapper";
import { FourthLayer } from "../../../assets";

const data = [
  {
    id: 1,
    question: "How can I make an appointment?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
  },
  {
    id: 2,
    question: "What is the assesment cost?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
  },
  {
    id: 3,
    question: "Do you offer online appointments?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
  },
  {
    id: 4,
    question: "Do you work with people with diabetes?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.",
  },
];

const Qna = () => {
  return (
    <section className="qna">
      <Wrapper>
        <div className="qna__text">
          <img src={FourthLayer} alt="" />
          <h2>Frequently asked questions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod
            tempor incididunt ut labore et dolore aliqua ut enim ad minim veniam
            quis.
          </p>
        </div>

        <div className="qna__container">
          {data.map(({ question, answer, id }) => (
            <QnaCard question={question} answer={answer} key={id} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Qna;
