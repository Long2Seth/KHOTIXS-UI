import {
    LogOut,
    User,
} from "lucide-react"
import {Settings} from "lucide-react";
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    // DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import * as React from "react";
import {useRouter} from "next/navigation";
import {UserProfileType} from "@/lib/types/customer/UserProfile";
import Image from "next/image";

type PropTypes = {
    data: UserProfileType | null;
}

export function OrganizerProfileComponent({data}: PropTypes) {

    const router = useRouter();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={` mr-[35px] sm:mr-20 md:mr-0 `} asChild>
                <div className="flex ">
                        <Image className="h-auto z-10 w-12 rounded-full bg-transparent cursor-pointer" height={100} width={100}
                               src={data?.avatar || "/images/place-holder.jpg"} alt="cher image"/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-auto rounded-[6px] bg-white dark:border dark:border-gray-400 dark:bg-khotixs-background-dark border-0">
                {/*<DropdownMenuSeparator/>*/}
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => router.push(`/organizer/profile/user/${data?.id}`)}>
                        <User/>
                        <span>Organizer Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push('/organizer/profile/changePassword')}>
                        <Settings/>
                        <span>Change Password</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <LogOut className=" text-label-paid hover:text-label-paid/80"/>
                        <span className=" text-label-paid hover:text-label-paid/80">Log out</span>
                    </DropdownMenuItem>

                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
