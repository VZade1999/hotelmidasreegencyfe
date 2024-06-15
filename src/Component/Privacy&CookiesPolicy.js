import React from "react";
import {

  ServerIcon,
} from "@heroicons/react/20/solid";

const PrivacyCookiesPolicy = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Privacy & Cookies Policy
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We keep our data secure
              </h1>
              {/* <p className="mt-6 text-xl leading-8 text-gray-700">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
              eget aliquam. Quisque id at vitae feugiat egestas.
            </p> */}
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://whatsapp-media-library.s3.ap-south-1.amazonaws.com/IMAGE/6430fda23ef1010eabaa10c1/475354_Screenshot%2020240325%20at%205.47.19%20AM.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                At Hotel Midas Regency, the privacy and security of our guests
                and visitors are of utmost importance to us. This Privacy &
                Cookies Policy outlines how we collect, use, and protect your
                personal information when you visit our website or use our
                services.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Information We Collect:
                    </strong>{" "}
                    Personal Information: When you make a reservation, sign up
                    for our newsletter, or interact with our website, we may
                    collect personal information such as your name, email
                    address, phone number, and payment details. Usage Data: We
                    may collect information about how you interact with our
                    website, including your IP address, browser type, pages
                    visited, and other analytics data.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Use of Information:
                    </strong>{" "}
                    Personalization: We use the information collected to
                    personalize your experience, provide relevant content and
                    offers, and improve our services. Communication: We may use
                    your contact information to send you important updates,
                    promotional offers, and newsletters. Transactional Purposes:
                    We may use your information to process reservations,
                    payments, and other transactions.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Cookies:
                    </strong>{" "}
                    We use cookies and similar tracking technologies to enhance
                    your browsing experience, analyze website traffic, and
                    personalize content. You can manage your cookie preferences
                    through your browser settings. However, please note that
                    disabling cookies may affect certain features and
                    functionality of our website.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Data Security:
                    </strong>{" "}
                    We implement appropriate security measures to protect your
                    personal information against unauthorized access,
                    disclosure, alteration, or destruction. We restrict access
                    to your personal information to authorized personnel only.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Third-Party Links:
                    </strong>{" "}
                    Our website may contain links to third-party websites or
                    services. Please note that we are not responsible for the
                    privacy practices or content of these third-party sites.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Updates to Privacy Policy:
                    </strong>{" "}
                    We may update this Privacy & Cookies Policy from time to
                    time. Any changes will be posted on this page, and we
                    encourage you to review the policy periodically.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                By using our website or services, you consent to the collection
                and use of your information as described in this Privacy &
                Cookies Policy. If you have any questions or concerns about our
                privacy practices, please contact us
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
               You are safe with us.
              </h2>
              <p className="mt-6">
              Rest assured, your data is in safe hands with us. We prioritize the security and privacy of our customers' information and have implemented robust measures to ensure its protection. If you have any concerns or questions about the security of your data, please feel free to reach out to us. We're here to help and ensure your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyCookiesPolicy;
