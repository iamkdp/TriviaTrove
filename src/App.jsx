import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

import Navbar from "./components/Navbar";
import QuizStart from "./components/QuizStart";
import Quiz from "./components/Quiz";
import QuizSummary from "./components/QuizSummary";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-blue-200 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors flex flex-col items-center justify-start">
          <Navbar />
          <main className='flex-1 w-full flex bg-blue-100 dark:bg-gray-700 flex-col items-center'>
            <Routes>
              <Route path="/" element={<QuizStart />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<QuizSummary />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
