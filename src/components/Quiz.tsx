import { useState } from "react";
import quizData from "../data20.json";
import Question from "./Question";

export default function Quiz() {
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  function onSelectOption(selectedOption: string) {
    console.log(selectedOption, quizData[currentQuestionIndex].correctAnswer);
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
      console.log(score);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      setcurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="bg-hero-pattern bg-no-repeat bg-bottom bg-cover  flex justify-center items-center min-h-screen bg-gray-100 ">
      {showScore ? (
        <div className="bg-white shadow-2xl rounded-lg p-5 w-full max-w-md text-center bg-opacity-70 ">
          <h2 className="text-2xl font-semibold">
            Your Score: {score}/{quizData.length}
          </h2>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md bg-opacity-20">
          <Question
            question={quizData[currentQuestionIndex].question}
            options={quizData[currentQuestionIndex].options}
            onSelectOption={onSelectOption}
          />
        </div>
      )}
    </div>
  );
}
