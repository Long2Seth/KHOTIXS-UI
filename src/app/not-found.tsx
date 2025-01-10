"use client";

import React from "react";
import "./globals.css";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {RiArrowGoBackLine} from "react-icons/ri";
import {motion} from 'framer-motion';

const NotFoundPage = () => {

    const router = useRouter();

    return (
        <div className="h-screen items-center flex flex-col lg:flex-row justify-center sm:gap-5 lg:gap-16">
            <motion.div
                className="lg:w-[500px] lg:h-[500px] object-cover"
                initial={{y: 10}}
                animate={{y: [0, 10, 0]}}
                transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
            >
                <Image
                    src="/Page-not-Found.png"
                    alt="404"
                    width={500}
                    height={500}
                    priority
                />
            </motion.div>
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-4xl xl:text-[60px] font-bold text-center text-label-text-secondary">
                    Oops !
                </h1>
                <p className="text-center text-lg text-gray-500">
                    We couldn`t find the page you we looking for</p>
                <Button
                    size="sm"
                    className="bg-primary-color text-white rounded-[6px] hover:bg-primary-color/80"
                    onClick={() => router.push("/")}
                >
                    <RiArrowGoBackLine/> Back Home
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;