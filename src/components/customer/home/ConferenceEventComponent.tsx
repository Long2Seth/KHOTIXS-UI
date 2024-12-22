// 'use client'
// import {generalData} from "@/lib/customer/upcomingData";
// import {CardComponent} from "@/components/customer/card/CardComponent";
// import { useEffect, useState } from "react";
// import {CardEventSkeletonComponent} from "@/components/customer/card/CardEventSkeletonComponent";
//
// export default function ConferenceEventComponent() {
//     const [isLoading, setIsLoading] = useState(true);
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsLoading(false);
//         }, 2000);
//         return () => clearTimeout(timer);
//     }, []);
//     return (
//         <>
//             {isLoading ? <CardEventSkeletonComponent/> :
//               }
//         </>
//
//     )
// }