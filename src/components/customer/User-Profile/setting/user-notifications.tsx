'use client'

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function UserNotifications() {
    return (
        <div className="w-full mx-auto h-auto flex justify-center items-center py-5">
            <div className="w-full  bg-white dark:bg-khotixs-background-dark rounded-lg shadow-md overflow-hidden">
                <div className="w-full  divide-y divide-gray-200 dark:divide-gray-700">
                    {[
                        "News and updates",
                        "Tips and tutorials",
                        "Comments and replies",
                    ].map((title, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center p-5"
                        >
                            <div>
                                <h2 className="text-xl font-bold tracking-wide">{title}</h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    News about events and order tickets
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id={`switch-${index}`} className="dark:text-khotixs-background-white"/>
                                <Label htmlFor={`switch-${index}`} className="text-primary-color-text tracking-wide">

                                </Label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

