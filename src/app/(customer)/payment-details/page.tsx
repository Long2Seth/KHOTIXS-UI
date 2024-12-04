import StepperComponent from "@/components/customer/StepperComponent/StepperComponent";
import TitleAndDesComponent from "@/components/customer/TitleAndDesComponent/TitleAndDesComponent";

export default function page(){
    return (
        <>
            {/* Section Title */}
            <section className={`px-[135px] pt-[50px]`}>
                <TitleAndDesComponent
                    title="Payment Details"
                    description="Please check your Payment Details!"
                />
            </section>

            {/* Section Order */}
            <section className={`px-[135px] py-[50px] flex flex-col justify-center items-center gap-[40px]`}>
                <StepperComponent />
            </section>
        </>
    )
}