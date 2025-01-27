'use client'
import React from 'react';
import { useEffect, useState } from "react";
import { ContactSkeletonComponent } from "@/components/customer/contact/ContactSkeletonComponent";
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useSubmitContactFormMutation} from "@/redux/feature/user/Contact";

type PartnerRegister = {
    name: string;
    email: string;
    message: string;
};

export default function ContactUsComponent() {
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<PartnerRegister>({ name: '', email: '', message: '' });
    const [submitContactForm] = useSubmitContactFormMutation();

    const validateForm = () => {
        const formErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!name) {
            formErrors.name = 'Name is required';
            isValid = false;
        }
        if (!email) {
            formErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Email is invalid';
            isValid = false;
        }
        if (!message) {
            formErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await submitContactForm({ name, email, message }).unwrap();
                console.log('Form submitted successfully', response);
                // Clear form fields
                setName('');
                setEmail('');
                setMessage('');
                setErrors({ name: '', email: '', message: '' });
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

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? <ContactSkeletonComponent /> :
                <section className="flex flex-col space-y-[50px] md:space-y-[80px] xl:space-y-[100px] mb-[50px] md:mb-[80px] xl:mb-[100px] bg-khotixs-background-white dark:bg-khotixs-background-dark">
                    {/* Hero section */}
                    <section className="relative h-[400px] w-full overflow-x-hidden xl:h-[600px]">
                        <div className="absolute bg-primary-color h-[400px] w-[520px] rounded-bl-[100%] left-[-200px] overflow-x-hidden xl:h-[600px]"></div>
                        <div className="absolute bg-primary-color h-[400px] w-[1600px] left-[300px] xl:h-[600px]">
                            <h1 className="absolute text-secondary-color-text text-lg md:text-2xl xl:text-4xl font-bold mt-[100px] left-[-230px] sm:left-[-180px] md:left-[-130px] xl:left-[30px] xl:top-[10px] z-10">
                                CONTACT US
                            </h1>
                            <p className="absolute text-base md:text-lg xl:text-xl text-white my-10 mt-[140px] max-w-[250px] text-md left-[-230px] sm:left-[-180px] md:left-[-130px] md:max-w-[350px] xl:left-[30px] xl:top-[30px] xl:max-w-[400px] dark:text-white dark:my-10 dark:mt-[140px] dark:max-w-[250px] dark:text-md dark:left-[-230px] dark:sm:left-[-180px] dark:md:left-[-130px] dark:md:max-w-[350px] dark:md:text-lg dark:xl:left-[30px] dark:xl:top-[30px] dark:xl:max-w-[400px] dark:xl:text-2xl">
                                We’re here to help! Whether you have a question about your booking, need assistance, or want to share feedback, the KHOTIXS team is ready to assist you.
                            </p>
                        </div>
                    </section>

                    {/* Contact Info and Form */}
                    <section className="container mx-auto w-full h-auto text-primary-color-text dark:text-secondary-color-text">
                        <div className="grid grid-cols-1 lg:gap-[100px] gap-5 w-full md:grid-cols-2 px-[24px]">
                            {/* Left Section: Contact Information */}
                            <div className="flex flex-col gap-8 text-center">
                                <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold uppercase w-full text-center dark:text-white">
                                    OUR CONTACT
                                </h1>
                                <p className="text-description-color text-base md:text-lg xl:text-xl text-start px-3 dark:text-dark-description-color">
                                    Looking for more information or need assistance? Our friendly team is here to help. Reach out to us by filling out the contact form below. We&apos;ll be in touch shortly.
                                </p>
                                <div className="flex flex-col gap-5 text-lg">
                                    <Link href="https://maps.app.goo.gl/V9rV5hL13QNK3ZJg9" className="grid grid-cols-12 hover:opacity-80 items-center bg-white px-5 py-2 rounded-[5px] dark:bg-background-blur dark:bg-opacity-5">
                                        <div className="col-span-2 xl:col-span-1">
                                            <GrLocation className="w-[30px] h-[30px] text-primary-color" />
                                        </div>
                                        <div className="text-start col-span-10 xl:col-span-11">
                                            <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">
                                                Location
                                            </h3>
                                            <p className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">
                                                No. 24, St 562, Sangkat Boeung Kak I, Khan Toul Kork, Phnom Penh.
                                            </p>
                                        </div>
                                    </Link>
                                    <Link href="tel:+85595990910" className="grid grid-cols-12 hover:opacity-80 items-center bg-white px-5 py-2 rounded-[5px] dark:bg-background-blur dark:bg-opacity-5">
                                        <div className="col-span-2 xl:col-span-1">
                                            <FiPhone className="w-[30px] h-[30px] text-primary-color" />
                                        </div>
                                        <div className="text-start col-span-10 xl:col-span-11">
                                            <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">
                                                Phone
                                            </h3>
                                            <p className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">(+855) 95 990 910</p>
                                        </div>
                                    </Link>
                                    <Link href="https://mail.google.com/mail/u/0/#sent?compose=new" className="grid grid-cols-12 hover:opacity-80 items-center bg-white px-5 py-2 rounded-[5px] dark:bg-background-blur dark:bg-opacity-5">
                                        <div className="col-span-2 xl:col-span-1">
                                            <HiOutlineMail className="w-[30px] h-[30px] text-primary-color" />
                                        </div>
                                        <div className="text-start col-span-10 xl:col-span-11">
                                            <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-secondary-color-text">
                                                Email
                                            </h3>
                                            <p className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">inform.service@gmail.com</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Section: Contact Form */}
                            <div className="flex flex-col gap-8 w-full text-center">
                                <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold uppercase max-w-[350px] xl:max-w-full text-center dark:text-white">
                                    WRITE A MESSAGE
                                </h1>
                                <p className="text-description-color text-base md:text-lg xl:text-xl text-start dark:text-dark-description-color">
                                    Please use this space to share your message, questions, or specific requests. We&apos;ll do our best to respond promptly.
                                </p>
                                <div className="p-5 xl:p-20 text-start rounded-[5px] bg-white dark:bg-background-blur dark:bg-opacity-5">
                                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="name" className="text-base font-medium text-primary-color-text dark:text-secondary-color-text">
                                                Name <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                type="text"
                                                id="name"
                                                placeholder="Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                onBlur={(e) => handleBlur('name', e.target.value)}
                                                className="p-2 text-lg border-gray-300 rounded-[6px] dark:border-label-description placeholder:text-gray-300 dark:text-secondary-color-text dark:bg-background-blur dark:bg-opacity-5"
                                            />
                                            {errors.name && <span className="text-red-500">{errors.name}</span>}
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="email" className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                type="email"
                                                id="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                onBlur={(e) => handleBlur('email', e.target.value)}
                                                className="p-2 text-lg border-gray-300 rounded-[6px] dark:border-label-description placeholder:text-gray-300 dark:text-secondary-color-text dark:bg-background-blur dark:bg-opacity-5"
                                            />
                                            {errors.email && <span className="text-red-500">{errors.email}</span>}
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="message" className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                                Message <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                placeholder="Message"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                onBlur={(e) => handleBlur('message', e.target.value)}
                                                className="p-2 text-lg border border-gray-300 rounded-[6px] dark:border-label-description placeholder:text-gray-300 dark:text-secondary-color-text bg-transparent"
                                            ></textarea>
                                            {errors.message && <span className="text-red-500">{errors.message}</span>}
                                        </div>
                                        <button type="submit" className="bg-primary-color text-white text-lg py-2 px-4 rounded-[5px] hover:bg-primary-color/80 transition">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Our Location Section */}
                    <section className="container mx-auto w-full text-primary-color-text dark:text-secondary-color-text space-y-[30px]">
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold uppercase w-[300px] text-center mx-auto dark:text-white">
                            OUR LOCATION
                        </h1>
                        <Link href="https://maps.app.goo.gl/V9rV5hL13QNK3ZJg9" className="m-5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6314046843904!2d104.89920651123596!3d11.578259843843679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1sen!2sus!4v1733450750727!5m2!1sen!2sus"
                                style={{ border: 0, height: '600px', width: '100%' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Link>
                    </section>
                </section>
            }
        </>
    );
}