import { Card, CardContent } from "@/components/ui/card"
import { calculateRevenue } from "@/lib/types/organizer/utils"

export default function RevenueDashboard() {
    const { totalRevenue, averageRevenue } = calculateRevenue()

    return (
        <section className="space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px]">
            <div className="space-y-5">
                <h2 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">REVENUE</h2>

                <div className="grid gap-6 sm:grid-cols-2">

                    <Card className="shadow-sm bg-white border-0 rounded-[6px] dark:bg-khotixs-background-dark dark:border-[1px] dark:border-dark-border-color">
                        <CardContent className="p-10">
                            <div className="space-y-2">
                                <p className="text-description-color text-base md:text-lg dark:text-dark-description-color">
                                    TOTAL REVENUE
                                </p>
                                <p className="text-label-free text-lg md:text-2xl xl:text-4xl font-bold ">$ {totalRevenue}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="shadow-sm bg-white border-0 rounded-[6px] dark:bg-khotixs-background-dark dark:border-[1px] dark:border-dark-border-color">
                        <CardContent className="p-10">
                            <div className="space-y-2">
                                <p className="text-description-color text-base md:text-lg dark:text-dark-description-color">
                                    TOTAL REVENUE (AVG)
                                </p>
                                <p className="text-label-free text-lg md:text-2xl xl:text-4xl font-bold ">$ {averageRevenue}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

