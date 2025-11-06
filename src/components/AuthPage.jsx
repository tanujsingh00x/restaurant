import { useState } from "react";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="flex justify-center p-15 min-h-screen bg-gray-200 px-4 dark:bg-gray-950">
      <div className="relative flex flex-col md:flex-row w-full max-w-[850px] h-auto md:h-[500px] dark:bg-gray-300 bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-700">
        <div
          className={`flex flex-col items-center justify-center text-white p-8 md:p-0 transition-all duration-700 
          ${
            isSignUp
              ? "bg-orange-600 md:absolute md:top-0 md:left-0 md:w-1/2 md:h-full md:translate-x-0 md:rounded-r-[100px] dark:bg-gray-700"
              : "bg-orange-600 md:absolute md:top-0 md:left-0 md:w-1/2 md:h-full md:translate-x-full md:rounded-l-[100px] dark:bg-gray-700"
          }`}
        >
          {isSignUp ? (
            <>
              <h2 className="text-3xl font-bold mb-3 text-center">
                Welcome Back!
              </h2>
              <p className="mb-6 text-center w-full md:w-3/4 text-sm md:text-base">
                Enter your personal details to use all of site features
              </p>
              <button
                onClick={() => setIsSignUp(false)}
                className="cursor-pointer border border-white px-6 py-2 rounded-full hover:bg-white hover:text-indigo-600 transition"
              >
                SIGN IN
              </button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-3 text-center">
                Hello, Friend!
              </h2>
              <p className="mb-6 text-center w-full md:w-3/4 text-sm md:text-base">
                Register with your personal details to use all of site features
              </p>
              <button
                onClick={() => setIsSignUp(true)}
                className="cursor-pointer border border-white px-6 py-2 rounded-full hover:bg-white hover:text-indigo-600 transition"
              >
                SIGN UP
              </button>
            </>
          )}
        </div>

        <div
          className={`flex flex-col items-center justify-center dark:bg-gray-300 bg-white w-full md:w-1/2 py-10 md:py-0 transition-all duration-700 
          ${
            isSignUp
              ? "md:absolute md:top-0 md:right-0 md:h-full"
              : "md:absolute md:top-0 md:left-0 md:h-full"
          }`}
        >
          {isSignUp ? (
            <div className="w-3/4">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Create Account
              </h2>

              <div className="flex justify-center gap-4 mb-4 text-indigo-600 text-lg">
                <FaGoogle className="cursor-pointer rounded-2xl p-3 text-5xl text-green-500 hover:text-red-500 transition" />
                <FaFacebookF className="cursor-pointer rounded-2xl p-3 text-5xl text-blue-600 hover:text-red-500 transition" />
                <FaGithub className="cursor-pointer rounded-2xl p-3 text-5xl text-black hover:text-red-500 transition" />
                <FaLinkedinIn className="cursor-pointer rounded-2xl p-3 text-5xl text-amber-400 hover:text-red-500 transition" />
              </div>

              <p className="text-gray-800 text-center mb-4 text-sm md:text-base">
                or use your email for registration
              </p>

              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-md px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-md px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button className="cursor-pointer w-full bg-green-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
                SIGN UP
              </button>
            </div>
          ) : (
            <div className="w-3/4">
              <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

              <div className="flex justify-center gap-4 mb-4 text-lg">
                <FaGoogle className="cursor-pointer rounded-2xl p-3 text-5xl text-green-500 hover:text-red-500 transition" />
                <FaFacebookF className="cursor-pointer rounded-2xl p-3 text-5xl text-blue-600 hover:text-red-500 transition" />
                <FaGithub className="cursor-pointer rounded-2xl p-3 text-5xl text-black hover:text-red-500 transition" />
                <FaLinkedinIn className="cursor-pointer rounded-2xl p-3 text-5xl text-amber-400 hover:text-red-500 transition" />
              </div>

              <p className="text-gray-800 text-center mb-4 text-sm md:text-base">
                or use your email password
              </p>

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-md px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <p className="text-sm text-indigo-600 text-right mb-3 cursor-pointer hover:underline">
                Forgot Your Password?
              </p>
              <button className="cursor-pointer w-full bg-green-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
                SIGN IN
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
