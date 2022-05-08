import "styles/quiz.css";
import { handleCorrectionOption } from "utils";

export default function QuizResult({
  question,
  selection: { userSelection, answer },
}: any) {
  return (
    <>
      <p className="h5 question text-left pl-10">
        <b>Q.{question.id}</b> {question.question}
      </p>
      <div className="questions-container mt-20 mb-20">
        {question.options.map((option: any) => (
          <div
            key={option.id}
            className={`option flex justify-center items-center m-4 ${handleCorrectionOption(
              userSelection,
              option.id,
              answer,
            )}`}
          >
            <label htmlFor={option.id} className="radio">
              <input
                type="radio"
                id={option.id}
                value={option.id}
                name={`myRadioField_${question.id}`}
                checked={userSelection === option.id}
                readOnly
                className="radio__input"
              />
              <div className="radio__radio" />
              {option.title}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
