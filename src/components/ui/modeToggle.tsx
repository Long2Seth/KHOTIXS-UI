"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

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
        <Button
            className="border-0 "
            variant="outline"
            onClick={toggleTheme}
        >
            {isDark ? (
                <Moon width={20} height={20} />
            ) : (
                <Sun width={30} height={30}/>
            )}
        </Button>
    )
}
