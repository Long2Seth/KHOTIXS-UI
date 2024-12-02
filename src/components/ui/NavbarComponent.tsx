/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xYHqD5MkVkT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NavbarComponent() {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center">
                    <Link href="#" className="flex items-center" >
                        <img src="/public/khotixs_logo.png" alt="Logo-khotixs"/>
                    </Link>
                    <nav className="hidden md:flex gap-4">

                    </nav>
                    <div className="flex items-center gap-4">
                        <Button className=" rounded-[5px] border-[1px] border-primary-color text-primary-color font-medium ">
                            Login
                        </Button>
                        <Button className=" bg-primary-color rounded-[5px] text-secondary-color-text font-[10px] ">
                            Sign up
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}