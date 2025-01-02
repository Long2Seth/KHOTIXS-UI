type InfoCardProps = {
    title: string;
}

export default function InfoCard({title}: InfoCardProps) {
    return (
        <section className=" w-full flex flex-col justify-center items-center ">
            <h1 className=" text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text lg:pl-[130px] ">
                {title}
            </h1>
        </section>
    )
}