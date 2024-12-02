'use client'
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {ModeToggle} from "@/components/ui/ModeToggle";
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


export default function NavbarComponent() {
    const [date, setDate] = React.useState<Date>()
    return (
        <nav className=" w-full  mt-[10px] inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
            <section className=" w-full py-[5px] px-[140px] ">


                <div className="flex justify-between h-14 items-center mx-auto ">

                    {/*KHOTIXS LOGO*/}
                    <Link href="#" className="flex items-center">
                        <img width={60} src="/khotixs_logo.png" alt="Khotixs Logo"/>
                    </Link>


                    {/*Search form*/}
                    <section className="max-w-[1500px] rounded-[5px] flex justify-center drop-shadow-xl ">


                        <form className="w-full rounded-[5px] bg-gray-50 flex ">
                            {/* Search Component */}
                            <div className=" flex items-center gap-0  w-[50%] ">
                                <input type="text" placeholder="Search for events by name"
                                       className="bg-transparent h-full rounded-tl-[5px] text-[16px] focus:text-gray-500 rounded-bl-[5px] pl-5 w-full focus:outline-none pr-4 border-0 focus:ring-0 px-0 py-2"
                                       name="topic"/>
                                <hr className=" w-[20px] bg-gray-400 rotate-90 "/>
                            </div>

                            {/* Select Component */}
                            <div className=" flex items-center ">
                                <Select>
                                    <SelectTrigger
                                        className="w-[180px] text-[16px] bg-red-950 focus:outline-none ring-0 text-gray-400 bg-transparent border-0"
                                    >
                                        <SelectValue placeholder="Select location"/>
                                    </SelectTrigger>
                                    <SelectContent className="text-gray-800 bg-gray-100">
                                        <SelectGroup>
                                            <SelectItem value="Phnome Phenh">Phnome Phenh</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <hr className=" w-[20px] bg-gray-400 rotate-90 "/>
                            </div>

                            {/* Popover Component */}
                            <div  className=" w-[50%] " >
                                <Popover>
                                    <PopoverTrigger className=" text-[16px] bg-red-950 focus:outline-none ring-0 " asChild>
                                        <Button
                                            variant="ghost"
                                            className={cn(
                                                "w-[200px] justify-start text-left bg-transparent border-0 focus:ring-0 focus:outline-none",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 text-gray-400 "/>
                                            {date ? format(date, "PPP") : <span className=" text-gray-400 ">Enter date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 text-black outline-none border-0 ">
                                        <Calendar className=" text-gray-600 border-0 "
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <button
                                className="  flex flex-row items-center justify-center rounded-tr-[5px] rounded-br-[5px]">
                                <div className="bg-primary-color text-2xl text-white p-3 rounded-tr-[5px] rounded-br-[5px] ">
                                    <IoSearch/>
                                </div>
                            </button>
                        </form>
                    </section>


                    {/*Login and Sign up buttons*/}
                    <div className=" flex items-center ">
                        <ModeToggle/>
                        <div className=" flex items-center gap-2 ">
                            <Button
                                className="rounded-[5px] text-[16px] border-[1px] border-primary-color text-primary-color font-medium">
                                Login
                            </Button>
                            <Button
                                className="bg-primary-color text-[16px] rounded-[5px] text-secondary-color-text font-[10px] hover:bg-primary-color">
                                Sign up
                            </Button>
                        </div>


                    </div>


                </div>
            </section>
        </nav>
    )
}