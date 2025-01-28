'use client';
import { useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Notification } from "@/lib/types/customer/notification";
import { Avatar } from "@/components/ui/avatar";
import { NotificationActionComponent } from "@/components/customer/notification/NotificationActionComponent";
import { NotificationDetailComponent } from "@/components/customer/notification/NotificationDetailComponent";
import { useReadNotificationByIdMutation } from "@/redux/feature/user/Notification";

type Props = {
    notification: Notification;
};

function timeSince(date: Date) {
    const now = new Date();
    const createdAt = new Date(date);
    const seconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return `${interval} years ago`;

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `${interval} months ago`;

    interval = Math.floor(seconds / 86400);
    if (interval > 1) return `${interval} days ago`;

    interval = Math.floor(seconds / 3600);
    if (interval > 1) return `${interval} hours ago`;

    interval = Math.floor(seconds / 60);
    if (interval > 1) return `${interval} minutes ago`;

    return `${Math.floor(seconds)} seconds ago`;
}

export default function NotificationCardComponent({ notification }: Props) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [readNotificationById] = useReadNotificationByIdMutation();

    const handleCardClick = async () => {
        if (notification.id) {
            try {
                await readNotificationById(notification.id).unwrap();
                setIsDialogOpen(true);
            } catch (error) {
                console.error('Failed to update notification as read:', error);
            }
        }
    };

    return (
        <div className="relative container mx-auto flex items-center justify-center">
            <Card
                onClick={handleCardClick}
                className="w-full max-w-[700px] p-4 hover:bg-accent/50 transition-colors rounded-[5px] bg-white border border-gray-200 cursor-pointer">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 w-full">
                        <div className="relative">
                            <Avatar className="h-10 w-10 flex items-center justify-center">
                                <Image
                                    src={notification.thumbnail || '/event/event-banner.png'}
                                    alt="notification.thumbnail"
                                    width={40}
                                    height={40}
                                    className="w-full h-full rounded-full"
                                />
                            </Avatar>
                        </div>
                        <div className="flex flex-col w-full">
                            <p className="text-sm">
                                <span className="text-lg font-bold line-clamp-1">{notification.eventTitle}</span>
                            </p>
                            <p className="text-sm line-clamp-1">{notification.description}</p>
                            <p className={` text-primary-color `}>{notification.createdAt ? timeSince(notification.createdAt) : 'Unknown time'}</p>
                        </div>
                    </div>
                    <div>
                        {notification.isRead ? (
                            <span className=" absolute top-[16px] right-[16px] w-2 h-2 rounded-full "></span>
                        ) : (
                            <span
                                className=" absolute top-[16px] right-[16px] w-2 h-2 rounded-full bg-green-600"></span>
                        )}
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                        <button className="flex-shrink-0 right-10 hover:bg-gray-100 rounded-full">
                            <NotificationActionComponent id={notification.id as string | null} />
                        </button>
                    </div>
                </div>
            </Card>
            {isDialogOpen && <NotificationDetailComponent id={notification.id ?? null} onClose={() => setIsDialogOpen(false)} />}
        </div>
    );
}