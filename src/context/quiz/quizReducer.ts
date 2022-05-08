import { getActiveQuiz } from "utils";

const quizReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_QUIZ_RESULTS":
      // console.log(action.payload);
      localStorage.setItem("quizResults", JSON.stringify(action.payload));
      return {
        ...state,
        selection: action.payload.selection,
        score: action.payload.score,
        quiz: action.payload.quiz,
      };
    case "SET_QUIZ_META":
      localStorage.setItem("quizMeta", JSON.stringify(action.payload));
      return {
        ...state,
        topicTitle: action.payload.topicTitle,
        slug: action.payload.slug,
        quiz: getActiveQuiz(action.payload.topicTitle, action.payload.slug)[0]
          .quiz,
      };
    case "RESET_QUIZ":
      localStorage.removeItem("quizMeta");
      localStorage.removeItem("quizResults");
      return {
        ...state,
        quiz: [],
        topicTitle: "",
        slug: "",
        selection: {},
        score: 0,
      };
    case "RESET_QUIZ_RESULTS":
      localStorage.removeItem("quizResults");
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default quizReducer;
