import { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard';

function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);


  const fetchQuizData = async () => {
    setLoading(true);
    try {
      console.log('Fetching questions...');
      const response = await fetch('https://opentdb.com/api.php?amount=5');
      const responseData = await response.json();
      console.log(responseData.results);
      setQuizData(responseData.results);
      setScore(0);
      setCurrentIndex(0);
      setIsQuizComplete(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
    } finally {
      setLoading(false); // ensures spinner is hidden even if an error occurs
    }
  };
  useEffect(() => {
    let ignore = false;
    fetchQuizData();
    return () => {
      ignore = true; // cleanup function to prevent state updates if component unmounts
    };
  }, []);

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
    fetchQuizData();
  };


  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (isQuizComplete) {
    return (
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">🎉 Quiz Complete!</h2>
        <p className="text-lg">
          Your Score: <span className="font-semibold">{score}</span> / {quizData.length}
        </p>
        <p className="text-md italic">
          {
            score === quizData.length ? "Perfect Score! You're a trivia master! 🧠" :
              score >= quizData.length * 0.7 ? "Great job! Keep it up! 👍" :
                score >= quizData.length * 0.4 ? "Not bad, but you can do better! 💪" :
                  "Tough luck! Try again to improve! 🔁"
          }
        </p>
        <button
          onClick={restartQuiz}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Restart Quiz
        </button>
      </div>
    );
  }


  return (
    <div className="max-w-2xl mx-auto p-4">
      <p className="text-sm text-gray-600 mb-2">
        Question {currentIndex + 1} of {quizData.length}
      </p>

      <QuestionCard
        questionData={quizData[currentIndex]}
        onAnswer={handleAnswer}
        onNext={handleNext}
      />
    </div>
  );
}

export default Quiz;
