import EventCategoryComponent from "@/components/customer/event/EventCategoryComponent";

type PropsType = {
    params: Promise<{
        category: string;
    }>
}

export default async function EventByCategory({params}: PropsType) {
    const {category} = await params


    return (
        <main>
            <EventCategoryComponent category={category}/>
        </main>

    );
}