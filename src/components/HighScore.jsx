import { useEffect, useState } from "react";

const HighScore = ({ score }) => {
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem("highScore")) || 0
  );

  useEffect(() => {
    if (score > highScore) {
      localStorage.setItem("highScore", score);
      setHighScore(score);
    }
  }, [score]);

  return (
    <div className="text-center mt-4">
      <p className="text-lg font-semibold text-[#228B22]">
        🏆 High Score: {highScore}
      </p>
    </div>
  );
};

export default HighScore;
