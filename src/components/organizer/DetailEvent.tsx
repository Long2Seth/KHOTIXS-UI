'use client'
import {Button} from "@/components/ui/button"
import Image from "next/image";
import {
    RiCalendarLine,
    RiMap2Line,
    RiTimerLine
} from "react-icons/ri";
import {useRouter} from "next/navigation";

export default function EventDetailsPage() {
    const router = useRouter();

    return (
        <section className="space-y-6 ">
            <div className="flex items-center justify-between ">
                <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">EVENT
                    DETAILS</h1>
                <Button
                    className="bg-primary-color text-secondary-color-text rounded-[6px] px-5  hover:bg-primary-color/80 dark:text-secondary-color-text"
                    onClick={() => router.push("/organizer/events/edit-event")}>
                    Edit Event
                </Button>
            </div>
            <div className=' bg-white dark:bg-khotixs-background-dark dark:border dark:border-white rounded-[6px]'>
                <section className="p-6 space-y-6">
                    <h2 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">THE
                        Q - RISE OF THE QUEEN</h2>
                    <div className="items-end grid md:grid-cols-2 gap-4">
                        <section className="space-y-6 order-last md:-order-1">
                            <section className="space-y-4">
                                <section className="space-y-2">
                                    <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">EVENT
                                        DESCRIPTION</h3>
                                    <div
                                        className="flex items-center gap-2 text-muted-foreground dark:text-label-text-primary">
                                        <RiCalendarLine className="h-5 w-5"/>
                                        <span
                                            className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">30 November 2024</span>
                                    </div>
                                    <div
                                        className="flex items-center gap-2 text-muted-foreground dark:text-label-text-primary">
                                        <RiTimerLine className="h-5 w-5"/>
                                        <span
                                            className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color ">7:00PM</span>
                                    </div>
                                </section>
                                <section className="space-y-2">
                                    <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">EVENT
                                        DESCRIPTION</h3>
                                    <div
                                        className="flex items-center gap-2 text-muted-foreground dark:text-label-text-primary">
                                        <RiMap2Line className="h-5 w-5"/>
                                        <span
                                            className=" khmer-text text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">កីឡដ្ឋានជាតិ អូឡាំពិក ក្រុងភ្នំពេញ</span>
                                    </div>
                                </section>
                            </section>
                            {/* Event Description*/}
                            <section className="space-y-2">
                                <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">EVENT
                                    DESCRIPTION</h3>
                                <p className="khmer-text text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">
                                    ស្វាគមន៍មកកាន់ទស្សនាការសម្តែងដ៏អស្ចារ្យ!
                                    ស្វាគមន៍មកកាន់ខ្ញុំជាតារាចម្រៀងល្បីឈ្មោះ! STING MUSICVERSE សូមនាំមក
                                    ការប្រគំតន្ត្រី THE Q RISE OF THE QUEEN - AOK SOKUNKANHA SOLO TOUR CONCERT
                                    នៅរោងមហោស្រពជាតិ ( កីឡដ្ឋានជាតិ អូឡាំពិក ក្រុងភ្នំពេញ ) នៅថ្ងៃទី 30 ខែវិច្ឆិកា
                                    ឆ្នាំ 2024
                                </p>
                            </section>
                        </section>

                        <section className="rounded-[8px]">
                            <Image
                                src="/event/cover-event.jpg"
                                width={800}
                                height={600}
                                alt="Event poster"
                                className="rounded-[8px] object-cover aspect-auto lg:h-72 lg:w-auto"
                            />
                        </section>
                    </div>
                </section>
            </div>
        </section>
    )
}