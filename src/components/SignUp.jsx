import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Signup successful! Please login.");
      navigate("/");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex items-baseline justify-center bg-gray-100 dark:bg-gray-800 mt-2 rounded-lg">
      <div className="w-full md:w-md lg:w-lg   p-8 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-center text-3xl font-bold text-blue-600 ">Create Account</h2>
        <p className="text-gray-600 dark:text-gray-100 text-center m-4">Join TriviaTrive and start Quiz Journey</p>
        <form onSubmit={handleSignup} className="space-y-4 "> 
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md  text-gray-700 dark:text-gray-100
          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 "
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 dark:text-gray-100
          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md
           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Signup</button>
        </form>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default SignUp;
