'use client';

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
import {useSelector} from "react-redux";
import {RootState} from "@/lib/store";
import {useGetUserProfileQuery} from "@/redux/feature/user/UserProfile";
import {useDispatch} from 'react-redux';
import {setOrderData} from "@/redux/feature/user/order/RequirementSlice";
import {LoadingButton} from '@/components/ui/loading-button';
import {useState} from 'react';

// Form schema
export const formSchema = z.object({
    fullName: z.string().min(2, {message: "Full Name is required"}),
    email: z.string().email({message: "Email is required"}),
    phoneNumber: z
        .string()
        .regex(/^\+?\d+$/, {message: "Phone Number must contain only numbers"})
        .min(8, {message: "Phone Number must be at least 8 digits long"}),
});

export default function OrderInfoRequirementFormComponent() {
    const router = useRouter();
    const dispatch = useDispatch();
    const requiredStyle = "text-red-500";
    const msgStyle = " text-red-500";

    const {data: userProfile} = useGetUserProfileQuery();
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: userProfile?.fullName || "",
            email: userProfile?.email || "",
            phoneNumber: userProfile?.phoneNumber || "",
        },
    });

    const order = useSelector((state: RootState) => state.order);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (values.fullName && values.email && values.phoneNumber) {
            console.log("Form Data:", values);

            dispatch(setOrderData({
                eventId: order.eventId || "",
                tickets: order.tickets.map(ticket => ({
                    ...ticket,
                    price: ticket.price.toString(), // Ensure price is a string
                })),
                formData: {
                    fullName: values.fullName,
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                    userId: userProfile?.id || "",
                },
            }));

            setLoading(true);
            setTimeout(() => {
                router.push("/payment-details");
                setLoading(false);
            }, 1500);
        }
    };

    return (
        <section
            className="bg-white w-full md:p-10 p-4 space-y-2.5 lg:w-[800px] md:py-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2.5 lg:w-[670px] mx-auto">
                    <FormField control={form.control} name="fullName" render={({field}) => (
                        <FormItem>
                            <Label className="text-base">
                                Full Name <span className={requiredStyle}>*</span>
                            </Label>
                            <FormControl>
                                <Input
                                    className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-gray-400 dark:text-secondary-color-text dark:bg-khotixs-background-dark dark:placeholder:text-gray-400 focus:outline-[1px]"
                                    placeholder="Full Name" {...field} />
                            </FormControl>
                            <FormMessage className={msgStyle}/>
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name="email" render={({field}) => (
                        <FormItem>
                            <Label className="text-base">
                                Email <span className={requiredStyle}>*</span>
                            </Label>
                            <FormControl>
                                <Input
                                    className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-gray-400 dark:text-secondary-color-text dark:bg-khotixs-background-dark dark:placeholder:text-gray-400"
                                    placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage className={msgStyle}/>
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name="phoneNumber" render={({field}) => (
                        <FormItem>
                            <Label className="text-base">
                                Phone Number <span className={requiredStyle}>*</span>
                            </Label>
                            <FormControl>
                                <Input
                                    className="p-2 text-lg border-gray-300 rounded-[6px] dark:border placeholder:text-gray-300 dark:border-gray-400 dark:text-secondary-color-text dark:bg-khotixs-background-dark dark:placeholder:text-gray-400"
                                    placeholder="Phone Number" {...field} />
                            </FormControl>
                            <FormMessage className={msgStyle}/>
                        </FormItem>
                    )}/>
                    <div className="flex gap-[10px] pt-[10px]">
                        <Button
                            type="button"
                            className="w-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-[6px]"
                            onClick={() => router.back()}
                        >
                            Back
                        </Button>
                        <LoadingButton
                            type="submit"
                            className="w-full text-secondary-color-text bg-primary-color hover:bg-primary-color/90 rounded-[6px]"
                            loading={loading}
                        >
                            Continue
                        </LoadingButton>
                    </div>
                </form>
            </Form>
        </section>
    );
}