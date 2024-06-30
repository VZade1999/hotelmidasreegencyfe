import React, { useEffect, useState } from "react";
import { PostApi } from "../Api/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Validation = (props) => {
  useEffect(() => {
    toast.success("OTP send");
  }, []);

  const navigate = useNavigate();
  const [isValid, SetIsValid] = useState(true);
  const [primaryTitle, setPrimaryTitle] = useState();
  const { name, email, password } = props.formData;
  const [otp, setOtp] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setOtp(value);
  };

  const handleValidate = async () => {
    try {
      const validateOtpResponse = await PostApi("/validateotp", {
        email: email,
        otp: otp,
      });
      if (!validateOtpResponse.valid) {
        setPrimaryTitle(validateOtpResponse.message);
        SetIsValid(false);
      }
      if (validateOtpResponse.valid) {
        try {
          const registerResponse = await PostApi("/register", {
            name: name,
            email: email,
            password: password,
          });
          if (registerResponse.valid) {
            navigate("/login");
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div class="font-[sans-serif] text-gray-800 bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
        <div class="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
          <div class="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
            <div>
              <h4 class="text-white text-lg font-semibold">
                Account Validation
              </h4>
              <p class="text-[13px] text-white mt-2">
                We have send OTP on you Email address
              </p>
            </div>
            <div>
              <h4 class="text-white text-lg font-semibold">
                Simple & Secure Validation
              </h4>
              <p class="text-[13px] text-white mt-2">
                Please Validate your number through OTP which you have received
                on your What's App
              </p>
            </div>
          </div>
          <form class="md:col-span-2 w-full py-6 px-6 sm:px-16">
            <div class="mb-6">
              <h3 class="text-2xl font-bold">Validate your OTP</h3>
            </div>
            {!isValid && (
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
                  </div>
                </div>
              </div>
            )}

            <div class="space-y-5">
              <div>
                <label class="text-sm mb-2 block">OTP</label>
                <div class="relative flex items-center">
                  <input
                    name="name"
                    type="number"
                    maxLength="4"
                    onChange={handleChange}
                    required
                    class="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter OTP"
                  />
                </div>
              </div>
            </div>
            <div class="!mt-10">
              <button
                onClick={handleValidate}
                type="button"
                class="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
              >
                Validate OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Validation;
