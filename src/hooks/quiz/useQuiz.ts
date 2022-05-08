import QuizContext from "context/quiz";
import { useContext } from "react";

const useQuiz = () => useContext(QuizContext);

export default useQuiz;
