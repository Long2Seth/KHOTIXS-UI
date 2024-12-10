"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Upcoming from "@/components/customer/User-Profile/Upcomming";
import React, {useState} from "react";
import NavbarMenuComponent from "@/components/customer/User-Profile/navbarMenuComponent";

export default function Tickets() {
    const [activeTab, setActiveTab] = useState("account");

    return (
        <main className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">

            <NavbarMenuComponent/>
            <section className="w-full max-w-[1200px] mx-auto py-4">
                <div className="max-w-[1200px] mx-auto flex justify-center items-center">
                    <Tabs defaultValue="account" className="mb-5 w-full" onValueChange={setActiveTab}>
                        <TabsList className="grid w-[400px] grid-cols-2 ">
                            <TabsTrigger
                                value="account"
                                className={`h-full rounded-l-[5px] border-[1px] dark:text-secondary-color-text  ${activeTab === "account" ? "border-bg-primary-color" : "border-gray-300"}`}
                            >
                                Upcoming
                            </TabsTrigger>
                            <TabsTrigger
                                value="password"
                                className={`h-full rounded-r-[5px] border-[1px] dark:text-secondary-color-text  ${activeTab === "password" ? "border-bg-primary-color" : "border-gray-300"} py-3`}
                            >
                                History
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="password" className="pt-5">
                            <div className="flex flex-col ">
                                <Upcoming/>
                                <Upcoming/>
                                <Upcoming/>
                                <Upcoming/>
                                <Upcoming/>
                            </div>
                        </TabsContent>

                        <TabsContent value="account" className="pt-5">
                            <div className="flex flex-col">
                                <Upcoming/>
                                <Upcoming/>
                                <Upcoming/>
                                <Upcoming/>
                                <Upcoming/>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </main>
    );
}