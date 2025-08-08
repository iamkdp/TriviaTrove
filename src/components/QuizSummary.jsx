import HighScore from "./HighScore";
import { useLocation, useNavigate } from "react-router-dom";
function QuizSummary() {
  const navigate = useNavigate();
  const location = useLocation();

  const score = location.state?.score || Number(localStorage.getItem('lastScore'))|| 0;
  const total = location.state?.total || 0;
  const getMessage = () => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "🎉 Perfect Score!";
    if (percentage >= 70) return "👏 Great Job!";
    if (percentage >= 40) return "🙂 Good Try!";
    return "😅 Better Luck Next Time!";
  };
  const handleRestart = () => {
    navigate("/"); // ✅ Go back to QuizStart page
  };

  return (
    <div className="max-w-md my-6 w-full border-gray-300 dark:border-gray-700 bg-gray-300 dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
      <h2 className="text-2xl font-bold  text-blue-600 mb-4">🎮Quiz Completed!</h2>
      <p className="text-xl text-gray-700 font-medium mb-2">Your Score: <span className="text-green-500 font-semibold">{Math.floor((score / total) * 100)}</span></p>
      <HighScore score={Math.floor((score / total) * 100)} />
      <p className="text-lg text-gray-600 mb-6">{getMessage()}</p>
      <button onClick={handleRestart} className="bg-blue-600 text-white font-semibold rounded transition px-4 py-2 rounded hover:bg-blue-700">
        Restart Quiz
      </button>
    </div>
  );
}

export default QuizSummary;
