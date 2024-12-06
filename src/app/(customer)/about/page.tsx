import * as React from "react";
import {MdRemoveRedEye} from "react-icons/md";
import {LuTarget} from "react-icons/lu";
import Image from "next/image";
import {IoLogoGithub} from "react-icons/io5";
import {FaFacebook} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {AiFillGoogleCircle} from "react-icons/ai";


export default function About() {
    return (
        <main className=" flex flex-col ">
            {/* Hero section*/}
            <section className=" relative h-[600px] w-full ">
                <div className=" absolute bg-primary-color h-[600px] w-[520px] rounded-bl-[100%] left-[-200px] ">
                </div>
                <div className=" absolute bg-primary-color h-[600px] w-[1600px] left-[300px] ">
                    <h1 className="  mt-40 z-10 text-white text-5xl font-semibold ">
                        ABOUT US
                    </h1>
                    <p className=" text-xl max-w-[600px] text-white my-10  ">
                        We’re here to help! Whether you have a question about your booking, need assistance, or want to
                        share feedback, the KHOTIXS team is ready to assist you.
                    </p>
                </div>
            </section>
            <section className=" w-full h-auto my-20  px-[140px] text-primary-color-text dark:text-secondary-color-text   ">
                <section className=" flex flex-col justify-center items-center gap-[60px] ">
                    <div className=" flex flex-col justify-center items-center ">
                        <h1 className=" text-5xl font-semibold uppercase ">
                            Welcome To Our Website
                        </h1>
                        <hr className="w-[160px] h-2 bg-primary-color dark:bg-white "/>
                    </div>
                    <div className=" flex flex-col justify-center items-center gap-10 ">
                        <h1 className=" text-5xl font-semibold uppercase ">
                            KHOTIXS
                        </h1>
                        <p className=" text-center max-w-[1000px] text-lg text-black dark:text-gray-200 ">
                            Welcome to KHOTIXS – Cambodia’s trusted platform for effortless ticket booking and event
                            management. Whether you’re looking to book tickets for concerts, sports events, or cultural
                            activities, or you’re an event organizer seeking to reach a broader audience, KHOTIXS is
                            here to bridge the gap. Our platform is designed to make the entire booking process simple,
                            fast, and reliable. With KHOTIXS, you can explore upcoming events, secure tickets, and
                            connect with the latest happenings in Cambodia,
                            all in one place.
                        </p>
                    </div>

                </section>

            </section>


            <section className=" w-full h-auto my-20  px-[140px] text-primary-color-text dark:text-secondary-color-text   ">

                <section className=" grid grid-cols-2 justify-between w-full gap-5  ">

                    <section
                        className=" bg-white text-center max-w-full flex flex-col justify-center px-10 py-10 rounded-[5px] gap-y-5 dark:bg-secondary-color ">
                        {/*Icon*/}
                        <LuTarget className=" w-full h-[120px] text-primary-color-text dark:text-secondary-color-text  "/>

                        {/*Title*/}
                        <h1 className=" text-3xl font-semibold uppercase ">
                            Our Mission
                        </h1>

                        {/* Description*/}
                        <p className=" text-center max-w-[1000px] text-lg text-black dark:text-secondary-color-text  ">
                            Our mission is to empower individuals and organizations by providing a seamless,
                            user-friendly
                            ticketing solution that connects event organizers with their audiences. We aim to make every
                            event accessible, every booking easy, and every experience unforgettable.
                        </p>
                    </section>
                    <section
                        className=" bg-white text-center max-w-full flex flex-col justify-center px-10 py-10 rounded-[5px] gap-y-5 dark:bg-secondary-color  ">
                        {/* Icon */}
                        <MdRemoveRedEye className=" w-full h-[120px] text-primary-color-text dark:text-secondary-color-text  "/>

                        {/* Tittle */}
                        <h1 className=" text-3xl font-semibold uppercase ">
                            OUR VISION
                        </h1>

                        {/* Description */}
                        <p className=" text-center max-w-[1000px] text-lg text-black dark:text-secondary-color-text ">
                            Our vision is to become the leading online ticketing platform in Cambodia, fostering a
                            thriving
                            events ecosystem where people can discover, participate in, and celebrate the vibrant
                            culture
                            and creativity of the nation. We envision a future where KHOTIXXS is the go-to platform for
                            both
                            customers and event organizers across the region.
                        </p>
                    </section>
                </section>

            </section>


            <section className=" w-full h-auto my-20  px-[140px] text-primary-color-text dark:text-secondary-color-text   ">

                <h1 className=" text-5xl font-semibold text-center mb-20 "> OUR MENTOR </h1>

                <section className=" grid grid-cols-2 justify-center w-full gap-5  ">

                    <div className=" flex gap-[5px] justify-center ">
                        <Image src="/cher-chhaya.png" width={200} height={200} className=" rounded-[5px] " alt=" "/>
                        <div className=" flex flex-col text-center max-w-[250px] ">
                            <p className=" text-3xl font-semibold">CHAN CHHAYA</p>
                            <ul className=" flex flex-col gap-2">
                                <a href="https://github.com/it-chhaya" target="_blank">
                                    <li className=" flex items-center ">
                                        <IoLogoGithub className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="https://web.facebook.com/chhayadevkh" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaFacebook className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://web.facebook.com/chhayadevkh
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaTelegram className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <AiFillGoogleCircle className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>

                    <div className=" flex gap-[5px] justify-center ">
                        <Image src="/cher-pheng.png" width={200} height={200} className=" rounded-[5px] " alt=" "/>
                        <div className=" flex flex-col text-center max-w-[350px] ">
                            <p className=" text-3xl font-semibold">KIM CHANSOKPHENG</p>
                            <ul className=" flex flex-col gap-2">
                                <a href="https://github.com/it-chhaya" target="_blank">
                                    <li className=" flex items-center ">
                                        <IoLogoGithub className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[280px] line-clamp-1  dark:bg-secondary-color dark:text-gray-200  ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="https://web.facebook.com/chhayadevkh" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaFacebook className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[280px] line-clamp-1  dark:bg-secondary-color dark:text-gray-200  ">
                                            https://web.facebook.com/chhayadevkh
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaTelegram className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[280px] line-clamp-1  dark:bg-secondary-color dark:text-gray-200  ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <AiFillGoogleCircle className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[280px] line-clamp-1  dark:bg-secondary-color dark:text-gray-200  ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </section>

            </section>


            <section className=" w-full h-auto my-20  px-[140px] text-primary-color-text dark:text-secondary-color-text   ">

                <h1 className=" text-5xl font-semibold text-center mb-20 "> OUR MEMBER </h1>

                <section className=" grid grid-cols-3 justify-center w-full gap-5  gap-y-20 ">

                    <div className=" flex gap-[5px] justify-center ">
                        <Image src="/cher-chhaya.png" width={200} height={200} className=" rounded-[5px] " alt=" "/>
                        <div className=" flex flex-col text-center max-w-[250px] ">
                            <p className=" text-3xl font-semibold">CHAN CHHAYA</p>
                            <ul className=" flex flex-col gap-2">
                                <a href="https://github.com/it-chhaya" target="_blank">
                                    <li className=" flex items-center ">
                                        <IoLogoGithub className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="https://web.facebook.com/chhayadevkh" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaFacebook className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://web.facebook.com/chhayadevkh
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaTelegram className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <AiFillGoogleCircle className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>

                    <div className=" flex gap-[5px] justify-center ">
                        <Image src="/cher-chhaya.png" width={200} height={200} className=" rounded-[5px] " alt=" "/>
                        <div className=" flex flex-col text-center max-w-[250px] ">
                            <p className=" text-3xl font-semibold">CHAN CHHAYA</p>
                            <ul className=" flex flex-col gap-2">
                                <a href="https://github.com/it-chhaya" target="_blank">
                                    <li className=" flex items-center ">
                                        <IoLogoGithub className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="https://web.facebook.com/chhayadevkh" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaFacebook className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://web.facebook.com/chhayadevkh
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaTelegram className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <AiFillGoogleCircle className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>

                    <div className=" flex gap-[5px] justify-center ">
                        <Image src="/cher-pheng.png" width={200} height={200} className=" rounded-[5px] " alt=" "/>
                        <div className=" flex flex-col text-center max-w-[350px] ">
                            <p className=" text-3xl font-semibold">KIM CHANSOKPHENG</p>
                            <ul className=" flex flex-col gap-2">
                                <a href="https://github.com/it-chhaya" target="_blank">
                                    <li className=" flex items-center ">
                                        <IoLogoGithub className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[280px] line-clamp-1  dark:bg-secondary-color dark:text-gray-200  ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="https://web.facebook.com/chhayadevkh" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaFacebook className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[280px] line-clamp-1  dark:bg-secondary-color dark:text-gray-200  ">
                                            https://web.facebook.com/chhayadevkh
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaTelegram className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[280px] line-clamp-1  dark:bg-secondary-color dark:text-gray-200  ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <AiFillGoogleCircle className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[280px] line-clamp-1  dark:bg-secondary-color dark:text-gray-200  ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>

                    <div className=" flex gap-[5px] justify-center ">
                        <Image src="/cher-chhaya.png" width={200} height={200} className=" rounded-[5px] " alt=" "/>
                        <div className=" flex flex-col text-center max-w-[250px] ">
                            <p className=" text-3xl font-semibold">CHAN CHHAYA</p>
                            <ul className=" flex flex-col gap-2">
                                <a href="https://github.com/it-chhaya" target="_blank">
                                    <li className=" flex items-center ">
                                        <IoLogoGithub className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="https://web.facebook.com/chhayadevkh" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaFacebook className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://web.facebook.com/chhayadevkh
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaTelegram className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <AiFillGoogleCircle className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>

                    <div className=" flex gap-[5px] justify-center ">
                        <Image src="/cher-chhaya.png" width={200} height={200} className=" rounded-[5px] " alt=" "/>
                        <div className=" flex flex-col text-center max-w-[250px] ">
                            <p className=" text-3xl font-semibold">CHAN CHHAYA</p>
                            <ul className=" flex flex-col gap-2">
                                <a href="https://github.com/it-chhaya" target="_blank">
                                    <li className=" flex items-center ">
                                        <IoLogoGithub className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="https://web.facebook.com/chhayadevkh" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaFacebook className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://web.facebook.com/chhayadevkh
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaTelegram className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <AiFillGoogleCircle className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[210px] line-clamp-1 dark:bg-secondary-color dark:text-gray-200 ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>

                    <div className=" flex gap-[5px] justify-center ">
                        <Image src="/cher-pheng.png" width={200} height={200} className=" rounded-[5px] " alt=" "/>
                        <div className=" flex flex-col text-center max-w-[350px] ">
                            <p className=" text-3xl font-semibold">KIM CHANSOKPHENG</p>
                            <ul className=" flex flex-col gap-2">
                                <a href="https://github.com/it-chhaya" target="_blank">
                                    <li className=" flex items-center ">
                                        <IoLogoGithub className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[280px] line-clamp-1  dark:bg-secondary-color dark:text-gray-200  ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="https://web.facebook.com/chhayadevkh" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaFacebook className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[280px] line-clamp-1  dark:bg-secondary-color dark:text-gray-200  ">
                                            https://web.facebook.com/chhayadevkh
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <FaTelegram className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[280px] line-clamp-1  dark:bg-secondary-color dark:text-gray-200  ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                                <a href="#" target="_blank">
                                    <li className=" flex items-center ">
                                        <AiFillGoogleCircle className=" w-[35px] h-[35px] "/>
                                        <p className=" bg-gray-200 px-1 rounded-[5px] max-w-[280px] line-clamp-1  dark:bg-secondary-color dark:text-gray-200  ">
                                            https://github.com/it-chhaya
                                        </p>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>


                </section>

            </section>


        </main>
    )
}