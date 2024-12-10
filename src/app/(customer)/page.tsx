import CardCategory from "@/components/customer/card/CardCategory";
import { UpcomingEventComponent} from "@/components/customer/home/UpcomingEventComponent";
import {GeneralEventComponent} from "@/components/customer/home/GeneralEventComponent";
import ConcertEventComponent from "@/components/customer/home/ConcertEventComponent";
import SportEventComponent from "@/components/customer/home/SportEventComponent";
import CommunityEventComponent from "@/components/customer/home/CommunityEventComponent";
import ConferenceEventComponent from "@/components/customer/home/ConferenceEventComponent";
import Image from "next/image";
import TechnologyComponent from "@/components/customer/technology/TechnologyComponent";


export default function Home() {

    return (

        <main className=" flex flex-col bg-khotixs-background-white dark:bg-khotixs-background-dark space-y-[50px] md:space-y-[80px] xl:space-y-[100px] mb-[50px] md:mb-80px] xl:mb-[100px] ">


            {/* Hero section*/}
            <Image
                layout="responsive"
                width={100}
                height={100}
                src="/icons/hero-section.gif"
                alt="hero-section"
            />

            <CardCategory/>


            {/*Technology section*/}
            <UpcomingEventComponent/>


            {/*Conference section*/}
            <TechnologyComponent/>


            {/* Concert section */}
            <ConcertEventComponent/>


            {/*Sport section */}
            <SportEventComponent/>


            {/*Community section */}
            <CommunityEventComponent/>


            {/*Conference section*/}
            <ConferenceEventComponent/>


            {/* General section */}
            <GeneralEventComponent/>


        </main>
    );
}