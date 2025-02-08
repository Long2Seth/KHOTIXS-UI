'use client';
import { useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Notification } from "@/lib/types/customer/notification";
import { RiCalendarLine, RiMap2Line, RiTimerLine } from "react-icons/ri";
import { useGetNotificationByIdMutation, useReadNotificationByIdMutation } from "@/redux/feature/user/notification/Notification";

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

export function NotificationDetailComponent({ onClose, id }: NotificationDetailComponentProps) {
    const [getNotificationById, { data, isLoading, error }] = useGetNotificationByIdMutation();
    const [readNotificationById] = useReadNotificationByIdMutation();

    useEffect(() => {
        if (id) {
            getNotificationById(id);
            readNotificationById(id);
        }
    }, [id, getNotificationById, readNotificationById]);

    return (
        <Dialog open onOpenChange={onClose}>
            <DialogTrigger asChild>
            </DialogTrigger>
            <DialogContent className=" max-w-[60%] max-h-[80%] bg-white rounded-[6px]  overflow-auto ">
                <div className={`flex flex-col md:flex-row  gap-5`}>
                    {/* cover of event*/}
                    <section
                        className="relative mb-6 min-w-[50%] h-full justify-center flex overflow-hidden rounded-lg">
                        <Image
                            src={data?.thumbnail || '/event/event-banner.png'}
                            unoptimized
                            alt="Event banner"
                            width={800}
                            height={600}
                            className="object-cover h-full w-full rounded-xl"
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
                                <RiCalendarLine className="w-5" />
                                <p className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">{formatDate(data?.startedDate)}</p>
                            </div>
                            <div
                                className="flex gap-2 items-center dark:text-label-text-primary text-label-description">
                                <RiTimerLine className="w-5" />
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
                                    <RiMap2Line className="w-5" />
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