'use client';
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {IoMdMore} from "react-icons/io";
import React from "react";
import {useRouter} from "next/navigation";
import {BiDetail} from "react-icons/bi";
import {LiaEdit} from "react-icons/lia";
import {AiOutlineDelete} from "react-icons/ai";
import {IoIosPower} from "react-icons/io";

type RouteType = {
    url: string;
    name: string;
    icon: JSX.Element;
}

const routes: RouteType[] = [
    {url: "/organizer/events/detail-event", name: "Detail Event", icon: <BiDetail className="h-5 w-5"/>},
    {url: "/organizer/events/edit-event", name: "Edit Event", icon: <LiaEdit className="h-5 w-5"/>},
    {url: "", name: "Disable", icon: <IoIosPower className="h-5 w-5"/>},
    {url: "", name: "Delete Event", icon: <AiOutlineDelete className="h-5 w-5"/>},
];

// type ActionEventComponentProps = {
//     event: {
//         id: string;
//         eventName: string;
//         createBy: string;
//         startDate: string;
//         endDate: string;
//         location: string;
//         status: string;
//         image: string;
//         description: string;
//     }
// }

export function ActionEventComponent() {
    const router = useRouter();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button><IoMdMore className="w-5 h-5 text-gray-500 cursor-pointer"/></Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto">
                <div className="flex flex-col p-2 w-full">
                    {routes.map((route) => (
                        <div
                            key={route.name}
                            onClick={() => router.push(route.url)}
                            className="text-sm text-label-free text-start hover:bg-gray-100 rounded-[6px] flex cursor-pointer items-center dark:text-dark-description-color dark:hover:text-primary-color-text p-1"
                        >
                            <span className={
                                route.name === "Detail Event" ? "text-label-free" :
                                    route.name === "Edit Event" || route.name === "Disable" ? "text-yellow-500" :
                                        route.name === "Delete Event" ? "text-red-500" : ""
                            }>
                                <div className=" flex">
                                    {route.icon}
                                    <p className="w-[100px] px-1">{route.name}</p>
                                </div>

                            </span>

                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}