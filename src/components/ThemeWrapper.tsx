"use client"; // Mark this as a client component

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTopButton from "@/components/customer/home/ScrollToTopButton";
import NavbarComponent from "@/components/customer/navbar/NavbarComponent";
import { FooterComponent } from "@/components/customer/footer/FooterComponent";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <NavbarComponent />
            {children}
            <FooterComponent />
            <Toaster />
            <ScrollToTopButton />
        </ThemeProvider>
    );
}