import Container from "components/container";
import faqImage from "assets/svg/faq.svg";
import "styles/quiz.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Rules() {
  const navigate = useNavigate();
  const {
    state: { slug, topicTitle, title },
  }: any = useLocation();

  return (
    <Container>
      <h3 className="h3 text-center">Quiz Rules</h3>

      <div className="flex flex-col items-center">
        <div>
          <img src={faqImage} alt="" className="rules-img" />
        </div>
        <div className="quiz-topic text-left flex flex-col justify-between m-10 p-20">
          <p className="h6">
            <b>1. </b>
            Complete the quiz in given time
          </p>
          <p className="h6">
            <b>2.</b> Youve been given 4 options for each question, choose 1
            option from given options.
          </p>
          <p className="h6">
            <b>3.</b> For each question youll get 1 points
          </p>
          <p className="h6">
            <b>4. </b> There will be total 10 questions
          </p>
          <p className="h6">
            <b>5. </b> For passing the quiz you have to give at-least answer 3
            questions correctly
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() =>
            navigate(`/quiz/${slug}`, { state: { slug, topicTitle, title } })
          }
          className="btn primary-filled-btn quiz-btn"
        >
          Start Quiz
          <span className="pl-10">
            <i className="far fa-arrow-right" />
          </span>
        </button>
      </div>
    </Container>
  );
}
