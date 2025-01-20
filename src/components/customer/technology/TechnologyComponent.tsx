// 'use client'
// import {generalData} from "@/lib/customer/upcomingData";
// import {CardComponent} from "@/components/customer/card/CardComponent";
// import { useEffect, useState } from "react";
// import {CardEventSkeletonComponent} from "@/components/customer/card/CardEventSkeletonComponent";
// import InfoCard from "@/components/customer/card/InfoCard";
//
// export default function TechnologyComponent() {
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
//                 }
//         </>
//     )
// }