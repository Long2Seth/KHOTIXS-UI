import StepperComponent from "@/components/customer/OrderInfoRequirementComponents/StepperComponent";
import OrderInfoRequirementFormComponent from "@/components/customer/OrderInfoRequirementComponents/OrderInfoRequirementFormComponent";
import { RiErrorWarningLine } from "react-icons/ri";

export default function page() {
    return (
        <>
            {/* Section Title */}
            <section className={`px-[135px] pt-[50px]`}>
                <h1 className={`uppercase text-[48px] font-bold`}>
                    order info requirement
                </h1>
                <div className="flex gap-[5px] items-center"> 
                <RiErrorWarningLine size={24}/>
                <p className={`text-[18px]`}>Fill in the information below!</p>
                </div>
            </section>

            {/* Section Order */}
            <section className={`px-[135px] py-[50px] flex flex-col justify-center items-center gap-[40px]`}>
                <StepperComponent />
                <OrderInfoRequirementFormComponent />
            </section>
        </>
    );
}
