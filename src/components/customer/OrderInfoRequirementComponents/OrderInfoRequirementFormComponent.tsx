'use client'

import React from "react";
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

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  phoneNumber: z
    .string()
    .regex(/^\d+$/, { message: "Phone Number must contain only numbers" })
    .min(8, { message: "Phone Number must be at least 8 digits long" }),
});

export default function OrderInfoRequirementFormComponent() {

  const router = useRouter();

  const requiredStyle = "text-red-500";
  const msgStyle = "italic";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({
      values,
    });
    form.reset();
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[670px] space-y-2.5">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <Label>Full Name <span className={requiredStyle}>*</span></Label>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
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
                <Label>Email <span className={requiredStyle}>*</span></Label>
                <FormControl>
                  <Input placeholder="Email" {...field} />
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
                <Label>Phone Number <span className={requiredStyle}>*</span></Label>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage className={msgStyle} />
              </FormItem>
            )}
          />
          <div className="flex gap-[10px] pt-[10px]">
            <Button
              className="w-full bg-white hover:bg-slate-200 text-primary-color-text border-solid border-[1px] border-black"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button type="submit" className="w-full bg-primary-color hover:bg-red-900">Payment Details</Button>
          </div>
        </form>
      </Form>
    </>

  );
}
