'use client'

import { useState } from "react"
import SettingMenu from "@/components/customer/user_profile/setting/settingMenu"
import ChangePassword from "@/components/customer/user_profile/setting/changePassword"
import UserNotifications from "@/components/customer/user_profile/setting/user-notifications"

export default function SettingComponent() {
    const [activeTab, setActiveTab] = useState<'password' | 'notifications'>('password')

    return (
        <section className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">
            {/*<NavbarMenuComponent/>*/}
            <div className=" max-w-[1100px] mx-auto flex flex-col md:flex-row gap-4 mt-8 px-4">
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