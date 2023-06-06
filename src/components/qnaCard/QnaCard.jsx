import { useState } from "react";
import "./QnaCard.scss";
import { AiOutlinePlus } from "react-icons/ai";

const QnaCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <article
      className={`qnaCard ${showAnswer ? "card-shadow" : ""}`}
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <div className="qnaCard__text">
        <h3>{question}</h3>
        <p className={showAnswer ? "answer-display" : ""}>{answer}</p>
      </div>

      <div className="qnaCard__icon">
        <AiOutlinePlus />
      </div>
    </article>
  );
};

export default QnaCard;
