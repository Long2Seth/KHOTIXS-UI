'use client';
import React, {useState, useEffect, useRef} from 'react';
import {IoSearch} from 'react-icons/io5';
import {useRouter} from 'next/navigation';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const resultsRef = useRef<HTMLUListElement>(null);
    const router = useRouter();

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSearchTerm(value);
        setShowSuggestions(true);
        console.log('Search term:', value);
        if (value) {
            await search(value);
        } else {
            setResults([]);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const search = async (term: string) => {
        const response = await fetch(`https://elastic.panda.engineer/khotixs-elastic.public.events/_search?source=%7B%22query%22%3A%7B%22bool%22%3A%7B%22must%22%3A%7B%22wildcard%22%3A%7B%22event_title%22%3A%22*${term}*%22%7D%7D%2C%22filter%22%3A%7B%22term%22%3A%7B%22is_publish%22%3Atrue%7D%7D%7D%7D%2C%22_source%22%3A%5B%22event_title%22%2C%22is_publish%22%5D%7D&source_content_type=application/json`);
        const data = await response.json();
        console.log('Search results:', data);
        const hits = data.hits.hits.map((hit: any) => hit._source.event_title);
        setResults(hits);
    };

    const handleResultClick = (result: string) => {
        console.log('Result clicked:', result);
        setSearchTerm(result);
        setResults([]);
        setShowSuggestions(false);
        router.push(`/search/${result}`);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
            console.log('Clicked outside, clearing results');
            setResults([]);
            setShowSuggestions(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearch = () => {
        router.push(`/search/${searchTerm}`);
        setResults([]);
        setShowSuggestions(false);
    };

    return (
        <div className="relative w-full flex items-center">
            <input
                type="text"
                placeholder="Search events name"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent h-full rounded-tl-[5px] text-base lg:text-lg focus:text-gray-500 rounded-bl-[5px] md:pl-5 pl-2 lg:pl-2 xl:pl-5 focus:outline-none pr-4 border-0 focus:ring-0 px-0 py-2 dark:text-primary-color-text"
            />
            <button
                className="flex flex-row items-center h-[40px] sm:h-[45px] lg:h-[50px] rounded-r-[6px] "
                onClick={handleSearch}
            >
                <div className="bg-primary-color text-white h-full rounded-r-[6px] flex items-center px-2 ">
                    <IoSearch className="w-7 h-7"/>
                </div>
            </button>
            {searchTerm && results.length > 0 && showSuggestions && (
                <ul ref={resultsRef}
                    className="absolute bg-transparent top-full mt-1 max-h-[500px] overflow-y-auto left-0 w-full bg-white border-gray-300 border-0 rounded-b-[5px] z-40 text-base lg:text-lg no-scrollbar md:px-5 px-2 lg:px-2 xl:px-5">
                    {results.map((result, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-gray-100 cursor-pointer line-clamp-1"
                            onClick={() => handleResultClick(result)}
                        >
                            {result}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;