'use client'
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useSubmitPartnerFormMutation } from "@/redux/feature/user/PartnerRegister";

type PartnerRegister = {
    email: string;
    businessName: string;
    bankId: string;
    position: string;
    address: string;
};

export default function PartnerComponent() {
    const [email, setEmail] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [bankId, setBankID] = useState('');
    const [position, setPosition] = useState('');
    const [address, setLocation] = useState('');
    const [errors, setErrors] = useState<PartnerRegister>({ email: '', businessName: '', bankId: '', position: '', address: '' });
    const [submitPartnerForm] = useSubmitPartnerFormMutation();

    const validateForm = () => {
        const formErrors = { email: '', businessName: '', bankId: '', position: '', address: '' };
        let isValid = true;

        if (!bankId) {
            formErrors.bankId = 'Bank ID is required';
            isValid = false;
        }
        if (!businessName) {
            formErrors.businessName = 'Business Name is required';
            isValid = false;
        }
        if (!email) {
            formErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Email is invalid';
            isValid = false;
        }
        if (!position) {
            formErrors.position = 'Position is required';
            isValid = false;
        }
        if (!address) {
            formErrors.address = 'Location is required';
            isValid = false;
        }
        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            const formData: PartnerRegister = {
                email,
                businessName,
                bankId,
                position,
                address
            };

            try {
                const response = await submitPartnerForm(formData).unwrap();
                console.log('Form submitted successfully', response);
                // Clear form fields
                setEmail('');
                setBusinessName('');
                setBankID('');
                setPosition('');
                setLocation('');
                setErrors({ email: '', businessName: '', bankId: '', position: '', address: '' });
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    const handleBlur = (field: keyof PartnerRegister, value: string) => {
        const newErrors: PartnerRegister = { ...errors };
        if (value.trim() === '') {
            newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        } else if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            newErrors.email = 'Email is invalid';
        } else {
            newErrors[field] = '';
        }
        setErrors(newErrors);
    };

    return (
        <section className="flex items-center flex-col justify-center w-full px-2">
            <form
                className="md:p-10 p-4 text-start md:w-[500px] rounded-[5px] bg-white dark:bg-background-blur dark:bg-opacity-5 flex flex-col gap-4"
                onSubmit={handleSubmit}>
                <div className="flex gap-6 items-center text-primary-color">
                    <Image
                        width={100}
                        height={100}
                        className="object-cover border-r-4 border-primary-color/10"
                        priority
                        src="/khotixs_logo.png"
                        alt="logo"
                    />
                    <div className="col-span-2 font-bold justify-center uppercase">
                        <p>Welcome to the</p>
                        <h1 className="text-xl">
                            Partner Registration
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="email"
                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={(e) => handleBlur('email', e.target.value)}
                        className="p-2 text-lg border-gray-300 rounded-[6px] dark:border-label-description placeholder:text-gray-500 dark:text-secondary-color-text dark:bg-background-blur dark:bg-opacity-5"
                    />
                    {errors.email && <span className="text-red-500">{errors.email}</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="businessName"
                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text">
                        Business Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                        type="text"
                        id="businessName"
                        placeholder="Business Name"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        onBlur={(e) => handleBlur('businessName', e.target.value)}
                        className="p-2 text-lg border-gray-300 rounded-[6px] dark:border-label-description placeholder:text-gray-500 dark:text-secondary-color-text dark:bg-background-blur dark:bg-opacity-5"
                    />
                    {errors.businessName && <span className="text-red-500">{errors.businessName}</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="bankId"
                           className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                        Bank ID <span className="text-red-500">*</span>
                    </label>
                    <Input
                        type="text"
                        id="bankId"
                        placeholder="Bank ID"
                        value={bankId}
                        onChange={(e) => setBankID(e.target.value)}
                        onBlur={(e) => handleBlur('bankId', e.target.value)}
                        className="p-2 text-lg border-gray-300 rounded-[6px] dark:border-label-description placeholder:text-gray-500 dark:text-secondary-color-text dark:bg-background-blur dark:bg-opacity-5"
                    />
                    {errors.bankId && <span className="text-red-500">{errors.bankId}</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="position"
                           className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                        Position <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="position"
                        placeholder="Position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        onBlur={(e) => handleBlur('position', e.target.value)}
                        className="p-2 text-lg border border-gray-300 rounded-[6px] dark:border-label-description placeholder:text-gray-500 dark:text-secondary-color-text bg-transparent"
                    />
                    {errors.position && <span className="text-red-500">{errors.position}</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="address"
                           className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                        Location <span className="text-red-500">*</span>
                    </label>
                    <Input
                        id="address"
                        placeholder="Location"
                        value={address}
                        onChange={(e) => setLocation(e.target.value)}
                        onBlur={(e) => handleBlur('address', e.target.value)}
                        className="p-2 text-lg border border-gray-300 rounded-[6px] dark:border-label-description placeholder:text-gray-500 dark:text-secondary-color-text bg-transparent"
                    />
                    {errors.address && <span className="text-red-500">{errors.address}</span>}
                </div>
                <button
                    type="submit"
                    className="bg-primary-color text-white text-lg py-2 px-4 rounded-[5px] hover:bg-primary-color/80 transition">
                    Submit
                </button>
            </form>
        </section>
    );
}