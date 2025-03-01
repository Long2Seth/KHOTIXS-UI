"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
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
            className=" cursor-pointer hover:bg-gray-100 border-0 rounded-[6px] min-h-10 min-w-10 flex justify-center items-center mr-[35px] sm:mr-20 md:mr-0  text-primary-color hover:text-primary-color "
            onClick={toggleTheme}
        >
            {isDark ? (
                <Moon width={25} height={25} />
            ) : (
                <Sun className=" text-primary-color hover:text-primary-color h-50 w-50" width={25} height={25}/>
            )}
        </div>
    )
}