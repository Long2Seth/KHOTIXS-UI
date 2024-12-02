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
        <nav className="fixed mt-[10px] inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center">

                    {/*KHOTIXS LOGO*/}
                    <Link href="#" className="flex items-center">
                        <img width={60} src="/khotixs_logo.png" alt="Khotixs Logo"/>
                    </Link>


                    {/*Search form*/}
                    <section className=" w-[1300px] ">
                        <form
                            className=" mx-auto max-w-xl px-6 rounded-[5px] bg-gray-50 flex focus-within:border-gray-300">

                            <div>
                                <input type="text" placeholder="Search for events by name"
                                       className="bg-transparent w-full focus:outline-none pr-4  border-0 focus:ring-0 px-0 py-2"
                                       name="topic"/>
                            </div>
                            <div>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Secele location"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Phnome Phenh">Apple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[200px] justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon/>
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <button
                                className=" flex flex-row items-center justify-center rounded-[5px] px-3 tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-primary-color text-white focus:outline-none py-1.5 h-[38px] ">
                                <div className=" bg-primary-color text-2xl  text-white ">
                                    <IoSearch/>
                                </div>
                            </button>
                        </form>
                    </section>


                    {/*Login and Sign up buttons*/}
                    <div className="flex items-center gap-4">
                        <ModeToggle/>
                        <Button
                            className="rounded-[5px] border-[1px] border-primary-color text-primary-color font-medium">
                            Login
                        </Button>
                        <Button
                            className="bg-primary-color rounded-[5px] text-secondary-color-text font-[10px] hover:bg-primary-color">
                            Sign up
                        </Button>


                    </div>
                </div>
            </div>
        </nav>
    )
}