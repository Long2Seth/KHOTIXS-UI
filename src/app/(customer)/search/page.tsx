// import { useRouter } from 'next/router';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const desc = "Search for events and view search results.";

    return {
        title: "Search",
        description: desc,
        openGraph: {
            title: "Search",
            description: desc,
            siteName: 'KHOTIXS',
            images: [
                {
                    url: 'https://khotixs.istad.co/asset/api/v1/files/view/22b0d35d-8687-452e-98ee-9d0ffe0dafbe.jpg',
                    alt: 'Search'
                },
            ],
        },

    };
}
export default function SearchPage() {
    // const router = useRouter();
    // const { results } = router.query;
    // const searchResults = results ? JSON.parse(results as string) : [];

    return (
        <section className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex flex-col justify-center items-start h-auto space-y-[30px] md:space-y-[50px] xl:space-y-[70px] mb-[30px] md:mb-50px] xl:mb-[70px]">
            <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text uppercase">
                Events
            </h1>
            {/*{searchResults.length > 0 ? (*/}
            {/*    <div>*/}
            {/*        {searchResults.map((result: any, index: number) => (*/}
            {/*            <div key={index}>*/}
            {/*                <h2>{result._source.eventTitle}</h2>*/}
            {/*                <p>{result._source.location}</p>*/}
            {/*                <p>{result._source.startedDate}</p>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*) : (*/}
            {/*    <p>No results found</p>*/}
            {/*)}*/}
        </section>
    );
}