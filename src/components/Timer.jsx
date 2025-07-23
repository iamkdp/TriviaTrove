import { useEffect, useState } from "react";

const Timer = ({ duration, onTimeout, isPaused, questionData }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (isPaused) return;

        if (timeLeft === 0) {
            onTimeout(); // notify parent component
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft, isPaused]);

    useEffect(() => {
        setTimeLeft(duration); // reset timer when duration changes
    }, [duration, questionData]);

    return (
        <div className="text-right font-bold text-[#B7410E]">
            ⏳ Time Left: {timeLeft}s
        </div>
    );
};

export default Timer;
