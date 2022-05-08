import Navbar from "components/navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "routes";
import QuizProvider from "context/quiz/quizState";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="App">
      <Router>
        <QuizProvider>
          <Navbar />
          <Toaster position="top-right" />
          <PageRoutes />
        </QuizProvider>
      </Router>
    </div>
  );
}
