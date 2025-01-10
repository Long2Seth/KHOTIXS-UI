"use client";

import React from "react";
import "./globals.css";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {motion} from 'framer-motion';

const NotFoundPage = () => {
    return (
        <div className="h-screen items-center flex flex-col md:flex-row justify-center gap-4 lg:gap-16">
            <motion.div
                className="lg:w-[500px] lg:h-[500px] px-5 object-cover"
                initial={{y: 10}}
                animate={{y: [0, 10, 0]}}
                transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
            >
                <Image
                    src="/No-connection.png"
                    alt="404"
                    width={500}
                    height={500}
                    priority
                />
            </motion.div>
            <div className="flex flex-col px-5 gap-4">
                <h1 className="text-4xl xl:text-[60px] font-bold text-label-text-secondary">
                    No Internet
                </h1>
                <p className="mt-2 text-lg text-gray-500">
                    Oops! It looks like you`re offline.
                </p>
                <p className="text-lg text-gray-500">
                    Please check your internet connection and try again</p>
                <Button
                    size="sm"
                    className="w-32 bg-primary-color text-white rounded-[6px] hover:bg-primary-color/80 uppercase"
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;