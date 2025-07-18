import { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard';

function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    let ignore = false;
    const fetchQuizData = async () => {
      setLoading(true);
      try {
        console.log('Fetching questions...');
        const response = await fetch('https://opentdb.com/api.php?amount=5');
        const responseData = await response.json();
        console.log(responseData.results);
        setQuizData(responseData.results);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false); // ensures spinner is hidden even if an error occurs
      }
    };

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
      setShowScore(true);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (showScore) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">🎉 Quiz Complete!</h2>
        <p className="text-lg mt-2">Your Score: {score} / {quizData.length}</p>
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
