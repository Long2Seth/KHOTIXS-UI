import React from "react";
import {GrLocation} from "react-icons/gr";
import {FiPhone} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";

export default function About() {
    return (
        <main className="flex flex-col dark:bg-khotixs-background-dark ">
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
            <section className="w-full h-auto my-20 px-[140px] text-primary-color-text dark:text-secondary-color-text">
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
                                    <h1 className=" text-primary-color-text text-2xl font-medium dark:text-secondary-color-text ">
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
                                    <h1 className=" text-primary-color-text text-2xl font-medium dark:text-secondary-color-text ">Phone</h1>
                                    <p className=" text-gray-400 text-lg">(+855) 95 990 910</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <HiOutlineMail size={40}/>
                                <div className=" text-start ">
                                    <h1 className=" text-primary-color-text text-2xl font-medium dark:text-secondary-color-text ">Email</h1>
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
                        <div className=" p-20 text-start rounded-[5px] bg-white dark:bg-khotixs-background-dark dark:border-[1px] dark:border-white ">
                            <form className="flex flex-col gap-4 ">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text ">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Name"
                                        className="p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-1 text-lg  focus:ring-primary-color dark:bg-khotixs-background-white"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text ">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        className="p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-1 text-lg  focus:ring-primary-color dark:bg-khotixs-background-white"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="message" className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text ">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        placeholder="Message"

                                        className="p-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-1 text-lg  focus:ring-primary-color dark:bg-khotixs-background-white"
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


            {/* Our Location Section */}
            <section className="w-full my-20 px-[140px] text-primary-color-text dark:text-secondary-color-text">
                <h1 className="text-5xl font-semibold uppercase">OUR LOCATION</h1>
                <div className="mt-10 ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6314046843904!2d104.89920651123596!3d11.578259843843679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1sen!2sus!4v1733450750727!5m2!1sen!2sus"
                        style={{ border: 0 , height: '600px' , width: '100%' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>

        </main>
    );
}