'use client'
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LoadingButton } from "@/components/ui/loading-button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useUpdateTicketByIDMutation, useGetTicketByIdQuery } from "@/redux/feature/organizer/Ticket";
import { UpdateTicket} from "@/lib/types/customer/Ticket";
import { toast } from 'react-hot-toast';

type PropType = {
    eventId: string;
    ticketId: string;
    isOpen: boolean;
    onClose: () => void;
    onUpdate: (ticket: UpdateTicket) => void;
}

export default function EditTicket({ eventId, ticketId, isOpen, onClose, onUpdate }: PropType) {
    const { data, isLoading } = useGetTicketByIdQuery(ticketId);
    const [updateTicketByID] = useUpdateTicketByIDMutation();
    const [ticketTitle, setTicketTitle] = useState('');
    const [ticketType, setTicketType] = useState('');
    const [price, setPrice] = useState(0);
    const [capacity, setCapacity] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (data) {
            setTicketTitle(data.ticketTitle);
            setTicketType(data.type);
            setPrice(data.price);
            setCapacity(data.capacity);
        }
    }, [data]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const updatedTicket = { eventUuid: eventId, ticketTitle, type: ticketType, price, capacity };
        try {
            await updateTicketByID({ id: ticketId, data: updatedTicket }).unwrap();
            onUpdate(updatedTicket);
            onClose();
            toast.success("Ticket updated successfully!");
        } catch (error) {
            console.error("Failed to update the ticket: ", error);
            toast.error("Failed to update the ticket.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white rounded-[6px]">
                <DialogHeader>
                    <DialogTitle>Edit Ticket</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <section className="space-y-2">
                        <label htmlFor="ticketTitle" className="block text-sm font-medium text-gray-700">Ticket Title</label>
                        <Input
                            id="ticketTitle"
                            value={ticketTitle}
                            onChange={(e) => setTicketTitle(e.target.value)}
                            className="p-2 text-lg border-light-border-color rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                        />
                    </section>
                    <section className="space-y-2">
                        <label htmlFor="ticketType" className="block text-sm font-medium text-gray-700">Ticket Type</label>
                        <Select name="ticketType" value={ticketType} onValueChange={setTicketType}>
                            <SelectTrigger className="border border-light-border-color rounded-[6px] text-base md:text-lg">
                                <SelectValue placeholder="Select Ticket Type" />
                            </SelectTrigger>
                            <SelectContent className="bg-khotixs-background-white rounded-[6px]">
                                <SelectItem value="vip">VIP</SelectItem>
                                <SelectItem value="premium">Premium</SelectItem>
                                <SelectItem value="regular">Regular</SelectItem>
                                <SelectItem value="free">Free</SelectItem>
                            </SelectContent>
                        </Select>
                    </section>
                    <section className="space-y-2">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <Input
                            id="price"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="p-2 text-lg border-light-border-color rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                        />
                    </section>
                    <section className="space-y-2">
                        <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">Capacity</label>
                        <Input
                            id="capacity"
                            type="number"
                            value={capacity}
                            onChange={(e) => setCapacity(Number(e.target.value))}
                            className="p-2 text-lg border-light-border-color rounded-[6px] dark:border placeholder:text-gray-300 dark:border-white dark:text-secondary-color-text dark:bg-khotixs-background-dark"
                        />
                    </section>
                    <DialogFooter className="flex justify-end space-x-2">
                        <Button type="button" onClick={onClose} className="border border-red-700 hover:bg-red-50 text-red-700">Cancel</Button>
                        <LoadingButton type="submit" className="bg-primary-color rounded-[6px] border border-primary-color text-white hover:bg-primary-color/80" loading={loading}>Update</LoadingButton>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}