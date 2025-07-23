import { useState } from 'react';
import QuizStart from './QuizStart';
import QuestionCard from './QuestionCard';
import QuizSummary from './QuizSummary';

function Quiz() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const onStart = (data) => {
    setQuizData(data);
    setQuizStarted(true);
    setScore(0);
    setCurrentIndex(0);
    setIsQuizComplete(false);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(prev => prev + 1);
  };

  const handleNext = () => {
    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsQuizComplete(true);
      localStorage.setItem('lastScore', score + 1);
    }
  };
  const restartQuiz = () => {
    setQuizData([]);
    setQuizStarted(false);
    setIsQuizComplete(false);
    setScore(0);
    setCurrentIndex(0);
  };
  const handleExit = () => {
    setQuizStarted(false);          // return to start screen
    setQuizData([]);                // clear questions
    setCurrentIndex(0);          // reset question index
    setScore(0);                    // reset score
    setIsQuizComplete(false);       // hide summary
  };


  if (!quizStarted) return (
    <QuizStart onStart={onStart} />
  )

  if (isQuizComplete) {
    return <QuizSummary score={score} total={quizData.length} onRestart={restartQuiz} />;
  }

  if (quizStarted)
    return (
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-4xl bg-white rounded-lg shadow-lg">

        <p className="text-md text-gray-600 mb-1 text-center font-semibold tracking-wide">
          Question {currentIndex + 1} of {quizData.length}
          <button
            onClick={handleExit}
            className="absolute top-4 right-4 bg-[#B7410E] hover:bg-[#a0360c] text-white font-semibold px-4 py-2 rounded shadow-md"
          >
            Exit Quiz
          </button>
        </p>
        <div className='max-w-md w-full mx-auto'>
          <QuestionCard
            questionData={quizData[currentIndex]}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        </div>
      </div>
    );
}
export default Quiz;
