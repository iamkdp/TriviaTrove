import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate= useNavigate();
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      setMessage("Login successful!");
      navigate("/");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex items-baseline justify-center bg-gray-100 dark:bg-gray-800 mt-2 rounded-lg">
      <div className="w-full md:w-md lg:w-lg   p-8 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-center text-3xl font-bold text-blue-600 ">Welcome Back!</h2>
        <p className="text-gray-600 dark:text-gray-100 text-center m-4">Sign in to Continue your Journey</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-100 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md  text-gray-700 dark:text-gray-100
          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 "
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-large text-gray-700 dark:text-gray-100 mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md  text-gray-700 dark:text-gray-100
          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 "
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md
           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Let's Go...
          </button>
        </form>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Login;
