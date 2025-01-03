'use client'

import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import {useRouter} from "next/navigation";
import {useToast} from "@/hooks/use-toast";
import {useAppDispatch} from "@/redux/hook";
import {
    setFullName,
    setEmail,
    setPhoneNumber,
} from "@/redux/features/pre-order/preOrderSlice";

// Create schema for the form.
const formSchema = z.object({
    fullName: z.string().min(2, {message: "Full Name is required"}),
    email: z.string().email({message: "Email is required"}),
    phoneNumber: z
        .string()
        .regex(/^\d+$/, {message: "Phone Number must contain only numbers"})
        .min(8, {message: "Phone Number must be at least 8 digits long"}),
});

export default function OrderInfoRequirementFormComponent() {

    // Dispatch
    const dispatch = useAppDispatch();

    // Router
    const router = useRouter();

    // Toast
    const {toast} = useToast();

    // Styles
    const requiredStyle = "text-red-500";
    const msgStyle = "italic";

    // Initialize form values
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: ""
        },
    })

    // Function to handle form submission
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log({
            values,
        });

        if (values.fullName && values.email && values.phoneNumber) {
            toast({
                title: "Success!",
                description: "Your information has been submitted successfully!",
            })

            setTimeout(() => {
                router.push("/payment-details");
            }, 3000)
        }
    }

    return (
        <>
            <section
                className="bg-white w-full md:p-10 p-4 space-y-2.5 lg:w-[800px] md:py-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full space-y-2.5 lg:w-[670px] mx-auto ">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({field}) => (
                                <FormItem>
                                    <Label className=" text-base ">Full Name <span
                                        className={requiredStyle}>*</span></Label>
                                    <FormControl>
                                        <Input
                                            className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-gray-400 dark:text-secondary-color-text dark:bg-khotixs-background-dark dark:placeholder:text-gray-400 "
                                            placeholder="Full Name"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage className={msgStyle}/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <Label className=" text-base ">Email <span
                                        className={requiredStyle}>*</span></Label>
                                    <FormControl>
                                        <Input
                                            className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-gray-400 dark:text-secondary-color-text dark:bg-khotixs-background-dark dark:placeholder:text-gray-400 "
                                            placeholder="Email"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage className={msgStyle}/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({field}) => (
                                <FormItem>
                                    <Label className=" text-base ">Phone Number <span className={requiredStyle}>*</span></Label>
                                    <FormControl>
                                        <Input
                                            className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-gray-400 dark:text-secondary-color-text dark:bg-khotixs-background-dark dark:placeholder:text-gray-400 "
                                            placeholder="Phone Number"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage className={msgStyle}/>
                                </FormItem>
                            )}
                        />
                        <div className="flex gap-[10px] pt-[10px]">
                            <Button
                                className="w-full p-[12px] hover:bg-label-paid hover:bg-opacity-20 text-red-600 border-[1px] border-red-600 dark:bg-khotixs-background-dark dark:text-red-600 dark:border-red-600 rounded-[6px] "
                                onClick={() => router.back()}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="w-full bg-primary-color text-secondary-color-text p-[12px] hover:bg-primary-color dark:text-secondary-color-text rounded-[6px]   "
                            >
                                Payment Details
                            </Button>
                        </div>
                    </form>
                </Form>
            </section>
        </>
    );
}