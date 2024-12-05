import Image from "next/image";
import Link from "next/link";

export function FooterComponent() {
    return (
        <footer className="w-full bg-khotixs-background-white dark:bg-khotixs-background-dark py-[100px]">


            {/* Main Footer Section */}
            <section className="w-full px-[140px]  text-gray-400 flex justify-between">


                {/* Logo and Description */}
                <div className="w-1/4">
                    <Link href="#" className="flex items-center mb-4">
                        <Image
                            width={100}
                            height={100}
                            src="/khotixs_logo.png"
                            alt="Khotixs Logo"
                        />
                    </Link>
                    <p className="text-[16px] max-w-[300px] ">
                        Without creating an account, KHOTIXS still allows you to order tickets.
                        Boost your ticket sales with KHOTIXS—why not give it a try?
                    </p>
                </div>

                {/* Event Category */}
                <div className="w-1/4">
                    <h3 className="font-bold text-lg mb-4 text-primary-color-text dark:text-secondary-color-text  ">Event Category</h3>
                    <ul className="space-y-2">
                        <li>Concerts</li>
                        <li>Technology</li>
                        <li>Conferences</li>
                        <li>Sports</li>
                        <li>Community</li>
                        <li>General</li>
                    </ul>
                </div>

                {/* Support & Information */}
                <div className="w-1/4">
                    <h3 className="font-bold text-lg mb-4 text-primary-color-text dark:text-secondary-color-text  ">Support & Information</h3>
                    <ul className="space-y-2">
                        <li>How to use?</li>
                        <li>Policy</li>
                        <li>Contact us</li>
                        <li>About us</li>
                    </ul>
                </div>

                {/* Sponsors and Organizer */}
                <div className="w-1/4">
                    <h3 className="font-bold text-lg mb-4 text-primary-color-text dark:text-secondary-color-text  ">Sponsors By</h3>
                    <div className="flex space-x-4 mb-4">
                        <Image
                            width={50}
                            height={50}
                            src="/sponsor1_logo.png"
                            alt="Sponsor 1 Logo"
                        />
                        <Image
                            width={50}
                            height={50}
                            src="/sponsor2_logo.png"
                            alt="Sponsor 2 Logo"
                        />
                    </div>
                    <h3 className="font-bold text-lg mb-4 text-primary-color-text dark:text-secondary-color-text  ">Organize By</h3>
                    <div>
                        <Image
                            width={80}
                            height={50}
                            src="/organizer_logo.png"
                            alt="Organizer Logo"
                        />
                    </div>
                </div>


            </section>

            {/* Footer Bottom Section */}
            <section className="w-full font-medium text-lg text-center py-[50px] text-primary-color-text dark:text-secondary-color-text">
                &copy; 2024 2nd ITE, CSTAD
            </section>
        </footer>
    );
}
