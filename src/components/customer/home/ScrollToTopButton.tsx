'use client'
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {RiArrowUpLine} from "react-icons/ri";
import {motion} from 'framer-motion';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.div
            className={`fixed bottom-6 right-4 rounded-[6px] hover:bg-[#BC23E5] h-[45px] pt-0.5 bg-primary-color text-white ${isVisible ? "block" : "hidden"}`}
            initial={{y: 10}}
            animate={{y: [0, 10, 0]}}
            transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
        >
            <Button
                type="button"
                onClick={scrollToTop}
            >
                <RiArrowUpLine className=" h-5 w-5 md:h-10 md:w-10 "/>
            </Button>
        </motion.div>
    );
}