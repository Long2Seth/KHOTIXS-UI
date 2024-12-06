"use client"
import {IoMenu} from "react-icons/io5";
import { IoMdCloseCircle } from 'react-icons/io';
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

export function HumburgerMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className=" lg:text-md xl:text-lg font-medium ">
                        <IoMenu/>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <section
                            className="relative flex md:flex-col h-auto rounded-[5px] hover:rounded-[5px] outline-none border-5 border-none ring-0  bg-khotixs-background-white dark:bg-khotixs-background-dark ">

                            <a className=" w-[50%] cursor-pointer p-[20px] rounded-[5px] hover:bg-secondary-color hover:text-secondary-color-text"
                               href="/about">
                                <div>
                                    <h1 className="  text-2xl font-semibold ">About</h1>
                                </div>
                            </a>

                            <a className=" w-[50%] cursor-pointer p-[20px] rounded-[5px] hover:rounded-[5px] hover:bg-secondary-color hover:text-secondary-color-text "
                               href="/contact-us">
                                <div>
                                    <h1 className=" text-2xl font-semibold ">Contact</h1>
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
