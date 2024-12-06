import StepperComponent from "@/components/customer/StepperComponent/StepperComponent";
import TitleAndDesComponent from "@/components/customer/TitleAndDesComponent/TitleAndDesComponent";
import PaymentDetailsComponent from "@/components/customer/PaymentDetailsComponent/PaymentDetailsComponent";

export default function page() {
    return (
        <>
            {/* Section Title */}
            <section className={`container mx-auto pt-[50px]`}>
                <TitleAndDesComponent
                    title="Payment Details"
                    description="Please check your Payment Details!"
                />
            </section>

            {/* Section Payment Details */}
            <section className={`container mx-auto px-[20px] lg:px-[135px] py-[50px] flex flex-col justify-center items-center gap-[40px]`}>
                <StepperComponent />
                <PaymentDetailsComponent />
            </section>
        </>
    )
}