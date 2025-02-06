'use client'

import Image from "next/image";

export default function LoadingPage() {
    return (
        <div className="fixed inset-0 z-40 flex justify-center items-center bg-black bg-opacity-90 backdrop-blur-sm">
            <Image width={100} height={100}  src="/loading.gif" alt="Loading..." className="w-16 h-16" />
        </div>
    )
}