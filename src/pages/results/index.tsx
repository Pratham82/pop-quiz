import Container from "components/container";
import "styles/quiz.css";
import useQuiz from "hooks/quiz/useQuiz";
import QuizResult from "components/quiz-result";
import { getTotalTime } from "utils";
import { useNavigate } from "react-router-dom";

export default function QuizResults() {
  const {
    quizState: { score, selection, quiz },
    quizDispatch,
  }: any = useQuiz();
  const navigate = useNavigate();

  const handleReset = () => {
    quizDispatch({
      type: "RESET_QUIZ",
    });
    navigate("/");
  };

  return (
    <Container>
      <h3 className="h3 text-center">Results</h3>
      <h3 className="h3 text-center">
        Score: {score}/ {quiz.length}
      </h3>
      <h3 className="h5 text-center pb-20">
        Total time to completion
        <u>{getTotalTime(selection)} min.</u>
      </h3>
      {quiz &&
        quiz.map((question: any) => (
          <QuizResult
            key={question.id}
            question={question}
            selection={selection[question.id]}
            selectedAnswers={selection}
          />
        ))}
      <div className="flex justify-center mb-20">
        <button
          type="button"
          className="btn primary-filled-btn quiz-btn"
          onClick={handleReset}
        >
          <i className="far fa-undo pr-10" />
          Retake Quiz
        </button>
      </div>
    </Container>
  );
}
