import SearchComponent from "@/components/customer/search/SearchComponent";

type Prop = {
    params: Promise<{ searchTerm: string }>
}

export default async function SearchPage({params}: Prop) {
    const {searchTerm} = await params;


    return (
        <main>
            <SearchComponent/>
        </main>
    );
}