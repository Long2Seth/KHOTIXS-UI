'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"

export default function ChangePassword() {
    const router = useRouter()
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <div className="w-full mx-auto h-auto flex justify-center items-center">
            <div className="w-full">
                <div className="py-5">
                    <Card className="dark:bg-khotixs-background-dark">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-secondary-color dark:text-khotixs-background-white">CHANGE PASSWORD</CardTitle>
                            <CardDescription className="text-sm font-medium text-label-text-description">
                                On this page, you can change your password in two simple steps. First, enter your
                                current password for verification. Then, set your new password. It is that easy!
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-1">
                                <Label htmlFor="current" className="text-sm font-medium text-label-text-description">
                                    Current password <span className="text-label-paid">*</span>
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="current"
                                        type={showCurrentPassword ? "text" : "password"}
                                        placeholder="Enter your current password"
                                        className="dark:bg-khotixs-background-dark rounded-[5px] text-label-text-description border-[1px] border-secondary-color"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                        className="absolute right-4 top-3"
                                    >
                                        {showCurrentPassword ? (
                                            <IoEyeOutline className="cursor-pointer text-label-text-description" />
                                        ) : (
                                            <IoEyeOffOutline className="cursor-pointer text-label-text-description" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="new" className="text-sm font-medium text-label-text-description">
                                        New password<span className="text-label-paid">*</span>
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="new"
                                            type={showNewPassword ? "text" : "password"}
                                            placeholder="Enter your new password"
                                            className="dark:bg-khotixs-background-dark rounded-[5px] text-label-text-description border-[1px] border-secondary-color"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            className="absolute right-4 top-3"
                                        >
                                            {showNewPassword ? (
                                                <IoEyeOutline className="cursor-pointer text-label-text-description" />
                                            ) : (
                                                <IoEyeOffOutline className="cursor-pointer text-label-text-description" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="confirm" className="text-sm font-medium text-label-text-description">
                                        Confirm Password <span className="text-label-paid">*</span>
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="confirm"
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Enter your confirm password"
                                            className="dark:bg-khotixs-background-dark rounded-[5px] text-label-text-description border-[1px] border-secondary-color"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-4 top-3"
                                        >
                                            {showConfirmPassword ? (
                                                <IoEyeOutline className="cursor-pointer text-label-text-description" />
                                            ) : (
                                                <IoEyeOffOutline className="cursor-pointer text-label-text-description" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                            <Button
                                className="w-full mx-auto sm:w-1/2 bg-white dark:bg-khotixs-background-dark dark:text-secondary-color-text hover:bg-slate-200 text-primary-color-text border-solid dark:border-[1px] border-[1px]"
                                onClick={() => router.back()}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="w-full sm:w-1/2 bg-primary-color hover:bg-primary-color dark:text-secondary-color-text"
                            >
                                Save
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

