//
// import { Notification, NotificationType } from "@/types/notification";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { Avatar } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// import { formatDistanceToNow } from "date-fns";
// import { Heart, Reply, CircleCheck, MoreVertical, Trash2 } from 'lucide-react';
// import {useUser} from "@/lib/customer/contextContenet/commentContext";
//
// interface NotificationItemProps {
//     notification: Notification;
//     actions: {
//         markAsRead: (id: string, newReadStatus: boolean) => void;
//         remove: (id: string) => void;
//     };
// }
//
// const placeholderProfile = 'https://t4.ftcdn.net/jpg/09/69/15/93/360_F_969159362_iq0L1zDXCkEXVdq6qE42vOC9oc4JnVZM.jpg';
//
// const getNotificationIcon = (type: NotificationType) => {
//     switch (type) {
//         case NotificationType.EVENT_CREATED:
//             return <Heart className="h-4 w-4 text-red-500" />;
//         case NotificationType.EVENT_PUBLISHED:
//             return <Reply className="h-4 w-4 text-green-500" />;
//         case NotificationType.REGULAR_TICKET:
//         case NotificationType.VIP_TICKET:
//         case NotificationType.PREMIUM_TICKET:
//         case NotificationType.FREE_TICKET:
//             return <CircleCheck className="h-4 w-4 text-yellow-500" />;
//         default:
//             return null;
//     }
// };
//
// export function NotificationItem({ notification, actions }: NotificationItemProps) {
//     const [isRead, setIsRead] = useState(notification.read);
//     const router = useRouter();
//     const { user } = useUser();
//
//     const profileImage = user?.profileImage || placeholderProfile;
//     const username = user?.username || 'Unknown';
//
//     const handleMarkAsRead = async () => {
//         const newReadStatus = !isRead;
//         setIsRead(newReadStatus); // Optimistic UI update
//         try {
//             await actions.markAsRead(notification.id, newReadStatus);
//         } catch (error) {
//             setIsRead(!newReadStatus); // Revert UI in case of error
//             console.error("Failed to update read status", error);
//         }
//     };
//
//     const handleRemoveNotification = async () => {
//         try {
//             await actions.remove(notification.id);
//         } catch (error) {
//             console.error("Failed to remove notification", error);
//         }
//     };
//
// export function NotificationItem({ notification, actions }: NotificationItemProps) {
//     const [isRead, setIsRead] = useState(notification.read);
//     const router = useRouter();
//
//     return (
//         <div className="flex items-start gap-4 p-6 rounded-md transition-colors bg-white border border-gray-200 cursor-pointer">
//             <Avatar className="h-10 w-10 bg-yellow-400 flex items-center justify-center">
//                 {notification?.thumbnail ? (
//                     <img src={notification.thumbnail || "/placeholder.svg"} alt={notification.eventTitle} className="w-full h-full rounded-full" />
//                 ) : (
//                     <img src={placeholderProfile || "/placeholder.svg"} alt="Placeholder" className="w-9 h-9 rounded-full" />
//                 )}
//             </Avatar>
//
//             <div className="flex-1 space-y-1">
//                 <div className="flex items-center gap-2">
//                     {getNotificationIcon(notification.notificationType)}
//                     <span className="font-medium text-primary">
//                         {notification.userName}
//                     </span>
//                 </div>
//
//                 <p>{notification.message}</p>
//
//                 <p className="text-xs text-muted-foreground">
//                     {formatDistanceToNow(new Date(notification.createdAt), {addSuffix: true})}
//                 </p>
//             </div>
//
//             <div className="flex items-center gap-2">
//                 {!isRead && <div className="h-2 w-2 rounded-full bg-yellow-600"/>}
//                 <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="icon" className="h-8 w-8">
//                             <MoreVertical className="h-4 w-4"/>
//                             <span className="sr-only">Open menu</span>
//                         </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                         <DropdownMenuItem
//                             onClick={() => {
//                                 actions.markAsRead(notification.id, newReadStatus);
//                                 setIsRead(true);
//                             }}
//                             className="text-yellow-600"
//                         >
//                             <CircleCheck className="mr-2 h-4 w-4" />
//                             <span>Mark as read</span>
//                         </DropdownMenuItem>
//                         <DropdownMenuItem
//                             onClick={() => actions.remove(notification.id)}
//                             className="text-red-700"
//                         >
//                             <Trash2 className="mr-2 h-4 w-4" />
//                             <span>Remove</span>
//                         </DropdownMenuItem>
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//             </div>
//         </div>
//     );
// }
// }
//

import { useRouter } from 'next/navigation';
import { MessageSquare, Heart, Reply, MoreVertical, Trash2, CircleCheck } from 'lucide-react';
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem, DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@/components/ui/avatar";
import { Notification, NotificationActions, NotificationType } from "@/type/notification"
import { useState } from 'react';
import Image from "next/image";
import {useUser} from "@/lib/customer/contextContenet/commentContext";

interface NotificationItemProps {
    notification: Notification;
    actions: NotificationActions;
}

const placeholderProfile = 'https://t4.ftcdn.net/jpg/09/69/15/93/360_F_969159362_iq0L1zDXCkEXVdq6qE42vOC9oc4JnVZM.jpg';

const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
        case NotificationType.FREE_TICKET:
            return <Heart className="h-4 w-4 text-red-500" />;
        case NotificationType.REGULAR_TICKET:
            return <MessageSquare className="h-4 w-4 text-blue-500" />;
        case NotificationType.VIP_TICKET:
            return <Reply className="h-4 w-4 text-green-500" />;
        case NotificationType.PREMIUM_TICKET:
            return <Heart className="h-4 w-4 text-purple-500" />;
        case NotificationType.EVENT_CREATED:
            return <CircleCheck className="h-4 w-4 text-green-500" />;
        case NotificationType.EVENT_PUBLISHED:
            return <MessageSquare className="h-4 w-4 text-yellow-500" />;
        // case NotificationType.EVENT_CANCELLED:
        //     return <Trash2 className="h-4 w-4 text-red-500" />;
        // case NotificationType.EVENT_DELETED:
        //     return <Reply className="h-4 w-4 text-blue-500" />;
        // case NotificationType.EVENT_CANCELLED:
        //     return <MessageSquare className="h-4 w-4 text-orange-500" />;
        default:
            return null;
    }
};

export function NotificationItem({ notification, actions }: NotificationItemProps) {
    const [isRead, setIsRead] = useState(notification.read);
    const router = useRouter();
    const { user } = useUser();

    const profileImage = user?.profileImage || placeholderProfile;
    const username = user?.username || 'Unknown';

    const handleMarkAsRead = async () => {
        const newReadStatus = !isRead;
        setIsRead(newReadStatus); // Optimistic UI update
        try {
            await actions.markAsRead(notification.id, newReadStatus);
        } catch (error) {
            setIsRead(!newReadStatus); // Revert UI in case of error
            console.error("Failed to update read status", error);
        }
    };

    const handleRemoveNotification = async () => {
        try {
            await actions.remove(notification.id);
        } catch (error) {
            console.error("Failed to remove notification", error);
        }
    };

    // const handleNotificationClick = async () => {
    //     const route = notification.notificationData.isContent ? `/content/${notification.notificationData.slug}` : `/forum/${notification.notificationData.slug}`;
    //     router.push(route);
    //     if (!isRead) {
    //         await handleMarkAsRead();
    //     }
    // };

    const handleNotificationClick = async () => {
        const route = '/'; // Navigate to homepage
        router.push(route);
        if (!isRead) {
            await handleMarkAsRead();
        }
    };

    return (
        <div onClick={handleNotificationClick} className="flex items-start gap-4 p-6 rounded-md transition-colors bg-white border border-gray-200 cursor-pointer">
            <Avatar className="h-10 w-10 bg-yellow-400 flex items-center justify-center">
                {profileImage ? (
                    <Image src={profileImage} alt={username} width={40} height={40} className="w-full h-full rounded-full" />
                ) : (
                    <Image src={placeholderProfile} alt="Placeholder" width={36} height={36} className="w-9 h-9 rounded-full" />
                )}
            </Avatar>

            <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                    {getNotificationIcon(notification.notificationType)}
                    <span className="font-normal text-primary">
            {notification.notificationType === NotificationType.FREE_TICKET? (
                <>
                    <span className="font-bold text-primary">{username}</span> បានចូលចិត្ត
                </>
            ) : notification.notificationType === NotificationType.EVENT_CREATED ? (
                <>
                    <span className="font-bold text-primary">{username}</span> បញ្ចេញមតិ
                </>
            ) : notification.notificationType === NotificationType.PREMIUM_TICKET ? (
                <>
                    <span className="font-bold text-primary">{username}</span> បានឆ្លើយតប
                </>
            ) : notification.notificationType === NotificationType.REGULAR_TICKET ? (
                <>
                    <span className="font-bold text-primary">{username}</span> បានបោះឆ្នោត
                </>
            ) : notification.notificationType === NotificationType.EVENT_PUBLISHED ? (
                <>
                    <span className="font-bold text-primary">{username}</span> បានយល់ព្រម
                </>
            ) : notification.notificationType === NotificationType.VIP_TICKET ? (
                <>
                    <span className="font-bold text-primary">{username}</span> បានបង្កើត
                </>
            ) : notification.notificationType === NotificationType.REGULAR_TICKET ? (
                <>
                    <span className="font-bold text-primary">{username}</span> បានរាយការណ៍
                </>
            ) : notification.notificationType === NotificationType.EVENT_PUBLISHED ? (
                <>
                    <span className="font-bold text-primary">{username}</span> បានឆ្លើយសំណួរ
                </>
            ) : notification.notificationType === NotificationType.PREMIUM_TICKET? (
                <>
                    <span className="font-bold text-primary">{username}</span> បានសួរសំណួរ
                </>
            ) : null}

          </span>

                </div>

                <p className="text-slate-500 text-sm line-clamp-2">{notification.message}</p>
                <p className="text-slate-500 text-sm line-clamp-2">
                    {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                </p>
            </div>

            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                {!isRead && <div className="h-2 w-2 rounded-full bg-yellow-600" />}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 border-none focus:outline-none active:border-none focus:ring-0">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="border-none p-2" >
                        <DropdownMenuItem onClick={handleMarkAsRead} className="border-none text-yellow-600 pb-2">
                            <CircleCheck className=" text-yellow-600 " />
                            <span className="text-yellow-600">{isRead ? 'សម្គាល់ថាមិនទាន់អាន' : 'សម្គាល់ថាអានរូច'}</span>
                        </DropdownMenuItem>
                        {/*<DropdownMenuSeparator />*/}
                        <DropdownMenuItem onClick={handleRemoveNotification} className="border-none text-red-700">
                            <Trash2 className="text-red-700" />
                            <span className="text-red-700">លុបការជូនដំណឹងនេះ</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}