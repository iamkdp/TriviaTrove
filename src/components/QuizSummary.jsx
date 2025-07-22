function QuizSummary({ score, total, onRestart }) {
  const getMessage = () => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "🎉 Perfect Score!";
    if (percentage >= 70) return "👏 Great Job!";
    if (percentage >= 40) return "🙂 Good Try!";
    return "😅 Better Luck Next Time!";
  };

  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
      <h2 className="text-2xl font-bold  text-blue-600 mb-4">🎮Quiz Completed!</h2>
      <p className="text-xl text-gray-700 font-medium mb-2">Your Score: <span className="text-green-500 font-semibold">{score} / {total}</span></p>
      <p className="text-lg text-gray-600 mb-6">{getMessage()}</p>
      <button onClick={onRestart} className="bg-blue-600 text-white font-semibold rounded transition px-4 py-2 rounded hover:bg-blue-700">
        Restart Quiz
      </button>
    </div>
  );
}

export default QuizSummary;
