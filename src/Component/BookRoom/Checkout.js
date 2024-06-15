import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { PostApi } from "../Api/api";

const Checkout = () => {
  const navigate = useNavigate();
  const roomData = useSelector((state) => state.roomdata.roomData);
  const roomId = useSelector((state) => state.roomdata.roomId);
  const room = roomData.find((room) => room.roomId === roomId.roomId);
  const [error, setError]= useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const tax = 199;
  const totalofRoom = room.price + tax;
  console.log("room data", room);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const originalDateStringForCheckIn = useSelector(
    (state) => state.roomdata.checkInDate
  );
  const originalDateStringForCheckOut = useSelector(
    (state) => state.roomdata.checkOutDate
  );
  console.log(
    "out date",
    useSelector((state) => state.roomdata.checkOutDate)
  );
  // Ensure originalDateStringForCheckIn is a valid date object
  const checkInDateObject = new Date(originalDateStringForCheckIn);
  const checkOutDateObject = new Date(originalDateStringForCheckOut); // Convert date to a string format
  const checkInDateString = checkInDateObject.toDateString(); // or use another format if needed
  const checkOutDateString = checkOutDateObject.toDateString();
  // Split the string if needed
  const partsInDate = checkInDateString.split(" ");
  const partsOutDate = checkOutDateString.split(" ");
  const checkInDate = partsInDate.slice(0, 6).join(" ");
  const checkOutDate = partsOutDate.slice(0, 6).join(" ");

  const differenceInTime =
    checkOutDateObject.getTime() - checkInDateObject.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  const total = totalofRoom * differenceInDays;

  const handleChange = (e)=>{
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({...formData,
      [name]: value,
    });
  };

   const handlePayment = async (e) => {
    e.preventDefault();
    if(formData.name && formData.address && formData.email && formData.phone){
      setError(false)
      //  const data = await PostApi("/roombooked", {
      //           userId: "1",
      //           checkInDate: checkInDate,
      //           checkOutDate: checkOutDate,
      //           room: room,
      //           numberOfDays: differenceInDays,
      //           total: total,
      //           customer: formData.name,
      //           email: formData.email,
      //           address: formData.address,
      //           phone: formData.phone
      //         });
      //         console.log('checking',data);
      try {
        const paymentResponse = await PostApi("/roombooking", {
          total: "1",
        });
        if (!paymentResponse.data) {
          navigate("/login");
        }
        if (paymentResponse.data.orderDetails.status === "created") {
          var option = {
            key: "rzp_live_miuq50dflMActu",
            amount: total * 100,
            currency: "INR",
            name: "Hotel Midas Reegency",
            description: "Test Transaction",
            image:
              "http://localhost:3000/static/media/logo.509352b434500fd83abe.jpg",
            order_id: paymentResponse.data.orderDetails.id,
            handler: async function (response) {
              alert("Payment successful");
              const data = await PostApi("/roombooked", {
           userId: "1",
                checkInDate: checkInDate,
                checkOutDate: checkOutDate,
                room: room,
                numberOfDays: differenceInDays,
                total: total,
                customer: formData.name,
                email: formData.email,
                address: formData.address,
                phone: formData.phone
              });
              console.log("booked", data);
              alert(response.razorpay_payment_id);
              alert(response.razorpay_order_id);
              alert(response.razorpay_signature);
            },
            modal: {
              ondismiss: function () {
                alert("Payment was not completed, please try again.");
              },
            },
            prefill: {
              name: "Hotel Midas Reegency",
              email: "midasreegency1131@gmail.com",
              contact: "918788233054",
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#050C9C",
            },
          };
          const rzp = new window.Razorpay(option);
          console.log("rzp", rzp);
          rzp.open();
        }
      } catch (error) {
        console.log(error);
      }
    }else{
      setError(true)
    }
    
  };

  return (
    <>
      <section className="bg-gray-900 py-8 antialiased dark:bg-gray-900">
        <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
            <li className="after:border-1 flex items-center text-green-500 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <Link to="/bookroom">
                <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                  <svg
                    aria-hidden="true"
                    className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    />
                  </svg>
                  Select Room
                </span>
              </Link>
            </li>
            <li className="after:border-1 flex items-center  text-green-500  after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex  items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                <svg
                  aria-hidden="true"
                  className="me-2 h-4 w-5 sm:h-5 sm:w-5"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  />
                </svg>
                Room booking
              </span>
            </li>
            <li className="flex shrink-0 items-center">
              <svg
                aria-hidden="true"
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              Payment
            </li>
          </ol>
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Room Booking
                </h2>
                {
                  error && ( <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
                  </div>) 
                }
               
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="your_name"
                    >
                      {" "}
                      Your name{" "}
                    </label>
                    <input
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      id="your_name"
                      placeholder="Enter you name"
                      onChange={handleChange}
                      value={formData.name}
                      name="name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="your_email"
                    >
                      {" "}
                      Your email*{" "}
                    </label>
                    <input
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      id="your_email"
                      placeholder="name@flowbite.com"
                      onChange={handleChange}
                      value={formData.email}
                      type="email"
                      name="email"
                    />
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="phone-input-3"
                    >
                      {" "}
                      Phone Number*{" "}
                    </label>
                    <div className="flex items-center">
                      <button
                        className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        data-dropdown-toggle="dropdown-phone-3"
                        id="dropdown-phone-button-3"
                        type="button"
                      >
                        +91
                      </button>

                      <div className="relative w-full">
                        <input
                          className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                          id="phone-input"
                          placeholder="1234567890"
                          onChange={handleChange}
                          value={formData.phone}
                          pattern="[0-9]{10}"
                          name="phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="company_name"
                    >
                      {" "}
                      Your Address{" "}
                    </label>
                    <input
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      id="company_name"
                      placeholder="Add your address"
                      onChange={handleChange}
                      value={formData.address}
                      type="text"
                      name="address"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div className="flow-root">
                <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Room Details
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      <h1>{room.roomType}</h1>
                      <h6 className="text-xs">{room.discription}</h6>
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Check-In Date
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      {`${checkInDate}`}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Check-Out Date
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      {`${checkOutDate}`}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Subtotal
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      Rs {room.price} .00
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-500">0</dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Number of Days
                    </dt>
                    <dd className="text-base font-medium text-green-500">
                      {differenceInDays}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      Rs {tax}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      Rs {total}.00
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="space-y-3">
                <button
                  onClick={handlePayment}
                  className="flex w-full dark:bg-blue-700 items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type="submit"
                >
                  Proceed to Payment
                </button>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Payment Policies
                  <Link
                    to="/"
                    className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                    href="#"
                    title=""
                  >
                    Safe and Secure
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Checkout;
