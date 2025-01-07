import { Skeleton } from "@/components/ui/skeleton";

export function ProfileComponentSkeleton() {
    const fields = [
        { width: "w-[200px]", height: "h-6" },
        { width: "w-[150px]", height: "h-6" },
        { width: "w-[250px]", height: "h-6" },
        { width: "w-[150px]", height: "h-6" },
        { width: "w-[200px]", height: "h-6" },
        { width: "w-[150px]", height: "h-6" },
        { width: "w-[250px]", height: "h-6" },
        { width: "w-[150px]", height: "h-6" },
    ];

    return (
        <section className="container mx-auto px-4">
            <section className="w-full bg-white p-5 rounded-[6px] flex flex-col md:flex-row justify-start items-center md:items-start gap-5 dark:backdrop-blur dark:bg-opacity-5 my-10">
                <div className="w-full">
                    <div className="w-full flex md:flex-row flex-col justify-between">
                        <section className="lg:max-w-[80%] flex flex-col items-start justify-center">
                            <Skeleton className="h-8 w-[300px] mb-5" />
                            <section className="w-full flex flex-col md:flex-row space-x-6">
                                <div className="relative min-w-[260px] h-auto rounded-[6px] border-2 border-gray-400 dark:border-white">
                                    <Skeleton className="aspect-square w-full h-[260px]" />
                                </div>
                                <div className="space-y-6">
                                    <div className="flex flex-col gap-y-2">
                                        {fields.map((field, index) => (
                                            <div className="flex" key={index}>
                                                <div className="flex items-start gap-2 min-w-[170px]">
                                                    <Skeleton className={`w-5 h-5 mt-1 ${field.width}`} />
                                                    <Skeleton className={`text-gray-400 text-base md:text-lg xl:text-xl dark:text-gray-300 ${field.width}`} />
                                                </div>
                                                <Skeleton className="text-gray-400 text-base md:text-lg xl:text-xl dark:text-gray-300 min-w-[50px]" />
                                                <Skeleton className={`text-title-color text-base md:text-lg xl:text-xl font-medium dark:text-dark-description-color ${field.width}`} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section className="items-center justify-center">
                            <Skeleton className="h-10 w-[100px]" />
                        </section>
                    </div>
                </div>
            </section>
        </section>
    );
}