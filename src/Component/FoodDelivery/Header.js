import React from 'react'

const Header = () => {
  return (
    <>
    <header class='border-b bg-white font-sans min-h-[60px] px-10 py-6 relative'>
    <div class='flex flex-wrap items-center max-lg:gap-y-11 max-sm:gap-x-4'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-40' />
      </a>
      <div class='flex items-center ml-auto lg:order-1'>
        <span class="relative mr-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px"
            class="cursor-pointer fill-[#000] hover:fill-[#007bff] inline-block" viewBox="0 0 64 64">
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000" />
          </svg>
          <span class="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
        </span>
        <span class="relative mr-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
            class="cursor-pointer fill-[#000] hover:fill-[#007bff] inline-block" viewBox="0 0 512 512">
            <path
              d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
              data-original="#000000"></path>
          </svg>
          <span class="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer fill-[#333] hover:fill-[#077bff]"
            viewBox="0 0 512 512">
            <path
              d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
              data-original="#000000" />
          </svg>
        <button id="toggle" class='lg:hidden ml-7'>
          <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <ul id="collapseMenu"
        class='lg:!flex max-lg:hidden max-lg:w-full lg:space-x-3 max-lg:space-y-3 lg:absolute lg:left-1/2 lg:-translate-x-1/2'>
        <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-[15px] text-[#007bff] block font-bold'>All Categorey</a></li>
        <li class='group max-lg:border-b max-lg:py-2 relative'>
          <a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 font-bold text-[15px] lg:hover:fill-[#007bff] block'>
            Non-Veg
          </a>
        </li>
        <li class='group max-lg:border-b max-lg:py-2 relative'>
          <a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 font-bold text-[15px] lg:hover:fill-[#007bff] block'>
            Non-Veg
          </a>
        </li>
        <li class='group max-lg:border-b max-lg:py-2 relative'>
          <a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 font-bold text-[15px] lg:hover:fill-[#007bff] block'>
            Pure-Veg
          </a>
        </li>
        <li class='group max-lg:border-b max-lg:py-2 relative'>
          <a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 font-bold text-[15px] lg:hover:fill-[#007bff] block'>
            Roti / Breads
          </a>
        </li>
        <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 font-bold text-[15px] block'>Rice</a></li>
        <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 font-bold text-[15px] block'>Starters</a></li>
        <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 font-bold text-[15px] block'>Add-On</a></li>
        <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 font-bold text-[15px] block'>Salate</a></li>
      </ul>
    </div>
    <div
      class="bg-gray-100 border border-transparent flex px-6 rounded-full h-9 lg:w-2/4 mt-3 mx-auto max-lg:mt-6">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
        class="fill-gray-600 mr-3 rotate-10">
        <path
          d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
        </path>
      </svg>
      <input type='text' placeholder='Search...'
        class="w-full outline-none border-none bg-transparent text-gray-600 font-semibold text-[15px]" />
    </div>
  </header>
    </>
  )
}

export default Header







