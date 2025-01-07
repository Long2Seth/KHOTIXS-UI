'use client'

import {cn} from "@/lib/utils"
import {MdOutlineLockPerson} from "react-icons/md";
import {IoMdNotificationsOutline} from "react-icons/io";
// import {IoLogOutOutline} from "react-icons/io5";

interface SettingMenuProps {
    onTabChange: (tab: 'password' | 'notifications') => void
    activeTab: 'password' | 'notifications'
}

export default function SettingMenu({onTabChange, activeTab}: SettingMenuProps) {
    return (
        <section>
            <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color mb-4 ">Settings</h2>
            <nav className="space-y-2">
                <button
                    onClick={() => onTabChange('password')}
                    className={cn(
                        " flex w-full items-center rounded-[6px] dark:text-white text-sm md:text-base xl:text-lg gap-3 px-3 py-2 hover:bg-primary-color hover:text-white transition-all ",
                        activeTab === 'password' && "bg-primary-color dark:bg-primary-color rounded-[6px]  text-white "
                    )}
                >
                    <MdOutlineLockPerson/>
                    <p>Password</p>
                </button>
                <button
                    onClick={() => onTabChange('notifications')}
                    className={cn(
                        " flex w-full items-center rounded-[6px] dark:text-white text-sm md:text-base xl:text-lg gap-3 px-3 py-2 hover:bg-primary-color hover:text-white transition-all ",
                        activeTab === 'notifications' && "bg-primary-color dark:bg-primary-color rounded-[6px]  text-white "
                    )}
                >
                    <IoMdNotificationsOutline/>
                    <p> Notifications</p>

                </button>
            </nav>
        </section>
    )
}