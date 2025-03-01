import {
    LogOut,
    User,
} from "lucide-react"
import {LuTickets} from "react-icons/lu";
import {RiSecurePaymentLine} from "react-icons/ri";
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
import {ModeToggleAfterLogin} from "@/components/customer/navbar/modeToggleAfterLogin";
import {Profile} from "@/lib/types/customer/userProfile";
import {warning} from "motion-utils";


type UserProfileProps = {
    data: Profile
};


export function UserProfileComponent({data}: UserProfileProps) {

    const router = useRouter();

    const handleLogout = async () => {
        await fetch(`/logout`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include"
            })
            .then((response) => {
                if (response.ok) {
                    router.push('/')
                }
            })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={` mr-[35px] sm:mr-20 md:mr-0 `} asChild>

                <Button variant="ghost" className="p-0 rounded-full">
                    <div className="flex flex-col items-center gap-4">
                        <Avatar className="w-[40px] h-[40px] rounded-[5px]">
                            <AvatarImage src={data.avatar}/>
                        </Avatar>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-auto rounded-[6px] bg-white dark:border dark:border-gray-400 dark:bg-khotixs-background-dark border-0">
                {/*<DropdownMenuSeparator/>*/}
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <ModeToggleAfterLogin/>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push(`/profile/user`)}>
                        <User/>
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push('/profile/payment')}>
                        <RiSecurePaymentLine/>
                        <span>Payment</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push('/profile/ticket')}>
                        <LuTickets/>
                        <span>Ticket</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push('/profile/setting')}>
                        <Settings/>
                        <span>Setting</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLogout()}>
                        <LogOut className=" text-label-paid hover:text-label-paid/80"/>
                        <span className=" text-label-paid hover:text-label-paid/80">Log out</span>
                    </DropdownMenuItem>

                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}