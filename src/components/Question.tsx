import React from "react";

type TQuestionProps = {
  question: string;
  options: string[];
  onSelectOption: (selectedOption: string) => void; //function type
};

const Question: React.FC<TQuestionProps> = ({ question, options, onSelectOption }) => {
  return (
    <div className="flex justify-center mt-24 ">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md bg-opacity-80">
        <div className="flex-row mb-5">
          <h3>Choose Questions from: </h3>
          <button className="bg-sky-200 text-sky-800 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-2xl px-2 py-1">
            {" "}
            1-10{" "}
          </button>{" "}
          <button className="bg-sky-200 text-sky-800 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-2xl px-2 py-1">
            {" "}
            10-20{" "}
          </button>{" "}
          <button className="bg-sky-200 text-sky-800 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-2xl px-2 py-1">
            {" "}
            20-30{" "}
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-4">{question}</h2>
        <ul className="space-y-2">
          {options.map((item) => (
            <li key={item}>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300 w-full"
                onClick={() => onSelectOption(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Question;
