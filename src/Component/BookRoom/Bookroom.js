import React from "react";
import Calander from "./Checkavailability";
import Roomdata from "./Roomdata";
import { useSelector } from "react-redux";


const Bookroom = () => {
  const roomdata = useSelector((state) => state.roomdata.roomData);

  return (
    <>
      <div>
        <Calander />
      </div>
      
<div className="pt-4" ><div class="mx-auto max-w-screen-lg bg-blue-900 p-8 text-white md:flex md:items-center md:justify-around md:p-16 lg:rounded-xl">
  <div class="mr-10 mb-10 md:mb-0">
    <h2 class="mb-8 max-w-lg text-3xl font-bold sm:text-4xl">Please Select Check-In And Check-Out Date</h2>
    <ul class="flex max-w-xl flex-wrap gap-4">
      <li class="flex space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6 ">
          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
        <p class="text-gray-100">Under ground Parking 2/4 wheeler</p>
      </li>
      <li class="flex space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6 ">
          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
        <p class="text-gray-100">Ac / Non-Ac Rooms</p>
      </li>
      <li class="flex space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6 ">
          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
        <p class="text-gray-100">Dinner and Lunch</p>
      </li>
      <li class="flex space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6 ">
          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
        <p class="text-gray-100">Family Rooms Available</p>
      </li>
      <li class="flex space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6 ">
          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
        <p class="text-gray-100">Corporate / Couple Friendly / Pet Friendly Rooms are available</p>
      </li>
    </ul>
  </div>
  <div class="whitespace-nowrap">
    <button class="focus:outline-4 rounded-xl bg-gray-900 px-4 py-3 font-medium text-white shadow-md outline-white transition cursor-default">Try these now</button>
  </div>
</div>
</div>

      <div  className="flex flex-wrap  justify-center p-4 sm:p-8">
        {roomdata.map((roomdetails) => (
          <Roomdata
            key={roomdetails.roomId}
            price={roomdetails.price}
            roomType={roomdetails.roomType}
            discription={roomdetails.discription}
            isAvailable={roomdetails.isAvailable}
            id={roomdetails.roomId}
          />
        ))}
      </div>
    </>
  );
};

export default Bookroom;
