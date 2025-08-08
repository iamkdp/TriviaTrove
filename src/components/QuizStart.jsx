import React, { useState } from 'react';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
function QuizStart({  }) {
    const navigate = useNavigate();
    const [amount, setAmount] = useState(5);
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [loading, setLoading] = useState(false);

    const handleStart = async () => {
        setLoading(true);
        let url = `https://opentdb.com/api.php?amount=${amount}`;
        if (category) url += `&category=${category}`;
        if (difficulty) url += `&difficulty=${difficulty}`;

        const res = await fetch(url);
        const data = await res.json();
        setLoading(false);
        navigate("/quiz", { state: { quizData: data.results } });
    };
    if (loading) return <Loading />;
    return (
        <div className="r-width my-4 border-gray-200 h-128 dark:border-gray-700 bg-blue-300 dark:bg-gray-800 rounded-lg shadow-lg p-6 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Configure Your Quiz</h2>

            <label className="block mb-4 font-semibold">
                <span className='text-gray-700 font-semibold'>  Number of Questions:</span>
                <input
                    type="number"
                    min={1}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full mt-1 block p-2 border rounded bg-white dark:bg-blue-200 text-black border-gray-300 shadow-sm 
                    focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder='Enter number(e.g-5)'
                />
            </label>

            <label className="block mb-4 font-semibold">
                <span className='text-gray-700 font-semibold'>Category:</span>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full mt-1 block p-2 border rounded border-gray-300 shadow-sm bg-white dark:bg-blue-200  text-black
                     focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                    <option value="">Any</option>
                    <option value="9">General Knowledge</option>
                    <option value="18">Science: Computers</option>
                    <option value="23">History</option>
                    {/* Add more categories if needed */}
                </select>
            </label>

            <label className="block mb-6 font-semibold">
                <span className='text-gray-700 font-semibold'>Difficulty:</span>
                <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full mt-1 block p-2 border rounded border-gray-300 shadow-sm bg-white dark:bg-blue-200 text-black
                     focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                    <option value="">Any</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>

            <button
                onClick={handleStart}
                className="w-xs sm:w-sm md:w-md  block mx-auto bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blie-700 
                font-semibold transittion duration-200"
            >
                Start Quiz
            </button>
        </div>
    );
}

export default QuizStart;
