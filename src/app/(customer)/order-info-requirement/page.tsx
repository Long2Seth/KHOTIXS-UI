import StepperComponent from "@/components/customer/StepperComponent/StepperComponent";
import OrderInfoRequirementFormComponent from "@/components/customer/OrderInfoRequirementComponent/OrderInfoRequirementFormComponent";
import TitleAndDesComponent from "@/components/customer/TitleAndDesComponent/TitleAndDesComponent";

export default function page() {
    return (
        <>
            {/* Section Title */}
            <section className={`container mx-auto px-[20px] lg:px-[135px] pt-[50px]`}>
                <TitleAndDesComponent
                    title="Order Info Requirement"
                    description="Please fill in the information below to complete your order!"
                />
            </section>

            {/* Section Order */}
            <section className={`container mx-auto px-[20px] lg:px-[135px] py-[50px] flex flex-col justify-center items-center gap-[40px]`}>
                <StepperComponent />
                <OrderInfoRequirementFormComponent />
            </section>
        </>
    );
}