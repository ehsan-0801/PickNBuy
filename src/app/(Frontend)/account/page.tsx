"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { z } from "zod";
import {
  Mail,
  User,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  KeyRound,
  ShieldCheck,
  Moon,
  Sun,
} from "lucide-react";

// Define Zod schemas for validation
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;

const AccountPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [animationStep, setAnimationStep] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Login form state
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  // Signup form state
  const [signupFormData, setSignupFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Animation effect for the login key
  useEffect(() => {
    if (!isSignUp) {
      const interval = setInterval(() => {
        setAnimationStep((prev) => (prev + 1) % 4);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isSignUp]);

  useEffect(() => {
    // Check if user prefers dark mode
    if (typeof window !== "undefined") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(isDark);

      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateLogin = () => {
    try {
      loginSchema.parse(loginFormData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const validateSignup = () => {
    try {
      signupSchema.parse(signupFormData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateLogin()) {
      console.log("Login form submitted:", loginFormData);
      // Handle login logic here
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateSignup()) {
      console.log("Signup form submitted:", signupFormData);
      // Handle signup logic here
    }
  };

  const handleGoogleAuth = () => {
    console.log("Google Auth clicked");
    // Handle Google authentication logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-indigo-950 px-4 py-10 my-16">
      <div className="w-full max-w-md overflow-hidden relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl">
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-600 dark:bg-indigo-500 rounded-br-full opacity-10"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-600 dark:bg-purple-500 rounded-bl-full opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-600 dark:bg-indigo-500 rounded-tl-full opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-600 dark:bg-purple-500 rounded-tr-full opacity-10"></div>

        {/* Form container */}
        <div className="relative">
          <div className="flex flex-col items-center p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {isSignUp ? "Sign up to get started" : "Sign in to continue"}
            </p>

            {/* Login Animation */}
            {!isSignUp && (
              <div className="w-full flex justify-center my-6">
                <div className="relative h-24 w-24">
                  {/* Key animation */}
                  <div
                    className={`absolute transition-all duration-700 ease-in-out transform ${
                      animationStep === 0
                        ? "translate-x-0 opacity-100"
                        : animationStep === 1
                        ? "translate-x-4 opacity-70"
                        : animationStep === 2
                        ? "translate-x-0 opacity-100"
                        : "translate-x-0 opacity-100 scale-110"
                    }`}
                  >
                    <KeyRound
                      size={80}
                      className="text-indigo-600 dark:text-indigo-400"
                    />
                  </div>

                  {/* Lock animation */}
                  <div
                    className={`absolute left-8 transition-all duration-700 ease-in-out transform ${
                      animationStep === 0
                        ? "opacity-70"
                        : animationStep === 1
                        ? "opacity-100"
                        : animationStep === 2
                        ? "opacity-100 scale-110"
                        : "opacity-70"
                    }`}
                  >
                    <Lock
                      size={80}
                      className="text-purple-600 dark:text-purple-400"
                    />
                  </div>

                  {/* Shield animation (appears on successful "unlock") */}
                  <div
                    className={`absolute left-4 transition-all duration-700 ease-in-out transform ${
                      animationStep === 3
                        ? "opacity-100 scale-110"
                        : "opacity-0 scale-90"
                    }`}
                  >
                    <ShieldCheck
                      size={40}
                      className="text-green-500 dark:text-green-400"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Forms with sliding effect */}
            <div
              className="w-full relative overflow-hidden"
              style={{ minHeight: "380px" }}
            >
              {/* Login Form */}
              <div
                className="w-full transition-all duration-700 ease-in-out absolute left-0"
                style={{
                  transform: isSignUp ? "translateX(-110%)" : "translateX(0)",
                  opacity: isSignUp ? 0 : 1,
                  zIndex: isSignUp ? 0 : 1,
                }}
              >
                <form onSubmit={handleLoginSubmit}>
                  <div className="mb-4 relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={loginFormData.email}
                      onChange={handleLoginChange}
                      placeholder="Email Address"
                      className="w-full py-3 pl-10 pr-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all hover:border-indigo-300 dark:hover:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    {errors.email && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="mb-6 relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      <Lock size={18} />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={loginFormData.password}
                      onChange={handleLoginChange}
                      placeholder="Password"
                      className="w-full py-3 pl-10 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all hover:border-indigo-300 dark:hover:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    {errors.password && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Sign In
                  </button>
                </form>
              </div>

              {/* Sign Up Form */}
              <div
                className="w-full transition-all duration-700 ease-in-out absolute left-0"
                style={{
                  transform: isSignUp ? "translateX(0)" : "translateX(110%)",
                  opacity: isSignUp ? 1 : 0,
                  zIndex: isSignUp ? 1 : 0,
                }}
              >
                <form onSubmit={handleSignupSubmit}>
                  <div className="mb-4 relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={signupFormData.name}
                      onChange={handleSignupChange}
                      placeholder="Full Name"
                      className="w-full py-3 pl-10 pr-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all hover:border-indigo-300 dark:hover:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    {errors.name && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="mb-4 relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={signupFormData.email}
                      onChange={handleSignupChange}
                      placeholder="Email Address"
                      className="w-full py-3 pl-10 pr-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all hover:border-indigo-300 dark:hover:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    {errors.email && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="mb-4 relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      <Lock size={18} />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={signupFormData.password}
                      onChange={handleSignupChange}
                      placeholder="Password"
                      className="w-full py-3 pl-10 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all hover:border-indigo-300 dark:hover:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    {errors.password && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div className="mb-6 relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      <Lock size={18} />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={signupFormData.confirmPassword}
                      onChange={handleSignupChange}
                      placeholder="Confirm Password"
                      className="w-full py-3 pl-10 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all hover:border-indigo-300 dark:hover:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                    {errors.confirmPassword && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Create Account
                  </button>
                </form>
              </div>
            </div>

            {/* Google Auth Button */}
            <div className="my-6 w-full">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <button
                onClick={handleGoogleAuth}
                className="w-full mt-4 flex items-center justify-center gap-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                <LogIn
                  size={20}
                  className="text-indigo-500 dark:text-indigo-400"
                />
                <span>Sign {isSignUp ? "up" : "in"} with Google</span>
              </button>
            </div>

            {/* Toggle between Sign In and Sign Up */}
            <div className="text-center mt-2">
              <p className="text-gray-600 dark:text-gray-300">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <button
                  type="button"
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setErrors({});
                  }}
                  className="ml-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium focus:outline-none transition-colors"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
