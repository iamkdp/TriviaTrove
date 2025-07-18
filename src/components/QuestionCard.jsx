import React, { useState, useEffect } from 'react';

export default function QuestionCard({ questionData, onAnswer, onNext }) {
    if (!questionData) return <p>Invalid question data</p>;
    useEffect(() => {
        setSelectedOption(null);
        setIsAnswered(false);
    }, [questionData]);

    const { question, correct_answer, category, incorrect_answers } = questionData;
    const options = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);

    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const decodeHTML = (html) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };

    const handleOptionClick = (option) => {
        if (isAnswered) return;
        setSelectedOption(option);
        setIsAnswered(true);
        onAnswer(option === correct_answer); // callback to parent to update score
    };

    const getOptionStyle = (option) => {
        console.log("Checking style for:", option, selectedOption, correct_answer, isAnswered);
        if (!isAnswered) return 'bg-black-100 hover:bg-grey-200'; // default
        if (option === correct_answer) return 'bg-green-100 text-black border border-green-10';
        if (option === selectedOption && option !== correct_answer) return 'bg-red-100 text-black border border-red-60';
        return 'bg-black-100 hover:bg-grey-200';
    };


    return (
        <div className="p-6 mb-6 rounded shadow">
            <p className="text-sm text-gray-600 mb-2">📘 Topic:  <span dangerouslySetInnerHTML={{ __html: category }} /></p>
            <p className="text-base font-medium mb-4" dangerouslySetInnerHTML={{ __html: `Q: ${question}` }} />

            <div className="space-y-2">
                {options.map((option, idx) => (
                    <button
                        key={idx}
                        className={`w-full text-left border px-4 py-2 rounded ${getOptionStyle(option)} transition`}
                        onClick={() => handleOptionClick(option)}
                        disabled={isAnswered}
                    >
                        <span dangerouslySetInnerHTML={{ __html: option }} />
                    </button>
                ))}
            </div>

            {isAnswered && (
                <button
                    onClick={onNext}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Next Question
                </button>
            )}
        </div>
    );
}
