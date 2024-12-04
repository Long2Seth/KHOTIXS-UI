'use client'
import Link from "next/link"
import Image from 'next/image';
import {Button} from "@/components/ui/button"
import {ModeToggle} from "@/components/ui/modeToggle";
import {FaArrowRightLong} from "react-icons/fa6";
import {CiBullhorn} from "react-icons/ci";
import {IoSearch} from "react-icons/io5";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import * as React from "react";
import {NavigationMenuDemo} from "@/components/customer/NavigationMenuDemo";

export default function NavbarComponent() {
    const [date, setDate] = React.useState<Date>();
    const [selectedLocation, setSelectedLocation] = React.useState<string | undefined>();

    return (
        <nav className=" w-full top-[-60px] sticky z-50 bg-white flex flex-col dark:bg-gray-950/90 ">
            <section className="w-full h-[60px] bg-white py-[10px] px-[140px] flex  justify-center gap-5">
                <CiBullhorn className="  w-[40px] p-[8px] rounded-[50%] text-gray-400 bg-gray-200  h-full "/>
                <p className=" font-semibold flex items-center">Do you organize events? </p>
                <Button className=" font-semibold text-white hover:bg-primary-color bg-primary-color rounded-[5px] ">
                    Become A Partner <span><FaArrowRightLong/></span>
                </Button>

            </section>
            <section className="w-full py-[15px] px-[140px] shadow-inner ">
                <div className="flex justify-between h-14 items-center mx-auto">
                    {/* KHOTIXS LOGO */}
                    <Link href="#" className="flex items-center">
                        <Image width={60} height={60} src="/khotixs_logo.png" alt="Khotixs Logo"/>
                    </Link>

                    {/* Search form */}
                    <section className="max-w-[1500px] rounded-[5px] flex justify-center drop-shadow-xl">
                        <form className="w-full rounded-[5px] bg-gray-50 flex ">
                            {/* Search Component */}
                            <div className="flex items-center gap-0 w-[70%]">
                                <input
                                    type="text"
                                    placeholder="Search for events by name"
                                    className="bg-transparent h-full rounded-tl-[5px] text-lg focus:text-gray-500 rounded-bl-[5px] pl-5 w-full focus:outline-none pr-4 border-0 focus:ring-0 px-0 py-2"
                                    name="topic"
                                />
                                <hr className="w-[20px] bg-gray-400 rotate-90"/>
                            </div>

                            {/* Select Component */}
                            <div className="flex items-center gap-0 w-[50%]">
                                <Select onValueChange={setSelectedLocation}>
                                    <SelectTrigger
                                        className={cn(
                                            "w-[180px] text-lg focus:outline-none ring-0 bg-transparent border-0",
                                            selectedLocation ? "text-black" : "text-gray-400"
                                        )}
                                    >
                                        <SelectValue className="text-gray-400" placeholder="Select location"/>
                                    </SelectTrigger>
                                    <SelectContent className="text-gray-800 bg-gray-100">
                                        <SelectGroup>
                                            <SelectItem value="Phnome Phenh">Phnome Phenh</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <hr className="w-[20px] bg-gray-400 rotate-90"/>
                            </div>


                            {/* Popover Component */}
                            <div className="w-[60%]">
                                <Popover>
                                    <PopoverTrigger className="text-lg bg-red-950 focus:outline-none ring-0"
                                                    asChild>
                                        <Button
                                            variant="ghost"
                                            className={cn(
                                                "w-[200px] justify-start text-left bg-transparent border-0 focus:ring-0 focus:outline-none",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 text-gray-400"/>
                                            {date ? format(date, "PPP") :
                                                <span className="text-gray-400">Enter date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 text-black outline-none border-0">
                                        <Calendar
                                            className="text-gray-600 border-0 bg-white z-50 rounded-[5px] "
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <button
                                className="flex flex-row items-center justify-center rounded-tr-[5px] rounded-br-[5px]">
                                <div
                                    className="bg-primary-color text-2xl text-white p-3 rounded-tr-[5px] rounded-br-[5px]">
                                    <IoSearch/>
                                </div>
                            </button>
                        </form>
                    </section>

                    {/* Login and Sign up buttons */}
                    <div className="flex items-center">
                        <ModeToggle/>
                        <NavigationMenuDemo/>

                        <div className="flex items-center gap-2">
                            <Button
                                className="rounded-[5px] text-lg border-[1px] border-primary-color text-primary-color font-medium">
                                Login
                            </Button>
                            <Button
                                className="bg-primary-color text-lg rounded-[5px] text-secondary-color-text font-[10px] hover:bg-primary-color">
                                Sign up
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    );
}