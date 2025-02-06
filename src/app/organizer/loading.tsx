'use client'

import Image from "next/image";

export default function LoadingPage() {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
            <Image width={100} height={100}  src="/loading.gif" alt="Loading..." className="w-40 h-auto" />
        </div>
    )
}