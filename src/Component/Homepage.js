import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-8 lg:flex lg:h-screen lg:items-start">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class=" p-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl sm:text-5xl">
            नमस्कार मंडळी
            <h1><span class=" m-1  sm:block">Welcome to Hotel Midas </span></h1>
          </h1>
          
          <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Gate No. :- 1597, 5, Chakan Shikrapur Rd, near The Royal Cafe,
            Shikrapur, Maharashtra 412208
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              to="bookroom"
            >
              Book Room
            </Link>

            <Link
              class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              to="orderonline"
            >
              Order Food Online
            </Link>
          </div>
          <div className=" border-blue-1200 m-10 flex flex-wrap justify-center sm:w-auto">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5GqTwfOKkI8?si=JVPJ6FuPkUo5dCaP&amp;start=3&controls=0&autoplay=1&rel=0"
              title="YouTube video player"
              frameborder="0"
              allow=" autoplay; "
              rel="0"
              controls="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
