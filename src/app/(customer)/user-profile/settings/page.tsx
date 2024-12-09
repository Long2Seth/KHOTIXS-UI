
import {SettingsNav} from "@/components/customer/User-Profile/settingMenu";
import Setting from "@/components/customer/User-Profile/Setting";


export default function SettingsPage() {
    return (
        <div className="min-h-screen ">
            <div className="flex">
                <aside className="fixed left-0 top-14 w-60 h-[calc(100vh-3.5rem)] border-r border-[#3F3F3F] p-4">
                    <h2 className="mb-4 text-lg font-semibold text-white">Settings</h2>
                    <SettingsNav />
                </aside>
                <main className="flex-1 ml-60">
                    <div className="container max-w-[1280px] p-6">
                        <Setting
                            // email="it.chhaya@gmail.com"
                            // channelName="Chhaya DevKH"
                            // avatarUrl="/placeholder.svg"
                        />
                    </div>
                </main>
            </div>
        </div>
    )
}