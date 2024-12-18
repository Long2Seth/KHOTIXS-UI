import { Card, CardContent } from "@/components/ui/card"
import { calculateRevenue } from "@/lib/organizer/utils"

export default function RevenueDashboard() {
    const { totalRevenue, averageRevenue } = calculateRevenue()

    return (
        <section className="space-y-[50px] md:space-y-[80px] xl:space-y-[100px] my-[50px] md:my-[80px] xl:my-[100px] ">
            <div className="space-y-6">
                <h2 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">REVENUE</h2>

                <div className="grid gap-6 md:grid-cols-2">

                    <Card className="shadow-sm bg-white border-0 rounded-[6px] dark:bg-khotixs-background-dark dark:border-[1px] dark:border-dark-border-color">
                        <CardContent className="p-6">
                            <div className="space-y-2">
                                <p className="text-description-color text-base md:text-lg dark:text-dark-description-color">
                                    TOTAL REVENUE
                                </p>
                                <p className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">$ {totalRevenue}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="shadow-sm bg-white border-0 rounded-[6px] dark:bg-khotixs-background-dark dark:border-[1px] dark:border-dark-border-color">
                        <CardContent className="p-6">
                            <div className="space-y-2">
                                <p className="text-description-color text-base md:text-lg dark:text-dark-description-color">
                                    TOTAL REVENUE (AVG)
                                </p>
                                <p className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">$ {averageRevenue}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

