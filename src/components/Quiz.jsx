import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionCard from './QuestionCard';

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const quizData = location.state?.quizData || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);


  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(prev => prev + 1);
    if (currentIndex === quizData.length - 1) {
      const finalScore = isCorrect ? score + 1 : score;
      localStorage.setItem("lastScore", finalScore);
      setTimeout(() => {
        navigate("/result", {
          state: { score: finalScore, total: quizData.length },
        });
      }, 2400);

    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleExit = () => navigate('/'); // go back to start
  if (!quizData.length) {
    return <p className="text-center mt-6">No quiz data. Go back and start again.</p>;
  }
  return (
    <div className="w-full my-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-4xl border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">

      <p className="text-md text-gray-600 mb-1 text-center font-semibold tracking-wide">
        Question {currentIndex + 1} of {quizData.length}
        <button
          onClick={handleExit}
          className="absolute top-2 right-4 bg-[#B7410E] hover:bg-[#a0360c] text-white font-semibold px-4 py-2 rounded shadow-md"
        >
          Exit Quiz
        </button>
      </p>
      <div className='max-w-md w-full mx-auto border-gray-300 '>
        <QuestionCard
          questionData={quizData[currentIndex]}
          onAnswer={handleAnswer}
          onNext={handleNext}
          isLast={currentIndex === quizData.length - 1}
        />
      </div>
    </div>
  );
}
export default Quiz;
