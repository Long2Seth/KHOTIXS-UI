import CardCategory from "@/components/customer/card/CardCategory";
import { UpcomingEventComponent} from "@/components/customer/home/UpcomingEventComponent";
import {GeneralEventComponent} from "@/components/customer/home/GeneralEventComponent";
import ConcertEventComponent from "@/components/customer/home/ConcertEventComponent";
import SportEventComponent from "@/components/customer/home/SportEventComponent";
import CommunityEventComponent from "@/components/customer/home/CommunityEventComponent";
import ConferenceEventComponent from "@/components/customer/home/ConferenceEventComponent";
import Image from "next/image";


export default function Home() {

    return (

        <main className=" flex flex-col bg-khotixs-background-white dark:bg-khotixs-background-dark space-y-[30px] ">


            {/* Hero section*/}
            <Image
                layout="responsive"
                width={100}
                height={100}
                src="/icons/hero-section.gif"
                alt="hero-section"
            />

            <CardCategory/>


            {/*Upcoming event section*/}
            <UpcomingEventComponent/>


            {/* General event section */}
            <GeneralEventComponent/>


            {/* Concert event section */}
            <ConcertEventComponent/>


            {/*Sport event section */}
            <SportEventComponent/>


            {/*Community event section */}
            <CommunityEventComponent/>


            {/*Conference event section*/}
            <ConferenceEventComponent/>


        </main>
    );
}