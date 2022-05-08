export default function QuizCard({
  currentQuestion,
  setCurrentOption,
  currentOption,
}: any) {
  return (
    <>
      <p className="h5 question pl-10" key={currentQuestion.id}>
        <b>Q.{currentQuestion.id}</b> {currentQuestion.question}
      </p>
      <div className="questions-container mt-20 mb-20">
        {currentQuestion.options.map((option: any) => (
          <div
            key={option.id}
            className="option flex justify-center items-center m-4"
          >
            <label htmlFor={option.id} className="radio">
              <input
                type="radio"
                id={option.id}
                value={option.id}
                name="myRadioField"
                checked={currentOption === option.id}
                onChange={() => {
                  setCurrentOption(option.id);
                }}
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
