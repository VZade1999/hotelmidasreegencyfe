import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from "react-redux";
import { setCheckInDate, setCheckOutDate, setRoomData } from "./../Redux/Sclice";
import './custom.css'
import { PostApi } from '../Api/api';
import { Watch } from "react-loader-spinner";


const Checkavailability = () => {

const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date(startDate.getTime() + 86400000));
const dispatch = useDispatch();

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

const handleCheckRoom = async () =>{
try{

  const roomCheckResponse = await PostApi('/roomcheck',{
    startDate : startDate,
    endDate: endDate
  })
  dispatch(setRoomData(roomCheckResponse.roomCheckRespone))


}catch(error){
  console.log(error);
}
}

return (
<div className="flex p-5 justify-center banner dark:bg-gray-900 ps-5 container ">
<div className="flex flex-col justify-around md:flex-row items-around space-y-4 md:space-y-0 md:space-x-4 w-full row ">
<div  >
<span className="text-white me-5">Check-In</span>
<DatePicker
       selected={startDate}
       onChange={handleChangeStartDate}
       selectsStart
       startDate={startDate}
       endDate={endDate}
       minDate={getCurrentDate()}
       className="bg-gray-50 border checkInInput border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
       placeholderText="Check-in date"
     />
</div>
<div>
<span className="text-white me-5 md:px-5">Check-Out</span>
<DatePicker
selected={endDate}
onChange={handleChangeEndDate}
selectsEnd
startDate={startDate}
endDate={endDate}
minDate={startDate ? new Date(startDate.getTime() + 86400000) : getCurrentDate()}
className="bg-gray-50 checkInInput border border-gray-300 text-gray-900 text-lg rounded-lg focus
focus
px-4 py-2 dark
dark
dark
dark
dark:focus
dark:focus
w-full"
placeholderText="Check-out date"
/>
</div>
<button 
       className="bg-gray-50 checkInInput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 py-2 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-40" 
       onClick={handleCheckRoom}
     >
Check Rooms
</button>
</div>
</div>
);
};

export default Checkavailability;