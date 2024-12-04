"use client"

import * as React from "react"

import {cn} from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className=" text-lg font-medium ">About & Contact</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <section
                            className="  relative flex w-[450px] h-auto rounded-[5px] outline-none border-0 bg-khotixs-background-white ">

                            <a className=" w-[50%] cursor-pointer p-[20px] hover:bg-gray-200  "
                               href=".">
                                <div>
                                    <h1 className="  text-2xl font-semibold ">About</h1>
                                    <p>
                                        Re-usable components built using Radix UI and Tailwind CSS
                                    </p>
                                </div>
                            </a>

                            <a className=" w-[50%] cursor-pointer p-[20px] hover:bg-gray-200 "
                               href=".">
                                <div>
                                    <h1 className=" text-2xl font-semibold ">Contact</h1>
                                    <p>
                                        How to install dependencies and structure your app.
                                    </p>
                                </div>
                            </a>

                        </section>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
