'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card, CardContent } from "@/components/ui/card";
import { navMenus } from "@/lib/customer/profileMenu";
import Link from "next/link";

export default function NavbarMenuComponent() {
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        const { pathname } = window.location;
        setCurrentPath(pathname);
    }, []);

    return (
        <nav className="flex flex-wrap justify-center md:flex-nowrap max-w-screen-xl mx-auto bg-white rounded-[6px] ">
            {navMenus.map((item, index) => {
                const isActive = currentPath === item.href;
                return (
                    <div
                        key={item.label}
                        className="w-1/2 md:w-auto md:flex-1 relative mb-2 md:mb-0 "
                    >
                        <Card className={`h-full bg-white hover:text-primary-color dark:bg-khotixs-background-dark dark:border dark:border-white ${isActive ? 'text-primary-color hover:text-primary-color' : ''}`}>
                            <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 ">
                                <Link href={item.href} legacyBehavior>
                                    <a className="flex flex-col items-center">
                                        <item.icon className={`h-8 w-8 sm:h-10 sm:w-10 mb-2 sm:mb-3 ${isActive ? 'text-primary-color' : 'text-gray-700 dark:text-dark-description-color hover:text-primary-color '}`} />
                                        <span className={`text-sm sm:text-base font-medium text-center ${isActive ? 'text-primary-color' : 'text-gray-700 dark:text-dark-description-color'}`}>
                                            {item.label}
                                        </span>
                                    </a>
                                </Link>
                            </CardContent>
                        </Card>
                        {index < navMenus.length - 1 && (
                            <div className="absolute top-1/4 right-0 h-24 w-px bg-gray-200 hidden md:block" />
                        )}
                    </div>
                );
            })}
        </nav>
    );
}