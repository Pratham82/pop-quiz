import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import Topics from "pages/topics";
import Rules from "pages/rules";
import Quiz from "pages/quiz";
import QuizResults from "pages/results";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topics/:topic" element={<Topics />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/quiz/:quizTopic" element={<Quiz />} />
      <Route path="/results" element={<QuizResults />} />
    </Routes>
  );
}
