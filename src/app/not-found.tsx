"use client";

import React from "react";
import "./globals.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {

    const router = useRouter();

    return (
        <div className="h-screen items-center flex flex-col justify-center gap-[20px]">
            <Image
                src={`https://i.ibb.co/G9DC8S0/404-2.png`}
                alt="404"
                width={500}
                height={500}
            />
            <Button
                className="rounded-md bg-blue-800 text-white hover:text-black hover:bg-blue-300"
                onClick={() => router.push("/")}
            >
                Back Home
            </Button>
        </div>
    );
};

export default NotFoundPage;
