import Container from "components/container";
import headerImage from "assets/svg/test.svg";
import "styles/home.css";
import { categories } from "utils";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useQuiz from "hooks/quiz/useQuiz";
import movies from "assets/svg/movies.svg";
import tvShows from "assets/svg/tvShows.svg";
import music from "assets/svg/music.svg";
import books from "assets/svg/books.svg";

export default function Home() {
  const { quizDispatch } = useQuiz();
  const categoriesAssets = [tvShows, movies, music, books];
  useEffect(() => {
    quizDispatch({
      type: "RESET_QUIZ",
    });
  }, []);
  return (
    <Container>
      <div>
        <div className="flex justify-center pt-20 pb-20">
          <img src={headerImage} alt="header-img" className="header-img" />
        </div>
        <div className="flex flex-wrap category-container">
          {categories.map(({ id, title, slug }) => (
            <Link
              key={id}
              to={`/topics/${slug}`}
              state={title}
              className="quiz-category flex flex-col justify-center items-center m-2"
            >
              <img
                src={categoriesAssets[id - 1]}
                alt=""
                width="60%"
                height="50%"
              />
              {title}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
