'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import {useUser} from "@/lib/customer/notification/notification";
import {useUserContext} from "@/context/UserContext";


// Form schema
export const formSchema = z.object({
    fullName: z.string().min(2, { message: "Full Name is required" }),
    email: z.string().email({ message: "Email is required" }),
    phoneNumber: z
        .string()
        .regex(/^\+?\d+$/, { message: "Phone Number must contain only numbers" })
        .min(8, { message: "Phone Number must be at least 8 digits long" }),
});

export default function OrderInfoRequirementFormComponent() {
    const router = useRouter();
    const { toast } = useToast();
     const { setUser} = useUserContext()
    const requiredStyle = "text-red-500";
    const msgStyle = "italic";

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        if (values.fullName && values.email && values.phoneNumber) {
            setUser(values)
            toast?.({
                title: "Success!",
                description: "Your information has been submitted successfully!",
            });



            setTimeout(() => {
                router.push("/payment-details");
            }, 1500); // 1.5-second delay
        }
    };

    return (
        <section
            className="bg-white w-full md:p-10 p-4 space-y-2.5 lg:w-[800px] md:py-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-2.5 lg:w-[670px] mx-auto">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <Label className="text-base">
                                    Full Name <span className={requiredStyle}>*</span>
                                </Label>
                                <FormControl>
                                    <Input
                                        className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-gray-400 dark:text-secondary-color-text dark:bg-khotixs-background-dark dark:placeholder:text-gray-400"
                                        placeholder="Full Name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className={msgStyle} />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <Label className="text-base">
                                    Email <span className={requiredStyle}>*</span>
                                </Label>
                                <FormControl>
                                    <Input
                                        className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-gray-400 dark:text-secondary-color-text dark:bg-khotixs-background-dark dark:placeholder:text-gray-400"
                                        placeholder="Email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className={msgStyle} />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <Label className="text-base">
                                    Phone Number <span className={requiredStyle}>*</span>
                                </Label>
                                <FormControl>
                                    <Input
                                        className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-gray-400 dark:text-secondary-color-text dark:bg-khotixs-background-dark dark:placeholder:text-gray-400"
                                        placeholder="Phone Number"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className={msgStyle} />
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-[10px] pt-[10px]">
                        <Button
                            type="button"
                            className="w-full hover:bg-label-paid hover:bg-opacity-20 p-[12px] text-red-600 border-[1px] border-red-600 dark:bg-backdrop-blur dark:bg-opacity-5 dark:text-red-600 dark:border-red-600 rounded-[6px]"
                            onClick={() => router.back()}
                        >
                            Back
                        </Button>
                        <Button
                            type="submit"
                            className="w-full text-secondary-color-text bg-primary-color hover:bg-primary-color/90 rounded-[6px]"
                        >
                            Continue
                        </Button>
                    </div>
                </form>
            </Form>
        </section>
    );
}