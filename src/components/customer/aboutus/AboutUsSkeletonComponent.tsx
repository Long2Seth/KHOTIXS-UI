import * as React from "react";
import {Skeleton} from "@/components/ui/skeleton";

export function AboutUsSkeletonComponent() {
    return (
        <main className="flex flex-col dark:bg-khotixs-background-dark">
            {/* Hero section */}
            <section className="relative h-[400px] xl:h-[600px] w-full overflow-x-hidden">
                <div
                    className="absolute bg-primary-color h-[400px] xl:h-[600px] w-[520px] rounded-bl-[100%] left-[-200px] overflow-x-hidden"></div>
                <div className="absolute bg-primary-color h-[400px] xl:h-[600px] w-[1600px] left-[300px]">
                    <Skeleton
                        className="absolute w-[200px] h-[40px] xl:w-[400px] xl:h-[60px] mt-[100px] left-[-230px] sm:left-[-180px] md:left-[-130px] xl:left-[30px] xl:top-[10px]"/>
                    <Skeleton
                        className="absolute w-[250px] h-[60px] md:w-[350px] xl:w-[400px] xl:h-[80px] mt-[140px] left-[-230px] sm:left-[-180px] md:left-[-130px] xl:left-[30px] xl:top-[30px]"/>
                </div>
            </section>

            <section className="w-full h-auto my-20 text-secondary-color dark:text-secondary-color-text">
                <section className="flex flex-col justify-center items-center gap-[20px]">
                    <div className="flex flex-col justify-center items-center px-5">
                        <Skeleton className="w-[350px] xl:w-full h-[40px] xl:h-[60px]"/>
                        <Skeleton className="w-[160px] h-2 bg-primary-color hidden sm:block dark:bg-white mt-4"/>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Skeleton className="w-[350px] xl:w-full h-[40px] xl:h-[60px] my-[20px]"/>
                        <Skeleton className="w-[350px] md:w-[700px] h-[60px] xl:h-[80px] px-5"/>
                    </div>
                </section>
            </section>

            <section
                className="container mx-auto flex justify-center w-full h-auto text-secondary-color dark:text-secondary-color-text">
                <section
                    className="grid justify-center w-full gap-5 grid-cols-1 max-w-[350px] px-5 md:grid-cols-2 md:max-w-full md:px-[40px]">
                    <section
                        className="bg-secondary-color-text flex flex-col w-full justify-center text-center max-w-full px-10 py-10 rounded-[5px] gap-y-5 md:max-w-[460px] lg:max-w-full dark:bg-secondary-color">
                        <Skeleton className="w-full h-[70px] dark:text-secondary-color-text"/>
                        <Skeleton className="w-[200px] h-[40px] xl:w-[300px] xl:h-[60px] mx-auto"/>
                        <Skeleton className="w-full h-[60px] xl:h-[80px] px-[15px]"/>
                    </section>
                    <section
                        className="bg-white text-center max-w-full flex flex-col justify-center px-10 py-10 rounded-[5px] gap-y-5 md:max-w-[460px] lg:max-w-full dark:bg-secondary-color">
                        <Skeleton className="w-full h-[70px] dark:text-secondary-color-text"/>
                        <Skeleton className="w-[200px] h-[40px] xl:w-[300px] xl:h-[60px] mx-auto"/>
                        <Skeleton className="w-full h-[60px] xl:h-[80px] px-[15px]"/>
                    </section>
                </section>
            </section>

            <section
                className=" container mx-auto w-full h-auto my-20 text-secondary-color dark:text-secondary-color-text">
                <Skeleton className="w-[200px] h-[40px] xl:w-[300px] xl:h-[60px] mx-auto my-[20px]"/>
                <section className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center w-full gap-5 px-5">

                    <div className="flex justify-center ">
                        <div>
                            <Skeleton className="h-[125px] w-[125px] rounded-xl"/>
                        </div>
                        <div className=" space-y-2">
                            <div className="flex flex-col items-center ">

                                <div className=" flex justify-center space-x-1">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-1">
                                        <Skeleton className="h-4 w-[200px]"/>
                                    </div>
                                </div>
                                <div className=" flex justify-center space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[200px]"/>
                                    </div>
                                </div>
                                <div className=" flex justify-center space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[200px]"/>
                                    </div>
                                </div>
                                <div className=" flex justify-center space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[200px]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <div>
                            <Skeleton className="h-[125px] w-[125px] rounded-xl"/>
                        </div>
                        <div className=" space-y-2">
                            <div className="flex flex-col items-center ">

                                <div className=" flex justify-center space-x-1">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-1">
                                        <Skeleton className="h-4 w-[200px]"/>
                                    </div>
                                </div>
                                <div className=" flex justify-center space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[200px]"/>
                                    </div>
                                </div>
                                <div className=" flex justify-center space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[200px]"/>
                                    </div>
                                </div>
                                <div className=" flex justify-center space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[200px]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </section>

            <section className="container mx-auto w-full h-auto text-secondary-color dark:text-secondary-color-text">
                <Skeleton className="w-[200px] h-[40px] xl:w-[300px] xl:h-[60px] mx-auto my-[20px]"/>
                <section
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center w-full gap-5 px-5">

                    <div className="flex justify-center ">
                        <div>
                            <Skeleton className="h-[125px] w-[125px] rounded-xl"/>
                        </div>
                        <div className=" space-y-2">
                            <div className="flex flex-col items-center ">

                                <div className=" flex space-x-1">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-1">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <div>
                            <Skeleton className="h-[125px] w-[125px] rounded-xl"/>
                        </div>
                        <div className=" space-y-2">
                            <div className="flex flex-col items-center ">

                                <div className=" flex space-x-1">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-1">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <div>
                            <Skeleton className="h-[125px] w-[125px] rounded-xl"/>
                        </div>
                        <div className=" space-y-2">
                            <div className="flex flex-col items-center ">

                                <div className=" flex space-x-1">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-1">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <div>
                            <Skeleton className="h-[125px] w-[125px] rounded-xl"/>
                        </div>
                        <div className=" space-y-2">
                            <div className="flex flex-col items-center ">

                                <div className=" flex space-x-1">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-1">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <div>
                            <Skeleton className="h-[125px] w-[125px] rounded-xl"/>
                        </div>
                        <div className=" space-y-2">
                            <div className="flex flex-col items-center ">

                                <div className=" flex space-x-1">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-1">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <div>
                            <Skeleton className="h-[125px] w-[125px] rounded-xl"/>
                        </div>
                        <div className=" space-y-2">
                            <div className="flex flex-col items-center ">

                                <div className=" flex space-x-1">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-1">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                                <div className=" flex space-x-2">
                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-[130px] "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </section>
        </main>
    );
}