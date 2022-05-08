import { useEffect, useReducer } from "react";
import QuizContext from ".";
import quizReducer from "./quizReducer";

const quizInitialState = {
  quiz: [],
  topicTitle: "",
  slug: "",
  selection: {},
  score: 0,
};
export default function QuizProvider({ children }: any) {
  const [quizState, quizDispatch] = useReducer(quizReducer, quizInitialState);
  const quiz = localStorage.getItem("quizMeta");
  const results = localStorage.getItem("quizResults");
  useEffect(() => {
    if (quiz && results) {
      const quizInfo = JSON.parse(quiz);
      const quizResults = JSON.parse(results);
      quizDispatch({
        type: "SET_QUIZ_META",
        payload: quizInfo,
      });
      quizDispatch({
        type: "SET_QUIZ_RESULTS",
        payload: quizResults,
      });
    }
  }, [quiz, results]);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
}
