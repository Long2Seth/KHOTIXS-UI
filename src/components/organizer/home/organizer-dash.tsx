"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import {eventData} from '@/lib/types/organizer/BarchartData';
import { LuNotebookPen } from "react-icons/lu";
import {useGetSummaryEventQuery} from "@/redux/feature/organizer/Event";


export default function OrganizerDashboard() {
    const {data} = useGetSummaryEventQuery();

    console.log(" DATA : " , data)
    return (
        <section
            className=" space-y-[50px] md:space-y-[80px] xl:space-y-[100px] my-[50px] md:my-[80px] xl:my-[80px] ">

            <section className=" w-full ">
                <section className=" flex flex-row items-center gap-3 pl-1">
                    <LuNotebookPen className=" h-8 w-8 "/>
                    <h1 className="w-full text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text my-10">  SUMMARY</h1>
                </section>

                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Metrics Section */}
                    <div className="grid gap-4 grid-cols-2 lg:grid-cols-2">
                        <Card
                            className="dark:bg-khotixs-background-dark dark:border-[1px] rounded-[6px] bg-white border-secondary-color-text dark:border-gray-50 p-[20px] md:p-[30px] hover:bg-gray-50/80">
                            <CardHeader className="space-y-1 m-1">
                                <CardTitle
                                    className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">

                                    Total Events
                                </CardTitle>
                                <CardContent>
                                    <div className="text-2xl xl:text-4xl font-bold dark:text-primary-color text-primary-color pl-2">{data?.totalEvent || 0}</div>
                                </CardContent>
                            </CardHeader>

                        </Card>

                        <Card
                            className="dark:bg-khotixs-background-dark dark:border-[1px] rounded-[6px] bg-white border-secondary-color-text dark:border-gray-50 p-[20px] md:p-[30px] ">
                            <CardHeader className="space-y-1 m-1">
                                <CardTitle
                                    className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">
                                    Total Tickets
                                </CardTitle>
                                <CardContent>
                                    <div className="text-2xl xl:text-4xl font-bold dark:text-primary-color text-primary-color pl-2">{data?.totalTicket || 0 }</div>
                                </CardContent>
                            </CardHeader>

                        </Card>

                        <Card
                            className="dark:bg-khotixs-background-dark dark:border-[1px] rounded-[6px] bg-white border-secondary-color-text dark:border-gray-50 p-[20px] md:p-[30px] ">
                            <CardHeader className="space-y-1 m-1">
                                <CardTitle
                                    className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">
                                    Event Unpublish
                                </CardTitle>
                                <CardContent>
                                    <div className="text-2xl xl:text-4xl font-bold dark:text-primary-color text-primary-color pl-2">{data?.eventUnpublished || 0}</div>
                                </CardContent>
                            </CardHeader>


                        </Card>
                        <Card
                            className="dark:bg-khotixs-background-dark dark:border-[1px] rounded-[6px] bg-white border-secondary-color-text dark:border-gray-50 p-[20px] md:p-[30px] ">
                            <CardHeader className="space-y-1 m-1">
                                <CardTitle
                                    className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">
                                    Event Publish
                                </CardTitle>
                                <CardContent>
                                    <div className="text-2xl xl:text-4xl font-bold dark:text-primary-color text-primary-color pl-2">{data?.eventPublished || 0}</div>
                                </CardContent>
                            </CardHeader>

                        </Card>

                        <Card
                            className=" col-span-2 dark:bg-khotixs-background-dark dark:border-[1px] rounded-[6px] bg-white border-secondary-color-text dark:border-gray-50  p-[20px] md:p-[30px] ">
                            <CardHeader className="space-y-1 m-1">
                                <CardTitle
                                    className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">
                                    Total Payment
                                </CardTitle>
                                <CardContent>
                                    <div className="text-2xl xl:text-4xl font-bold dark:text-primary-color text-primary-color pl-2">$ {data?.totalPaymentOfAllEvent || 0}</div>
                                </CardContent>
                            </CardHeader>

                        </Card>


                    </div>

                    {/* Chart Section */}
                    <Card
                        className="dark:bg-khotixs-background-dark dark:border-[1px] p-[20px] md:p-[30px] rounded-[6px] bg-white border-secondary-color-text dark:border-gray-50">

                        <CardHeader className="dark:text-secondary-color-text ">


                            <CardTitle
                                className=" text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text ">Bar
                                Chart - Event</CardTitle>
                            <p className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">
                                January - June 2024
                            </p>
                        </CardHeader>
                        <CardContent className=" w-full h-auto ">
                            <div className="h-[300px] ">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={eventData} margin={{top: 20, right: 20, left: 20, bottom: 20}}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                                        <XAxis
                                            dataKey="month"
                                            axisLine={false}
                                            tickLine={false}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                        />
                                        <Tooltip/>
                                        <Bar
                                            dataKey="value"
                                            fill="#E9D5FF"
                                            radius={[4, 4, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

        </section>
    );
}
