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


  if (!quizStarted) return (
    <QuizStart onStart={onStart} />
  )

  if (isQuizComplete) {
    return <QuizSummary score={score} total={quizData.length} onRestart={restartQuiz} />;
  }

  if (quizStarted)
    return (
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <p className="text-md text-gray-600 mb-1 text-center font-semibold tracking-wide">
          Question {currentIndex + 1} of {quizData.length}
        </p>
        <div className='max-w-md w-full mx-auto p-4 sm:p-6 lg:p-8'>
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
