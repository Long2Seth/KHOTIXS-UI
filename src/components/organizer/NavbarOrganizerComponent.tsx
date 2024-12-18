import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {ModeToggle} from "@/components/ui/modeToggle";


export default function NavbarOrganizerComponent() {
    return (
        <header className="container mx-auto w-full z-20 top-0 sticky py-5 bg-khotixs-background-white dark:bg-khotixs-background-dark ">
            <section className="flex items-center gap-4 justify-between ">

                <div className=" flex gap-5 ">
                    <Avatar className="h-16 w-16 border-[1px] ">
                        <AvatarImage src="/cher-chhaya.png" alt="cher image" />
                        <AvatarFallback>OG</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-muted-foreground text-gray-500">WELCOME BACK, ORGANIZER</p>
                        <h1 className="text-2xl font-bold">CHAN CHHAYA</h1>
                    </div>

                </div>
                <ModeToggle/>

            </section>

        </header>
    )
}


