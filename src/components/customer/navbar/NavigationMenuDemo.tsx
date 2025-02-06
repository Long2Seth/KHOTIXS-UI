"use client"

import * as React from "react"

import {cn} from "@/lib/types/utils"
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
        <NavigationMenu className=" hidden md:block dark:bg-khotixs-background-dark ">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className=" lg:w-auto text-[10px] sm:text-sm lg:text-lg font-medium dark:bg-khotixs-background-dark lg:px-4 ">About & Contact</NavigationMenuTrigger>
                    <NavigationMenuContent className={`border border-gray-400 rounded-[6px]`}>
                        <section
                            className="relative flex md:w-[400px] xl:w-[450px] h-auto rounded-[5px] hover:rounded-[5px] outline-none border-5 border-none ring-0  bg-khotixs-background-white dark:bg-khotixs-background-dark ">

                            <a className=" w-[50%] cursor-pointer p-[20px] rounded-[5px] hover:bg-secondary-color hover:text-secondary-color-text"
                                href="/about">
                                <div>
                                    <h1 className="  text-[10px] sm:text-sm lg:text-lg font-semibold ">About</h1>
                                    <p>
                                        About the project, and what you can do with it.
                                    </p>
                                </div>
                            </a>

                            <a className=" w-[50%] cursor-pointer p-[20px] rounded-[5px] hover:rounded-[5px] hover:bg-secondary-color hover:text-secondary-color-text "
                                href="/contact-us">
                                <div>
                                    <h1 className=" text-[10px] sm:text-sm lg:text-lg font-semibold ">Contact</h1>
                                    <p>
                                        Contact us for any questions or feedback.
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
