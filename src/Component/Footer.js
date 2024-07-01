import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/logo.jpg";

const Footer = () => {
  return (
    <footer class="px-3 pt-4 lg:px-9 border-t-2 bg-gray-50">
      <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="sm:col-span-2">
          <a href="#" class="inline-flex items-center">
            <img src={Logo} alt="logo" class="h-8 w-8" />
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800">
              Hotel Midas Reegency
            </span>
          </a>
          <div class="mt-6 lg:max-w-xl">
            <p class="text-sm text-gray-800">
              At Hotel Midas Regency, we understand the importance of indulging
              in delightful cuisine. Our talented chefs curate a diverse menu of
              culinary delights, featuring both local and international flavors.
              Guests can savor delectable dishes in our elegant dining areas or
              enjoy the convenience of ordering food online through our
              user-friendly website. Whether you're seeking a relaxing getaway,
              planning a special event, or simply craving a gourmet meal, Hotel
              Midas Regency promises an unforgettable experience marked by
              luxury, comfort, and impeccable service. We pride ourselves on
              offering top-notch amenities and services to ensure our guests
              have an unparalleled stay.
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-2 text-sm">
          <p class="text-base font-bold tracking-wide text-gray-900">
            Useful Links
          </p>

          <Link to="/orderonline">Order Food</Link>
          <Link to="/bookroom">Book Room</Link>
          <a target="_blank" href="#">
            Our Services
          </a>
          <a href="#">Team</a>
          <a href="#">Blog</a>
          <a target="_blank">Make Connections with us</a>
          <a
            target="_blank"
            href="https://www.instagram.com/hotel_midas_reegency/"
          >
            Instagram
          </a>
          <a target="_blank" href="https://www.facebook.com/MIDASReegency">
            Facebook
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCEX_o2CCJFxN9hCWu3kvURw"
          >
            YouTube
          </a>
        </div>

        <div>
          <p class="text-base font-bold tracking-wide text-gray-900">
            HOTEL IS ALSO AVAILABLE ON
          </p>
          <div class="flex items-center gap-1 px-2">
            <a href="#" target="_blank" class="w-full min-w-xl">
              <img
                src="https://mcqmate.com/public/images/icons/playstore.svg"
                alt="Playstore Button"
                class="h-10"
              />
            </a>
            <a
              class="w-full min-w-xl"
              target="_blank"
              href="https://www.youtube.com/channel/UCEX_o2CCJFxN9hCWu3kvURw"
            >
              <img
                src="https://mcqmate.com/public/images/icons/youtube.svg"
                alt="Youtube Button"
                class="h-28"
              />
            </a>
          </div>
          <p class="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div class="flex">
            <p class="mr-1 text-gray-800">Email:</p>
            <a href="#" title="send email">
              midasreegency1131@gmail.com
            </a>
          </div>
          <div class="flex">
            <p class="mr-1 text-gray-800">Call Us:</p>
            <a href="#" title="Call us">
              +918788233054
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p class="text-sm text-gray-600">
          © Copyright 2024 Hotel Midas Reegency. All rights reserved.
        </p>
        <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link
              to="/PrivacyCookiesPolicy"
              class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy &amp; Cookies Policy
            </Link>
          </li>
          <li>
            <Link
              to="/disclaimer"
              class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Disclaimer
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
