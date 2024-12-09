"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Bell, CreditCard, Download, Play, Settings, Shield, Smartphone, User } from 'lucide-react'

const navItems = [
    {
        title: "Account",
        href: "/settings/account",
        icon: User,
    },
    {
        title: "Notifications",
        href: "/settings/notifications",
        icon: Bell,
    },
    {
        title: "Playback and performance",
        href: "/settings/playback",
        icon: Play,
    },


]

export function SettingsNav() {
    const pathname = usePathname()

    return (
        <nav className="grid gap-1">
            {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                            isActive
                                ? " text-black"
                                : "text-black hover:bg-gray-300"
                        )}
                    >
                        <Icon className="h-4 w-4" />
                        <span>{item.title}</span>
                    </Link>
                )
            })}
        </nav>
    )
}

