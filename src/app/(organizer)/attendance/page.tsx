import React from 'react';
import NavbarOrganizerComponent from "@/components/organizer/navbarOrganizerComponent";
import HeaderOrganizer from "@/components/organizer/header-organizer";
import {Button} from "@/components/ui/button";
import {FileDown} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {AttendanceTable} from "@/components/organizer/AttendanceTable";

const Page = () => {
    return (
        <div className="p-6 space-y-6 max-w-[90rem] mx-auto">
            <HeaderOrganizer name="CHHAYA DEV"/>
            <NavbarOrganizerComponent/>

            <main className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">ATTENDANCE</h1>
                        <p className="text-sm text-muted-foreground">Real-time insights for data-driven decisions</p>
                    </div>
                    <Button className="bg-primary">
                        <FileDown className="mr-2 h-4 w-4"/>
                        Export Excel
                    </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Input className="sm:max-w-[200px]" placeholder="Search..."/>
                    <Select>
                        <SelectTrigger className="sm:w-[150px]">
                            <SelectValue placeholder="Categories"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="concert">Concert</SelectItem>
                            <SelectItem value="festival">Festival</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="sm:w-[150px]">
                            <SelectValue placeholder="Location"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Locations</SelectItem>
                            <SelectItem value="phnom-penh">Phnom Penh</SelectItem>
                            <SelectItem value="siem-reap">Siem Reap</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="sm:w-[150px]">
                            <SelectValue placeholder="Ticket"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Tickets</SelectItem>
                            <SelectItem value="vip">VIP</SelectItem>
                            <SelectItem value="premium">Premium</SelectItem>
                            <SelectItem value="standing">Standing</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="sm:w-[150px]">
                            <SelectValue placeholder="Status"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="checked-in">Checked In</SelectItem>
                            <SelectItem value="absent">Absent</SelectItem>
                        </SelectContent>
                    </Select>
                    {/*<DatePickerWithRange className="sm:w-[300px]"/>*/}
                </div>

                <AttendanceTable/>
            </main>
        </div>
    );
};

export default Page;