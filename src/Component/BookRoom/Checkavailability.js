import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import {
  setCheckInDate,
  setCheckOutDate,
  setRoomData,
} from "./../Redux/Sclice";
import "./custom.css";
import { PostApi } from "../Api/api";
import { Watch } from "react-loader-spinner";

const Checkavailability = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(startDate.getTime() + 86400000)
  );
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const handleChangeStartDate = (date) => {
    setStartDate(date);
    setEndDate(null); // Reset end date when start date changes
  };

  const handleChangeEndDate = (date) => {
    setEndDate(date);
  };

  // Dispatching the selected dates to the Redux store
  useEffect(() => {
    dispatch(setCheckInDate(startDate));
    dispatch(setCheckOutDate(endDate));
  }, [startDate, endDate, dispatch]);

  // Function to get the current date
  const getCurrentDate = () => {
    return new Date();
  };

  const handleCheckRoom = async () => {
    setLoader(true);
    try {
      const roomCheckResponse = await PostApi("/roomcheck", {
        startDate: startDate,
        endDate: endDate,
      });
      setLoader(false);
      dispatch(setRoomData(roomCheckResponse.roomCheckRespone));
    } catch (error) {
      console.log(error);
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
      <div className="md:flex md:justify-around md:ps-0 ps-5 py-5 bg-gray-900">
          <div className="md:flex">
            <div className="text-white py-3 md:px-5">Check-In</div>
            <DatePicker
              selected={startDate}
              onChange={handleChangeStartDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={getCurrentDate()}
              className="bg-gray-50 border w-50 checkInInput border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholderText="Check-in date"
            />
          </div>
          <div className="md:flex ">
            <div className="text-white py-3 md:px-5 ">Check-Out</div>
            <DatePicker
              selected={endDate}
              onChange={handleChangeEndDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={
                startDate
                  ? new Date(startDate.getTime() + 86400000)
                  : getCurrentDate()
              }
              className="bg-gray-50 border checkInInput border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
              placeholderText="Check-out date"
            />
          </div>
          <div className="md:flex ">
            <div className="py-3 md:px-5"></div>
            <button style={{width:'240px'}}
              className="bg-gray-50 checkInInput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 py-2 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full md:px-5"
              onClick={handleCheckRoom}
            >
              Check Rooms
            </button>
          </div>
      </div>

    </>
  );
};

export default Checkavailability;
