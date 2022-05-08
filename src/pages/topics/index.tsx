import Container from "components/container";
import { useLocation, useNavigate } from "react-router-dom";
import "styles/quiz.css";
import topicsHeader from "assets/svg/topic-header.svg";
import { topics } from "utils";
import useQuiz from "hooks/quiz/useQuiz";

export default function Topics() {
  const { state: topicTitle }: any = useLocation();
  const navigate = useNavigate();
  const { quizDispatch } = useQuiz();

  return (
    <Container>
      <h3 className="h3 text-center">{topicTitle}</h3>
      <div className="flex flex-col items-center">
        <div className="flex justify-center flex-wrap pt-20 pb-20">
          <img src={topicsHeader} alt="topic-header" className="topic-header" />
        </div>
      </div>
      {/* <div className="flex flex-wrap" style={{ border: "1px solid red" }}>
        {Object.entries(topics)
          .filter(([key]) => key === topicTitle)
          .map(([, val]) => val)[0]
          .map(({ id, title, slug, poster }: any) => (
            <div
              key={id}
              className="quiz-topic flex-col justify-between items-center m-10 p-20"
            >
              <h5 className="h5">{title}</h5>
              <img
                src={poster}
                alt={title}
                style={{
                  width: "200px",
                }}
              />
              <button
                type="button"
                onClick={() =>
                  navigate("/rules", { state: { slug, topicTitle, title } })
                }
                className="btn primary-filled-btn quiz-btn"
              >
                Take Quiz
              </button>
            </div>
          ))}
      </div> */}
      <div className="flex flex-wrap justify-center">
        {Object.entries(topics)
          .filter(([key]) => key === topicTitle)
          .map(([, val]) => val)[0]
          .map(({ id, title, slug, poster }: any) => (
            <div
              key={id}
              className="quiz-topic flex flex-col items-center m-10 p-20"
            >
              <h5 className="h5">{title}</h5>
              <img src={poster} alt={title} className="topic-poster" />
              <button
                type="button"
                onClick={() => {
                  navigate("/rules", { state: { slug, topicTitle, title } });
                  // set quiz slug topicTitle here
                  quizDispatch({
                    type: "SET_QUIZ_META",
                    payload: { slug, topicTitle },
                  });
                }}
                className="btn primary-filled-btn quiz-btn"
              >
                Take Quiz
              </button>
            </div>
          ))}
      </div>
    </Container>
  );
}
