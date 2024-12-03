import OrderRequestComponent from "@/components/customer/OrderRequestComponent"

export default function OrderRequestPage() {
    return (
        <>
            {/* Section Title */}
            <section className={`px-[135px]`}>
                <h1 className={`uppercase text-[48px] font-bold`}>
                    order info requirement
                </h1>
                <p className={`text-[18px]`}>Fill in the information below!</p>
            </section>

            {/* Section Stepper */}
            <section className={`px-[135px]`}>
                <OrderRequestComponent />
            </section>
        </>
    )
}