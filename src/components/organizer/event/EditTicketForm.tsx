'use client'
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Ticket } from "@/lib/types/customer/event";
import { useUpdateTicketByIDMutation , useGetTicketByIdQuery } from "@/redux/feature/organizer/Ticket";

type EditTicketDialogProps = {
    isOpen: boolean;
    onClose: () => void;
    ticketId: string;
};

export default function EditTicketForm({ isOpen, onClose, ticketId }: EditTicketDialogProps) {
    const {data , isLoading , error} = useGetTicketByIdQuery(ticketId);


    const handleSave = async () => {
        // Save ticket details
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white" aria-describedby="edit-ticket-description">
                <DialogHeader>
                    <DialogTitle>Edit Ticket</DialogTitle>
                </DialogHeader>
                <div id="edit-ticket-description" className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label
                                htmlFor="ticketTitle"
                                className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                Ticket Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="ticketTitle"
                                name="ticketTitle"
                                className="bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                                placeholder="Enter ticket title"
                                value={data.ticketTitle}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="type"
                                className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                Ticket Type <span className="text-red-500">*</span>
                            </Label>
                            <Select name="type" value={data.type} >
                                <SelectTrigger
                                    className="bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                    <SelectValue placeholder={"Select ticket type"} />
                                </SelectTrigger>
                                <SelectContent
                                    className="bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                    <SelectItem className="dark:hover:text-primary-color-text" value="vip">
                                        VIP
                                    </SelectItem>
                                    <SelectItem className="dark:hover:text-primary-color-text" value="premium">
                                        Premium
                                    </SelectItem>
                                    <SelectItem className="dark:hover:text-primary-color-text" value="regular">
                                        Regular
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="price"
                                className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                Price <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                className="bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                                id="price"
                                name="price"
                                type="number"
                                min="0"
                                step="0.01"
                                disabled={isFree}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="capacity"
                                className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                Ticket Capacity
                            </Label>
                            <Input
                                className="bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                                id="capacity"
                                name="capacity"
                                type="number"
                                min="1"
                                value={capacity}
                            />
                            <p className="text-sm text-muted-foreground dark:text-label-text-primary">
                                Ticket Capacity is 1 if you not set.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="quantity"
                                className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                Quantity
                            </Label>
                            <Input
                                className="bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400 text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                                id="quantity"
                                name="quantity"
                                type="number"
                                min="1"
                                value={quantity}
                            />
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={onClose} variant="ghost">Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}