import Image from 'next/image';
import { CategoriesIcon, categories } from "@/lib/customer/categories";

export function CardCategory() {
    return (
        <section
            className="w-full bg-khotixs-background-white dark:bg-khotixs-background-dark px-[140px] py-[100px] font-bold flex flex-col justify-center items-center h-auto ">

            <h1 className="text-primary-color-text lg:text-xl xl:text-3xl 2xl:text-5xl font-bold dark:text-secondary-color-text ">EVENT CATEGORIES</h1>

            <section className=" w-full justify-center gap-4 mt-8 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 ">
                {categories.map((category: CategoriesIcon) => (
                    <a key={category.name} href={category.link}
                       className="bg-primary-color rounded-[15px] w-full h-[150px] flex flex-col justify-center items-center shadow-lg">
                        <div className="text-white text-xl mb-2">
                            <Image src={category.icon} alt={category.name} width={50} height={50} />
                        </div>
                        <p className="text-white text-xl">{category.name}</p>
                    </a>
                ))}
            </section>

        </section>
    );
}