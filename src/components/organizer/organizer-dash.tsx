"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import {eventData} from '@/lib/organizer/barchartData';

export default function OrganizerDashboard() {
    return (
        <section
            className=" space-y-[50px] md:space-y-[80px] xl:space-y-[100px] my-[50px] md:my-[80px] xl:my-[100px] ">

            <section className=" w-full ">
                <h1 className="w-full text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text my-10">TOTAL
                    EVENTS</h1>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Metrics Section */}
                    <div className="grid gap-4">
                        <Card
                            className="dark:bg-khotixs-background-dark dark:border-[1px] rounded-[6px] bg-white border-secondary-color-text dark:border-gray-50">
                            <CardHeader className="space-y-0 pb-2">
                                <CardTitle
                                    className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">
                                    Event Publish
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold dark:text-secondary-color-text pl-[30px] ">0</div>
                            </CardContent>
                        </Card>

                        <Card
                            className="dark:bg-khotixs-background-dark dark:border-[1px] rounded-[6px] bg-white border-secondary-color-text dark:border-gray-50">
                            <CardHeader className="space-y-0 pb-2">
                                <CardTitle
                                    className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">
                                    Event Unpublish
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold dark:text-secondary-color-text pl-[30px]">2</div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Chart Section */}
                    <Card
                        className="dark:bg-khotixs-background-dark dark:border-[1px] rounded-[6px] bg-white border-secondary-color-text dark:border-gray-50">

                        <CardHeader className="dark:text-secondary-color-text">

                            <CardTitle
                                className=" text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text ">Bar
                                Chart - Event</CardTitle>
                            <p className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">
                                January - June 2024
                            </p>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
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