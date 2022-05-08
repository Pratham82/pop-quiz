import Container from "components/container";
import QuizCard from "components/quiz-card";
import useQuiz from "hooks/quiz/useQuiz";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  useNavigate,
  useLocation,
  //
} from "react-router-dom";
import {
  getActiveQuiz,
  // topics
} from "utils";

interface ISelection {
  [key: string]: number;
}

export default function Quiz() {
  const navigate = useNavigate();
  const {
    state: { slug, topicTitle },
  }: any = useLocation();
  const {
    // quizState: {
    // quiz: { quiz },
    // slug,
    // topicTitle
    // },
    // quizState,
    quizDispatch,
  } = useQuiz();

  const [{ quiz }] = getActiveQuiz(topicTitle, slug);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(quiz[questionIndex]);
  const [currentOption, setCurrentOption] = useState(0);
  const [selection, setSelection] = useState<ISelection>({});
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(30);
  const [totalTime, setTotalTime] = useState(0);

  const isLastQuestion = questionIndex === quiz.length - 1;
  const handleQuestionIndex = () => {
    if (!isLastQuestion) {
      setQuestionIndex(questionIndex + 1);
      setCurrentQuestion(quiz[questionIndex + 1]);
    }
    setCurrentOption(0);
    setCounter(30);
    setTotalTime(totalTime + 30 - counter);

    // Store user selection
    setSelection({
      ...selection,
      [currentQuestion.id]: {
        userSelection: currentOption,
        answer: currentQuestion.answer.id,
        timeTaken: 30 - counter,
      },
    });

    if (currentOption === currentQuestion.answer.id) setScore(score + 1);
    if (selection[currentQuestion.id]) {
      setSelection({ ...selection, [currentQuestion.id]: currentOption });
    }
  };

  useEffect(() => {
    if (Object.keys(selection).length === quiz.length) {
      navigate("/results");
      quizDispatch({
        type: "SET_QUIZ_RESULTS",
        payload: {
          score,
          selection,
          quiz,
        },
      });
    }
  }, [selection, score]);

  useEffect(() => {
    const timer: any =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    if (counter === 0) {
      handleQuestionIndex();
    }
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  return (
    <Container>
      <h3 className="h3 text-center">Quiz</h3>
      <h4 className="text-right">
        Question: {currentQuestion.id}/{quiz.length}{" "}
        <p>Countdown: 00:{counter}</p>
      </h4>
      <div className="flex flex-col items-center mt-20">
        <QuizCard
          currentQuestion={currentQuestion}
          setCurrentOption={setCurrentOption}
          currentOption={currentOption}
          next={handleQuestionIndex}
        />
        <div className="bottom-container pr-10">
          <button
            type="button"
            onClick={() =>
              !currentOption
                ? toast.error("Please choose an option")
                : handleQuestionIndex()
            }
            className="btn primary-filled-btn quiz-btn ml-10"
          >
            {isLastQuestion ? "Submit" : "Next"}
            <span className="pl-10">
              <i className="far fa-arrow-right" />
            </span>
          </button>
        </div>
      </div>
    </Container>
  );
}
