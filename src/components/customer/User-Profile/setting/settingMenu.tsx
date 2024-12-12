'use client'

import { cn } from "@/lib/utils"
import { MdOutlineLockPerson } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

interface SettingMenuProps {
    onTabChange: (tab: 'password' | 'notifications') => void
    activeTab: 'password' | 'notifications'
}

export default function SettingMenu({ onTabChange, activeTab }: SettingMenuProps) {
    return (
        <div className="w-64 pr-8 ">
            <h2 className="text-2xl font-bold mb-4  ">Settings</h2>
            <nav className="space-y-2">
                <button
                    onClick={() => onTabChange('password')}
                    className={cn(
                        "flex w-full items-center  gap-3 rounded-lg px-3 py-2 hover:bg-gray-300 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                        activeTab === 'password' && "bg-gray-100 text-gray-900 dark:bg-gray-800 "
                    )}
                >
                    <MdOutlineLockPerson />
                    <p>Password</p>
                </button>
                <button
                    onClick={() => onTabChange('notifications')}
                    className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 hover:bg-gray-300  py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                        activeTab === 'notifications' && "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-khotixs-background-white"
                    )}
                >
                    <IoMdNotificationsOutline />
                    <p> Notifications</p>

                </button>
                <button
                    className="flex w-full items-center gap-3 hover:bg-gray-300  rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:text-khotixs-background-white"
                    onClick={() => {
                        // Add logout logic here
                    }}
                >
                    <IoLogOutOutline />
                    <p>LogOut</p>

                </button>
            </nav>
        </div>
    )
}

