type InfoCardProps = {
    title: string;
}

export default function InfoCard({title}: InfoCardProps) {
    return (
        <section className="space-y-4 w-full flex flex-col justify-center items-center ">
            <h1 className=" text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">
                {title}
            </h1>
            <p className=" text-description-color text-base md:text-lg xl:text-xl max-w-[500px] lg:max-w-[800px] sm:px-0 md:px-0 md:text-md lg:text-lgnfont-light text-center dark:text-dark-description-color">
                {description}
            </p>
        </section>
    )
}