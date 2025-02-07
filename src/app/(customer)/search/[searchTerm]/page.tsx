import SearchComponent from "@/components/customer/search/SearchComponent";
import {CardComponent} from "@/components/customer/card/CardComponent";

type Prop = {
    params: Promise<{ searchTerm: string }>
}

export default async function SearchPage({params}: Prop) {
    const {searchTerm} = await params;


    return (
        <main className="grid mb-20 grid-cols-1 md:grid-cols-5 container mx-auto px-5 lg:px-10">
            <SearchComponent/>
            <section
                className="col-span-4 mt-10 sm:w-auto grid gap-3 justify-center items-center lg:px-[30px] xl:gap-10">
                <div
                    className="container mx-auto py-[15px] w-[300px] sm:w-auto grid gap-3 grid-cols-1 sm:grid-cols-1 md:gap-5 md:grid-cols-2 lg:max-w-full justify-center items-center ">
                    <CardComponent event={{
                        id: "1",
                        eventTitle: "Tech Conference 2025",
                        startedDate: "2025-03-15T09:00:00Z",
                        location: "Phnom Penh, Cambodia",
                        eventCategory: "TECHNOLOGY",
                        thumbnail: "/images/sample-event.jpg", // Update with an actual image path
                        tickets: []
                    }}/>
                    <CardComponent event={{
                        id: "1",
                        eventTitle: "Tech Conference 2025",
                        startedDate: "2025-03-15T09:00:00Z",
                        location: "Phnom Penh, Cambodia",
                        eventCategory: "TECHNOLOGY",
                        thumbnail: "/images/sample-event.jpg", // Update with an actual image path
                        tickets: []
                    }}/>
                </div>
            </section>
        </main>
    );
}