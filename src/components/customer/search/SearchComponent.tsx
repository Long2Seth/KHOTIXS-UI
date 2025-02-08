"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const categories = [
    { id: "technology", name: "Technology" },
    { id: "concert", name: "Concert" },
    { id: "sport", name: "Sport" },
    { id: "community", name: "Community" },
    { id: "conferences", name: "Conferences" },
    { id: "general", name: "General" }
];

export default function SearchComponent({ onFilterChange }: { onFilterChange: (category: string) => void }) {
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
        onFilterChange(value); // Notify parent about the selected category
    };

    return (
        <section className="w-full h-full border-r-2 border-gray-200 mb-10 mt-10 container mx-auto flex flex-col items-start">
            <h1 className="mb-4 uppercase text-title-color text-2xl xl:text-3xl font-bold dark:text-secondary-color-text">
                Filters
            </h1>
            <p className="mb-5 text-label-text-secondary font-bold">Category</p>

            <RadioGroup
                value={selectedCategory}
                onValueChange={handleCategoryChange}
                className="space-y-3"
            >
                {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                        <RadioGroupItem  value={category.id} id={category.id} className="rounded-[4px] border-primary focus:ring-primary" />
                        <Label htmlFor={category.id} className="cursor-pointer">{category.name}</Label>
                    </div>
                ))}
            </RadioGroup>
        </section>
    );
}
