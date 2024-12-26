type InfoCardProps = {
    title: string;
    description: string;
}

export default function InfoCard({title, description}: InfoCardProps) {
    return (
        <section className=" w-full flex flex-col justify-center items-center ">
            <h1 className=" text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text lg:pl-[130px] ">
                {title}
            </h1>
            <p className=" text-description-color text-base md:text-lg xl:text-xl max-w-[500px] lg:max-w-[700px] xl:max-w-[90%] sm:px-0 md:px-0 md:text-md lg:text-lg xl:px-[10px] font-light text-center dark:text-dark-description-color">
                {description}
            </p>
        </section>
    )
}