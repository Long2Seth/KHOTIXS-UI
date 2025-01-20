import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormSectionProps = {
    id: string;
    label: string;
    placeholder: string;
    type?: 'input' | 'textarea';
    error?: string;
    required?: boolean;
    defaultValue?: string;
};

export const FormSectionComponent: React.FC<FormSectionProps> = ({ id, label, placeholder, type = 'input', error, required = false , defaultValue}) => (
    <section className="space-y-2">
        <Label className="text-base font-medium text-primary-color-text dark:text-secondary-color-text" htmlFor={id}>
            {label}
            {required && <span className="text-red-500">*</span>}
        </Label>
        {type === 'input' ? (
            <Input id={id} name={id} placeholder={placeholder} defaultValue={defaultValue}
                   className="p-2 text-lg border-light-border-color rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"/>
        ) : (
            <Textarea id={id} name={id} placeholder={placeholder} defaultValue={defaultValue}
                      className="min-h-[100px] border border-light-border-color rounded-[6px] text-base md:text-lg placeholder:text-light-border-color focus:outline-none"/>
        )}
        {error && <p className="text-red-500">{error}</p>}
    </section>
);