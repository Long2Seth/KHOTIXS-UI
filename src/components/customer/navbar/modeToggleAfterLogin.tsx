"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggleAfterLogin() {
    const { theme, setTheme } = useTheme()
    const [isDark, setIsDark] = React.useState(false)

    React.useEffect(() => {
        setIsDark(theme === "dark")
    }, [theme])

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark")
        setIsDark(!isDark)
    }

    return (
        <div
            className=" cursor-pointer border-0 rounded-[6px] flex justify-center items-center mr-[35px] sm:mr-20 md:mr-0 gap-2 "
            onClick={toggleTheme}
        >
            {isDark ? (
                <>
                    <Sun />
                    <span className=" text-white">Light Mode</span>
                </>
            ) : (
                <>

                    <Moon />
                    <span className="text-black ">Dark Mode</span>


                </>
            )}
        </div>
    )
}