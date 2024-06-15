import React from "react";

const Disclaimer = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Disclaimer
            </h2>
            <p class="mb-4">
              The information provided on the Hotel Midas Regency website is for
              general informational purposes only. While we endeavor to keep the
              information accurate and up to date, we make no representations or
              warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability, or availability
              of the information, products, services, or related graphics
              contained on the website for any purpose. Any reliance you place
              on such information is strictly at your own risk. We are not
              liable for any loss or damage, including but not limited to
              indirect or consequential loss or damage, or any loss or damage
              whatsoever arising from loss of data or profits
            </p>
            {/* <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p> */}
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Disclaimer;
