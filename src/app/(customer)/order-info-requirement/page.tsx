import StepperComponent from "@/components/customer/StepperComponent/StepperComponent";
import OrderInfoRequirementFormComponent from "@/components/customer/OrderInfoRequirementComponent/OrderInfoRequirementFormComponent";
import TitleAndDesComponent from "@/components/customer/TitleAndDesComponent/TitleAndDesComponent";

export default function OrderInfoRequirement() {
    return (
        <main className=" space-y-[50px] md:space-y-[80px] xl:space-y-[100px] m-[60px] md:m-[80px] xl:m-[100px] ">
            <section>
                {/* Section Title */}
                <section className="container mx-auto mb-10 ">
                    <TitleAndDesComponent
                        title="Order Info Requirement"
                        description="Please fill in the information below to complete your order!"
                    />
                </section>

                {/* Section Order */}
                <section className="container mx-auto flex flex-col items-center justify-center gap-[40px] ">
                    <StepperComponent />
                    <OrderInfoRequirementFormComponent />
                </section>
            </section>
        </main>
    );
}