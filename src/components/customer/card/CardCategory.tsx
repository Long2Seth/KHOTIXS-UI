import Image from 'next/image';
import {motion} from 'framer-motion';
import {CategoriesIcon, useCategories} from "@/lib/types/customer/categories";

type CardCategoryProps = {
    technologyRef: React.RefObject<HTMLElement>;
    concertRef: React.RefObject<HTMLElement>;
    sportRef: React.RefObject<HTMLElement>;
    communityRef: React.RefObject<HTMLElement>;
    conferenceRef: React.RefObject<HTMLElement>;
    generalRef: React.RefObject<HTMLElement>;
};

export default function CardCategory({technologyRef, concertRef, sportRef, communityRef, conferenceRef, generalRef}: CardCategoryProps) {

    const categories = useCategories({technologyRef, concertRef, sportRef, communityRef, conferenceRef, generalRef});

    const handleScroll = (ref: React.RefObject<HTMLElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <section
            className="relative lg:pt-10 md:pb-20 pb-10 md:space-y-10 space-y-6 mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark font-bold flex flex-col justify-center items-center h-auto overflow-hidden">
            {/* SVG Wave Background */}

            <div className="absolute bottom-0 left-0 w-full z-10">
                <motion.svg
                    viewBox="0 0 1440 320"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{y: 10}}
                    animate={{y: [0, 10, 0]}}
                    transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
                >
                    <path
                        fill="#AC1ED2"
                        fillOpacity="0.1"
                        d="M0,96L48,128C96,160,192,224,288,234.7C384,245,480,203,576,186.7C672,171,768,181,864,176C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </motion.svg>
            </div>
            <div className="absolute bottom-0 left-0 w-full z-10">
                <motion.svg
                    viewBox="0 0 1440 320"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{y: 10}}
                    animate={{y: [0, 10, 0]}}
                    transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
                >
                    <path
                        fill="#AC1ED2"
                        fillOpacity="0.1"
                        d="M0,96L48,128C96,160,192,224,288,234.7C384,245,480,203,576,186.7C672,171,768,181,864,176C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </motion.svg>
            </div>
            <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text z-10">
                EVENT CATEGORIES
            </h1>
            <div
                className="justify-center gap-4 lg:gap-6 max-w-[400px] md:max-w-[500px] lg:max-w-[700px] sm:w-full grid grid-cols-2 lg:grid-cols-3 md:gap-5 z-10"
            >
                {categories.map((category: CategoriesIcon) => (
                    <div key={category.name} onClick={() => handleScroll(category.ref)}
                    >
                        <motion.div
                            className="bg-primary-color hover:bg-primary-color/80 dark:border dark:bg-backdrop-blur dark:bg-opacity-5 cursor-pointer rounded-[10px] md:rounded-[15px] md:py-6 md:px-6 py-4 px-4 flex flex-col gap-0.5 md:gap-0 justify-center items-center shadow-lg"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.5}}
                        >
                            <div className="text-white text-xl sm:m-2">
                                <Image
                                    className="w-[28px] md:min-w-[40px] lg:min-w-[60px]"
                                    src={category.icon}
                                    alt={category.name}
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl">{category.name}</p>
                        </motion.div>
                    </div>

                ))}
            </div>
        </section>
    );
}