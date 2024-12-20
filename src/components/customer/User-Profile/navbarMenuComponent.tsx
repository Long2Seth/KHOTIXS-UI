import { Card, CardContent } from "@/components/ui/card";
import { navMenus } from "@/lib/customer/profileMenu";
import Link from "next/link";

export default function NavbarMenuComponent() {
    return (
        <nav className="flex flex-wrap justify-center md:flex-nowrap max-w-screen-xl mx-auto">
            {navMenus.map((item, index) => (
                <div
                    key={item.label}
                    className="w-1/2 md:w-auto md:flex-1 relative mb-2 md:mb-0 "
                >
                    <Card className="h-full bg-transparent shadow-none border-none transition duration-300 ease-in-out hover:scale-105 ">
                        <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6  ">
                            <Link href={item.href} legacyBehavior>
                                <a className="flex flex-col items-center">
                                    <item.icon className="h-8 w-8 text-gray-700 sm:h-10 sm:w-10 mb-2 sm:mb-3 text-primary" />
                                    <span className="text-sm sm:text-base text-gray-700 font-medium text-center text-primary">
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
            ))}
        </nav>
    );
}