import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { navItems } from "@/lib/organizer/navData"


export default function NavbarOrganizerComponent() {

    return (
        <nav className="flex max-w-screen-xl mx-auto ">
            {navItems.map((item, index) => (
                <div key={item.label} className="flex-1 relative">
                    <Card className="h-full bg-transparent shadow-none border-none">
                        <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6">
                            <item.icon className="h-8 w-8 text-gray-700 sm:h-10 sm:w-10 mb-2 sm:mb-3 text-primary" />
                            <span className="text-sm sm:text-base text-gray-700 font-medium text-center text-primary">{item.label}</span>
                            {item.badge && (
                                <Badge variant="secondary" className="absolute bg-blue-100 top-2 right-2 sm:top-3 sm:right-3 text-xs">
                                    {item.badge}
                                </Badge>
                            )}
                        </CardContent>
                    </Card>
                    {index < navItems.length - 1 && (
                        <div className="absolute top-1/4 right-0 h-24 w-px bg-gray-200" />
                    )}
                </div>
            ))}
        </nav>
    )
}

