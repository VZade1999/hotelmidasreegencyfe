import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./validation"; // Make sure to import your Validation component
import { PostApi } from "../Api/api";
import { Watch } from "react-loader-spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [primaryTitle, setPrimaryTitle] = useState();
  const [secondaryTitle, setSecondaryTitle] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, rememberMe } = formData;

    if (name && email && password && rememberMe) {
      setLoader(true);
      try {
        const otpResponse = await PostApi(`/generateotp`, {
          email: email,
        });
        setLoader(false);
        if (
          otpResponse.message ===
          "Email address is already register"
        ) {
          setPrimaryTitle("Email address is already registered.");
          setSecondaryTitle(
            "Please register with another Email address or login"
          );
          setIsRegistered(true);
          setIsSubmitted(false);
        } else {
          setIsSubmitted(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // Handle validation error
      setPrimaryTitle("All fields are mandatory.");
      setSecondaryTitle(
        "Please fill all fields and accept the terms and conditions."
      );
      setIsRegistered(true);
    }
  };

  return (
    <>
     {loader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70">
          <Watch
            visible={loader}
            height="70"
            width="70"
            radius="48"
            color="#0047AB"
            ariaLabel="watch-loading"
          />
        </div>
      )}
      {!isSubmitted && (
        <div className="font-[sans-serif] text-gray-800 bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
          <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
            <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
              <div>
                <h4 className="text-white text-lg font-semibold">
                  Create Your Account
                </h4>
                <p className="text-[13px] text-white mt-2">
                  Welcome to our registration page! Get started by creating your
                  account.
                </p>
              </div>
              <div>
                <h4 className="text-white text-lg font-semibold">
                  Simple & Secure Registration
                </h4>
                <p className="text-[13px] text-white mt-2">
                  Our registration process is designed to be straightforward and
                  secure. We prioritize your privacy and data security.
                </p>
              </div>
            </div>
            <form
              className="md:col-span-2 w-full py-6 px-6 sm:px-16"
              onSubmit={handleSubmit}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Create an account</h3>
              </div>
              <>
                {isRegistered && (
                  <div
                    class="bg-blue-100 border-t-4 border-blue-500 rounded-b text-teal-900 px-4 py-3 mb-4 shadow-md"
                    role="alert"
                  >
                    <div class="flex">
                      <div class="py-1">
                        <svg
                          class="fill-current h-6 w-6 text-blue-500 mr-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                        </svg>
                      </div>
                      <div>
                        <p class="font-bold">{primaryTitle}</p>
                        <p class="text-sm">{secondaryTitle}</p>
                      </div>
                    </div>
                  </div>
                )}
              </>
              <div className="space-y-5">
                <div>
                  <label className="text-sm mb-2 block">Name</label>
                  <div className="relative flex items-center">
                    <input
                      name="name"
                      type="text"
                      required
                      className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="text-sm mb-2 block">E-Mail Address</label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="email"
                      required
                      className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter e-mail address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4"
                      viewBox="0 0 682.667 682.667"
                    >
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path
                            d="M0 512h512V0H0Z"
                            data-original="#000000"
                          ></path>
                        </clipPath>
                      </defs>
                      <g
                        clipPath="url(#a)"
                        transform="matrix(1.33 0 0 -1.33 0 682.667)"
                      >
                        <path
                          fill="none"
                          stroke-miterlimit="10"
                          stroke-width="40"
                          d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="text-sm mb-2 block">Password</label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="rememberMe"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm">
                    I accept the{" "}
                    <Link
                      to="/PrivacyCookiesPolicy"
                      className="text-blue-600 font-semibold hover:underline ml-1"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>
              <div className="!mt-10">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                >
                  Send OTP
                </button>
              </div>
              <p className="text-sm mt-6 text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 font-semibold hover:underline ml-1"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
      {isSubmitted && <Validation formData={formData} />}
    </>
  );
};
export default Register;
