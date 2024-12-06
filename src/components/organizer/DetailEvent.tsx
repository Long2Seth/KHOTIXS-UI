'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
        <section className="space-y-6">
        <div className="flex items-center justify-between">
            <h1 className="lg:text-3xl text-2xl font-bold">EVENT DETAILS</h1>
            <Button className="bg-primary-color hover:bg-primary-color/90"
                    onClick={() => router.push("/events/edit-event")}>Edit Event</Button>
        </div>
        <Card>
            <CardContent className="p-6 space-y-6">
                <h2 className="lg:text-2xl font-bold tracking-tight text-xl">THE Q - RISE OF THE QUEEN</h2>
                <div className="items-end grid md:grid-cols-2 gap-4">
                    <section className="space-y-6 order-last md:-order-1">
                        <section className="space-y-4">
                            <section className="space-y-2">
                                <h3 className="text-md lg:text-lg font-semibold">EVENT DESCRIPTION</h3>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <RiCalendarLine className="h-5 w-5"/>
                                    <span className="md:text-base">30 November 2024</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <RiTimerLine className="h-5 w-5"/>
                                    <span className="md:text-base">7:00PM</span>
                                </div>
                            </section>
                            <section className="space-y-2">
                                <h3 className="text-md lg:text-lg font-semibold">EVENT DESCRIPTION</h3>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <RiMap2Line className="h-5 w-5"/>
                                    <span className="md:text-base">កីឡដ្ឋានជាតិ អូឡាំពិក ក្រុងភ្នំពេញ</span>
                                </div>
                            </section>
                        </section>
                        {/* Event Description*/}
                        <section className="space-y-2">
                            <h3 className="font-semibold">EVENT DESCRIPTION</h3>
                            <p className="text-muted-foreground">
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
            </CardContent>
        </Card>
    </section>
)
}