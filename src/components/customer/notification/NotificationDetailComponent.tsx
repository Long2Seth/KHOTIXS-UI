'use client';
import {useState, useEffect} from "react";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Image from "next/image";
import { Notification } from "@/lib/types/customer/notification";
import {RiCalendarLine, RiMap2Line, RiTimerLine} from "react-icons/ri";

type NotificationDetailComponentProps = {
    onClose: () => void;
    id: string | null;
};

function formatDate(dateString: string | undefined): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString();
}

function formatTime(startDateString: string | undefined, endDateString: string | undefined): string {
    if (!startDateString || !endDateString) return '';
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    return `${startDate.toLocaleTimeString()} - ${endDate.toLocaleTimeString()}`;
}

export function NotificationDetailComponent({onClose, id}: NotificationDetailComponentProps) {
    const [data, setData] = useState<Notification| null>(null);

    const getdata = async (id: string | null) => {
        if (!id) return;
        try {
            const response = await fetch(`/communication/api/v1/notifications/publish-event/notification/${id}`, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Failed to get event:', error);
        }
    };

    useEffect(() => {
        getdata(id);
    }, [id]);

    return (
        <Dialog open onOpenChange={onClose}>
            <DialogTrigger asChild>
            </DialogTrigger>
            <DialogContent className=" max-w-[60%] bg-white rounded-[6px] ">

                <div>
                    {/* cover of event*/}
                    <section
                        className="relative mb-6 w-auto h-[200px] md:h-[370px] justify-center flex overflow-hidden rounded-lg">
                        <Image
                            src={data?.thumbnail || '/event/event-banner.png'}
                            unoptimized
                            alt="Event banner"
                            width={800}
                            height={600}
                            className="object-cover h-[200px] md:h-[370px] w-full rounded-xl"
                            priority
                        />
                    </section>

                    {/* event date and time*/}
                    <section className="space-y-6">
                        <section className="space-y-2">
                            <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">DATE
                                AND TIME</h2>
                            <div
                                className="flex gap-2 items-center dark:text-label-text-primary text-label-description">
                                <RiCalendarLine className="w-5"/>
                                <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">{formatDate(data?.startedDate)}</p>
                            </div>
                            <div
                                className="flex gap-2 items-center dark:text-label-text-primary text-label-description">
                                <RiTimerLine className="w-5"/>
                                <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">
                                    {formatTime(data?.startedDate, data?.endedDate)}
                                </p>
                            </div>
                        </section>

                        {/* event location*/}
                        <section className="space-y-2">
                            <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text  ">LOCATION</h2>
                            <div
                                className="flex items-start dark:text-label-text-primary text-label-description">
                                <div className="w-8 mt-1.5">
                                    <RiMap2Line className="w-5"/>
                                </div>
                                <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">{data?.location}</p>
                            </div>
                        </section>

                        {/* event description*/}
                        <section className="space-y-2">
                            <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">EVENT
                                DESCRIPTION</h2>
                            <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color ">
                                {data?.description}
                            </p>
                        </section>
                    </section>
                </div>
            </DialogContent>
        </Dialog>
    );
}