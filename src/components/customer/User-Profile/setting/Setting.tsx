'use client'

import { useState } from "react"
import SettingMenu from "@/components/customer/User-Profile/setting/settingMenu"
import ChangePassword from "@/components/customer/User-Profile/setting/changePassword"
import UserNotifications from "@/components/customer/User-Profile/setting/user-notifications"
import NavbarMenuComponent from "@/components/customer/User-Profile/navbarMenuComponent"

export default function SettingComponent() {
    const [activeTab, setActiveTab] = useState<'password' | 'notifications'>('password')

    return (
        <section className="container mx-auto mt-7 p-4 sm:px-6 lg:px-8">
            <NavbarMenuComponent />
            <div className="flex flex-col md:flex-row gap-4 mt-8 px-4">
                <div className="w-full md:w-1/5">
                    <SettingMenu onTabChange={setActiveTab} activeTab={activeTab} />
                </div>
                <div className="w-full md:w-3/4">
                    {activeTab === 'password' && <ChangePassword />}
                    {activeTab === 'notifications' && <UserNotifications />}
                </div>
            </div>
        </section>
    )
}

