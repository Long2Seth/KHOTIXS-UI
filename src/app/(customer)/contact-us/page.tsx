import React from "react";
import {GrLocation} from "react-icons/gr";
import {FiPhone} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";

export default function About() {
    return (
        <main className="flex flex-col">
            {/* Hero section */}
            <section className="relative h-[600px] w-full">
                <div className="absolute bg-primary-color h-[600px] w-[520px] rounded-bl-[100%] left-[-200px]"></div>
                <div className="absolute bg-primary-color h-[600px] w-[1600px] left-[300px]">
                    <h1 className="mt-40 z-10 text-white text-5xl font-semibold">
                        CONTACT US
                    </h1>
                    <p className="text-xl max-w-[600px] text-white my-10">
                        We&rsquo;re here to help! Whether you have a question about your booking, need assistance, or
                        want to share feedback, the KHOTIXS team is ready to assist you.
                    </p>
                </div>
            </section>

            {/* Contact Info and Form */}
            <section className="w-full h-auto my-20 px-[140px] text-primary-color">
                <div className="flex gap-[100px] w-full ">
                    {/* Left Section: Contact Information */}
                    <div className="flex flex-col gap-8 text-center">
                        <h1 className="text-5xl font-semibold uppercase">OUR CONTACT</h1>
                        <p className="text-lg text-gray-400 text-start">
                            Looking for more information or need assistance? Our friendly team is here to help. Reach
                            out to us by filling out the contact form below. We&apos;ll be in touch shortly.
                        </p>
                        <div className="flex flex-col gap-10 text-lg">

                            <div className="flex items-center gap-4">
                                <GrLocation size={40}/>
                                <div className=" text-start ">
                                    <h1 className=" text-black text-2xl font-medium">
                                        Location
                                    </h1>
                                    <p className=" text-lg text-gray-400">
                                        No. 24, St 562, Sangkat Boeung Kak I, Khan Toul Kork, Phnom Penh.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <FiPhone size={40}/>
                                <div className=" text-start">
                                    <h1 className=" text-black text-2xl font-medium">Phone</h1>
                                    <p className=" text-gray-400 text-lg">(+855) 95 990 910</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <HiOutlineMail size={40}/>
                                <div className=" text-start ">
                                    <h1 className=" text-black text-2xl font-medium">Email</h1>
                                    <p className=" text-gray-400 text-lg">inform.service@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Contact Form */}
                    <div className="flex flex-col gap-8 w-full  text-center ">
                        <h1 className="text-5xl font-semibold uppercase">WRITE A MESSAGE</h1>
                        <p className="text-lg text-gray-400 text-start ">
                            Please use this space to share your message, questions, or specific requests. We&apos;ll do
                            our best to respond promptly.
                        </p>
                        <div className=" p-20 text-start rounded-[5px] bg-white ">
                            <form className="flex flex-col gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-lg font-medium">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Name"
                                        className="p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-1 text-lg  focus:ring-primary-color"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-lg font-medium">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        className="p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-1 text-lg  focus:ring-primary-color"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="message" className="text-lg font-medium">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        placeholder="Message"

                                        className="p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-1 text-lg  focus:ring-primary-color"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-primary-color text-white text-lg py-2 px-4 rounded-[5px] hover:bg-primary-color-dark transition"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <section className=" w-full h-auto my-20  px-[140px] text-primary-color  ">

                <section className=" grid grid-cols-2 justify-between w-full gap-5  ">

                    <h1  className=" text-5xl font-semibold uppercase" >OUR LOCATION</h1>

                </section>

            </section>

        </main>
    );
}