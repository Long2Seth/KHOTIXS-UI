import { useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Notification } from "@/type/notification";
import { Avatar } from "@/components/ui/avatar";
import { NotificationActionComponent } from "@/components/customer/notification/NotificationActionComponent";
import { NotificationDetailComponent } from "@/components/customer/notification/NotificationDetailComponent";

type Props = {
    notification: Notification;
};

export default function NotificationCardComponent({ notification }: Props) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const getNotificationDetails = (notification: Notification) => {
        switch (notification.notificationType) {
            case 'PUBLISH-EVENT':
                return {
                    title: 'Publish Event',
                    image: '/images/planner.png',
                    description: "A new event has been published. Check the details and stay updated!"
                };
            case 'UPCOMING-EVENT':
                return {
                    title: 'Upcoming Event',
                    image: '/images/schedule.png',
                    description: "An event is coming up soon. Don't forget to mark your calendar!"
                };
            default:
                return {
                    title: 'Unknown Event',
                    image: '/images/default.png',
                    description: "This notification type is not recognized."
                };
        }
    };

    const { title, image, description } = getNotificationDetails(notification);

    return (
        <div className="relative container mx-auto flex items-center justify-center">
            <Card
                onClick={() => setIsDialogOpen(true)}
                className="w-full max-w-[700px] p-4 hover:bg-accent/50 transition-colors rounded-[5px] bg-white border border-gray-200 cursor-pointer">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 w-full">
                        <div className="relative">
                            <Avatar className="h-10 w-10 flex items-center justify-center">
                                <Image
                                    src={image}
                                    alt={title}
                                    width={40}
                                    height={40}
                                    className="w-full h-full rounded-[6px]"
                                />
                            </Avatar>
                        </div>
                        <div className="flex flex-col w-full">
                            <p className="text-sm">
                                <span className="text-lg font-bold line-clamp-1">{title}</span>
                            </p>
                            <p className="text-sm line-clamp-1">{description}</p>
                        </div>
                    </div>
                    <div>
                        {notification.isRead ? (
                            <span className=" absolute top-[16px] right-[16px] w-2 h-2 rounded-full ">Read</span>
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
            {isDialogOpen && <NotificationDetailComponent id={notification.id} onClose={() => setIsDialogOpen(false)} />}
        </div>
    );
}