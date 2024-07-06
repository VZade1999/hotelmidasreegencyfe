import React, {useState} from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { roomId } from "./../Redux/Sclice";
import Cookies from "js-cookie";
import { PostApi } from "../Api/api";
import SimpleImageSlider from "react-simple-image-slider";

const Roomdata = (props) => {
  const navigate = useNavigate();
  // const count = useSelector((state) => state.roomdata.value);
  console.log(props);
  const dispatch = useDispatch();
  const Bearer = Cookies.get("Bearer");
  const handleRoomBook = () => {
    if (Bearer) {
      try {
        const isTokenValid = PostApi("/validtoken", {
          Token: Bearer,
        });
        if (isTokenValid) {
          dispatch(roomId(props.id));
          navigate("/bookroom/checkout");
        } else {
          navigate("/login");
        }
      } catch (error) {}
    } else {
      navigate("/login");
    }
  };
  const sliderImages = [
    {
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c8/3a/ee/getlstd-property-photo.jpg?w=700&h=-1&s=1",
    },
    {
      url: "https://images.oyoroomscdn.com/uploads/hotel_image/175960/medium/e09f34ce5921afaa.jpg",
    },
    {
      url: "https://images.oyoroomscdn.com/uploads/hotel_image/51730/xlarge/988bda7c6b98a717.jpg",
    },
    {
      url: "https://www.marmomac.com/wp-content/uploads/2020/12/Ritz-Carlton-bathroom-1.jpeg",
    },
    {
      url: "https://static.dezeen.com/uploads/2022/01/hotel-bathrooms-lookbook-dezeen_2364_col_hero.gif",
    },
  ];
  return (
    <>
      <div className="w-full max-w-sm bg-gray-900 border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 m-2">
        <div className=" flex justify-center items-center m-5">
        <SimpleImageSlider
            width={window.innerWidth <= 640? 280:300}
            height={window.innerWidth <= 640? 150: 200}
            images={sliderImages}
            showBullets={false}
            showNavs={true}
            autoPlay={true} 
               autoPlayDelay = {4}
         />
        </div>

        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.roomType}
          </h5>

          <h1 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.discription}
          </h1>

          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              4.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              Rs {props.price}/-
            </span>

            {props.isAvailable ? (
              <button onClick={handleRoomBook}>
                <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Book Room
                </Link>
              </button>
            ) : (
              <Link className="text-white bg-red-700 hover:bg-red-800 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-800 dark:hover:bg-red-700">
                Not Available
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Roomdata;
