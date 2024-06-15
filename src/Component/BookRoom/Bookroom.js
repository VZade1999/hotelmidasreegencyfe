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
