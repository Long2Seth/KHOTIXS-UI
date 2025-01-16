'use client'

import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5"

export default function ChangePassword() {
    const router = useRouter()
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <section className="w-full mx-auto flex justify-center items-center bg-secondary-colr">
            <section className="w-full rounded-[6px] my-10">
                <div className=" py-5">
                    <Card className="dark:bg-khotixs-background-dark px-5 space-y-4 ">
                        <CardHeader>
                            <CardTitle
                                className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-dark-description-color ">CHANGE
                                PASSWORD</CardTitle>
                            <CardDescription
                                className="ttext-description-color text-sm md:text-base xl:text-lg font-medium text-label-text-description">
                                On this page, you can change your password in two simple steps. First, enter your
                                current password for verification. Then, set your new password. It is that easy!
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 ">
                            <div className="space-y-1">
                                <Label
                                    htmlFor="current"
                                    className="text-base font-medium text-primary-color-text dark:text-secondary-color-text">
                                    Current password <span className="text-label-paid">*</span>
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="current"
                                        type={showCurrentPassword ? "text" : "password"}
                                        placeholder="Enter your current password"
                                        className="p-2 text-lg border-light-border-color rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                        className="absolute right-4 top-3"
                                    >
                                        {showCurrentPassword ? (
                                            <IoEyeOutline className="cursor-pointer text-label-text-description"/>
                                        ) : (
                                            <IoEyeOffOutline className="cursor-pointer text-label-text-description"/>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <Label
                                        htmlFor="new"
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text"
                                    >
                                        New password<span className="text-label-paid">*</span>
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="new"
                                            type={showNewPassword ? "text" : "password"}
                                            placeholder="Enter your new password"
                                            className="p-2 text-lg border-light-border-color rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            className="absolute right-4 top-3"
                                        >
                                            {showNewPassword ? (
                                                <IoEyeOutline className="cursor-pointer text-label-text-description"/>
                                            ) : (
                                                <IoEyeOffOutline
                                                    className="cursor-pointer text-label-text-description"/>
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <Label
                                        htmlFor="confirm"
                                        className="text-base font-medium text-primary-color-text dark:text-secondary-color-text">
                                        Confirm Password <span className="text-label-paid">*</span>
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="confirm"
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Enter your confirm password"
                                            className="p-2 text-lg border-light-border-color rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-4 top-3"
                                        >
                                            {showConfirmPassword ? (
                                                <IoEyeOutline className="cursor-pointer text-label-text-description"/>
                                            ) : (
                                                <IoEyeOffOutline
                                                    className="cursor-pointer text-label-text-description"/>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col sm:flex-row gap-5">
                            <Button
                                className="w-full mx-auto sm:w-1/2 bg-white text-red-500 border-red-600 dark:bg-khotixs-background-dark hover:bg-red-100 dark:hover:bg-red-500 dark:hover:text-white  dark:border-[1px] border-[1px]"
                                onClick={() => router.back()}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="w-full sm:w-1/2 text-white bg-primary-color hover:bg-primary-color dark:text-secondary-color-text hover:bg-primary-color/80 "
                            >
                                Save
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </section>
    )
}
