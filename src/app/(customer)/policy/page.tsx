import React from "react";
import PolicyComponent from "@/components/customer/policy/PolicyComponent";
import { generateMetadata } from './metadata';

export { generateMetadata };

export default function Policy() {
    return (
        <main className="container mx-auto w-full">
            <PolicyComponent/>
        </main>
    );
}