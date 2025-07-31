import React, { useState, useEffect } from 'react';
import Timer from './Timer';
export default function QuestionCard({ questionData, onAnswer, onNext }) {
    if (!questionData) return <p>Invalid question data</p>;
    const { question, correct_answer, category, incorrect_answers } = questionData;
    const [options, setOptions] = useState([]);
    useEffect(() => {
        const shuffled = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);
        setOptions(shuffled);
        setSelectedOption(null);
        setIsAnswered(false);
    }, [questionData]);

    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleOptionClick = (option) => {
        if (isAnswered) return;
        setSelectedOption(option);
        setIsAnswered(true);
        onAnswer(option === correct_answer); // callback to parent to update score
    };

    const getOptionStyle = (option) => {
        // console.log("Checking style for:", option, selectedOption, correct_answer, isAnswered);
        if (!isAnswered) return 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'; // default
        if (option === correct_answer) return 'bg-green-500 text-white border border-green-600 shadow-md';
        if (option === selectedOption && option !== correct_answer) return 'bg-red-500 text-white border border-red-60 shadow-md';
        return 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200';
    };


    return (
        <div className="r-width bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 rounded shadow-lg border-gray-300 dark:border-gray-700 ">
            <p className="r-width text-lg font-semibold  text-blue-600 dark:text-blue-200 mb-3 uppercase tracking-wider">📘 Topic:  <span dangerouslySetInnerHTML={{ __html: category }} /></p>
            <p className="r-width text-gray-800 dark:text-gray-200 text-xl font-medium mb-3" dangerouslySetInnerHTML={{ __html: `Q: ${question}` }} />
            <Timer
                duration={15}
                isPaused={isAnswered}
                questionData={questionData}
                onTimeout={() => {
                    setIsAnswered(true);
                    setSelectedOption(null);
                }}
            />

            <div className="space-y-3 mb-3">
                {options.map((option, idx) => (
                    <button
                        key={idx}
                        className={`w-full text-left border px-4 py-3 rounded-lg border focis:outline-none transition ${getOptionStyle(option)} transition`}
                        onClick={() => handleOptionClick(option)}
                        disabled={isAnswered}
                    >
                        <span dangerouslySetInnerHTML={{ __html: option }} />
                    </button>
                ))}
                <button
                    onClick={onNext}
                    className={`w-sm block mx-auto rounded w-full  mt-2 px-4 py-2 ${isAnswered ? "bg-blue-600 text-white rounded-lg hover:bg-blue-700" :
                        "bg-blue-200 text-blue-600 cursor-not-allowed"} `}
                    disabled={!isAnswered}
                >
                    Next Question
                </button>
            </div>

        </div>
    );
}
