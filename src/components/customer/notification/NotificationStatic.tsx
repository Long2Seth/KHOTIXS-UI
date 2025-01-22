"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Notification } from "@/type/notification"
import { Avatar } from "@/components/ui/avatar"
import { CircleCheck, MoreVertical, Trash2 } from "lucide-react"

type Props = {
    notification: Notification;
}

export default function NotificationItem({notification}: Props) {
    console.log("Notification prop:", notification);
    return (
        <div className="container mx-auto flex items-center justify-center">
            <Card className="w-full max-w-[700px] p-4 hover:bg-accent/50 transition-colors rounded-[5px] bg-white border border-gray-200 cursor-pointer">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 w-full">
                        <div className="relative">
                            <Avatar className="h-12 w-12 flex items-center justify-center">
                                <Image
                                    src={notification.thumbnail || "/path/to/default/image.jpg"}
                                    alt={notification.thumbnail ? "" : "Placeholder"}
                                    width={40}
                                    height={40}
                                    className="w-full h-full rounded-full"
                                />
                            </Avatar>
                        </div>
                        <div className="flex flex-col w-full">
                            <p className="text-sm">
                                <span className="font-semibold line-clamp-1">{notification.eventTitle}</span>
                            </p>
                            <p className="text-muted-foreground line-clamp-1">{notification.description}</p>
                            <div className="items-center gap-2 text-xs text-muted-foreground">
                                <div className="flex gap-1">
                                    <span>{notification.startedDate}</span>
                                    <span aria-hidden="true">-</span>
                                    <span>{notification.endedDate}</span>
                                </div>
                                <p className="text-primary-color">
                                    <time dateTime={notification.timestamp}>{notification.timestamp}</time>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                        {notification.isRead && (
                            <div className="h-2 w-2 rounded-full bg-blue-500" aria-label="Unread notification" />
                        )}
                        <button className="flex-shrink-0 right-10 hover:bg-gray-100 rounded-full">
                            <MoreVertical className="h-5 w-5 text-gray-400" />
                            <span className="sr-only">More options</span>
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    )
}