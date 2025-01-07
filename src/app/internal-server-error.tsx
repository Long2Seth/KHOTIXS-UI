"use client";

import React from "react";
import "./globals.css";
import Image from "next/image";
import {motion} from 'framer-motion';

const NotFoundPage = () => {
    return (
        <div className="h-screen items-center flex flex-col md:flex-row justify-center gap-4 lg:gap-16">
            <motion.div className="lg:w-[500px] lg:h-[500px] px-5 object-cover"
                        initial={{y: 10}}
                        animate={{y: [0, 10, 0]}} transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
            >
                <Image src="/Internal-Server-Error.png"
                       alt="404"
                       width={500}
                       height={500}
                       priority
                />
            </motion.div>

        </div>
    );
};

export default NotFoundPage;