import StepperComponent from "@/components/customer/StepperComponent/StepperComponent";
import TitleAndDesComponent from "@/components/customer/TitleAndDesComponent/TitleAndDesComponent";
import PaymentDetailsComponent from "@/components/customer/PaymentDetailsComponent/PaymentDetailsComponent";

export default function PaymentDetail() {
    return (
        <main className="space-y-[50px] md:space-y-[80px] xl:space-y-[100px] m-2 my-10 md:m-[80px] xl:m-[100px]  ">
            <section>
                {/* Section Title */}
                <section className={`container mx-auto mb-10 `}>
                    <TitleAndDesComponent
                        title="Payment Details"
                        description="Please check your Payment Details!"
                    />
                </section>

                {/* Section Payment Details */}
                <section className={`container flex flex-col justify-center items-center gap-[40px]`}>
                    <StepperComponent />
                    <PaymentDetailsComponent />
                </section>
            </section>
        </main>
    )
}