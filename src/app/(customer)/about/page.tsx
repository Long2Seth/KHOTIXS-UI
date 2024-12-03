import * as React from "react";

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
            <section className=" w-full h-[200px] my-20  px-[140px] ">
                <section className=" flex flex-col justify-center items-center ">
                    <h1 className=" text-5xl font-semibold uppercase ">
                        Welcome To Our Website
                    </h1>
                    <hr className="w-[120px] h-2 bg-gray-400 "/>
                </section>

            </section>
        </main>
    )
}