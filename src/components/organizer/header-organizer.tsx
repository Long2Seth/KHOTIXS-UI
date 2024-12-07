import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface HeaderProps {
    name: string
}

export default function HeaderOrganizer({ name }: HeaderProps) {
    return (
        <header className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2">
                <AvatarImage src="/img/chhaya.jpg" alt="cher image" />
                <AvatarFallback>OG</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-muted-foreground text-gray-500">WELCOME BACK, ORGANIZER</p>
                <h1 className="text-2xl font-bold">{name}</h1>
            </div>
        </header>
    )
}


