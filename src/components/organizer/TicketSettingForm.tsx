'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Checkbox} from "@/components/ui/checkbox";
import {useRouter} from "next/navigation";
import {RiMore2Line, RiStarFill} from "react-icons/ri";

interface Ticket {
    name: string
    type: string
    price: number
    capacity: number
}

export function TicketSettingsForm() {
    const router = useRouter();
    const [isFree, setIsFree] = useState(false)
    const [tickets, setTickets] = useState<Ticket[]>([
        { name: "VIP", type: "vip", price: 100.00, capacity: 12 },
        { name: "PREMIUM", type: "premium", price: 0.00, capacity: 12 },
        { name: "STANDING", type: "standing", price: 0.00, capacity: 10 },
    ])

    const handleAddTicket = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newTicket = {
            name: formData.get('name') as string,
            type: formData.get('type') as string,
            price: isFree ? 0 : Number(formData.get('price')),
            capacity: Number(formData.get('capacity')) || 1,
        }
        setTickets([...tickets, newTicket])
        e.currentTarget.reset()

    }
    return (
        <section className="space-y-6">
            <h1 className="lg:text-2xl font-bold tracking-tight text-xl uppercase">Ticket Setting</h1>
            <div className="grid lg:grid-cols-2 gap-6 p-6 border dark:border-primary-color rounded-[6px]">
                <div className="space-y-6">
                    <h2 className="font-semibold">TICKET INFO</h2>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="free"
                            checked={isFree}
                            onCheckedChange={(checked) => setIsFree(checked as boolean)}
                        />
                        <label
                            htmlFor="free"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Do you want to set the ticket for free?
                        </label>
                    </div>

                    <form onSubmit={handleAddTicket} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-base">
                                Ticket Name <span className="text-red-500">*</span>
                            </Label>
                            <Input id="name" name="name" className="text-lg dark:bg-transparent dark:border-label-text-primary" required/>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="type" className="text-base">Ticket Type</Label>
                            <Select name="type">
                                <SelectTrigger className="text-lg h-25 dark:border-label-text-primary">
                                    <SelectValue placeholder="Select ticket type"/>
                                </SelectTrigger>
                                <SelectContent className="dark:bg-khotixs-background-dark dark:border-label-text-primary">
                                    <SelectItem value="vip">VIP</SelectItem>
                                    <SelectItem value="premium">Premium</SelectItem>
                                    <SelectItem value="standing">Standing</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="price" className="text-base">
                                Price <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                className="text-lg dark:bg-transparent dark:border-label-text-primary"
                                id="price"
                                name="price"
                                type="number"
                                min="0"
                                step="0.01"
                                required
                                disabled={isFree}
                                value={isFree ? "0" : undefined}
                            />
                            <p className="text-sm text-muted-foreground dark:text-label-text-primary">Price is in USD</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="capacity" className="text-base">Ticket Capacity</Label>
                            <Input className="text-lg dark:bg-transparent dark:border-label-text-primary"
                                   id="capacity"
                                   name="capacity"
                                   type="number"
                                   min="1"
                                   defaultValue="1"
                            />
                            <p className="text-sm text-muted-foreground dark:text-label-text-primary">
                                Ticket Capacity is 1 if you not set.
                            </p>
                        </div>

                        <Button onClick={() => router.push("/events/tickets")}
                                className="bg-primary-color w-full hover:bg-primary-color/90 dark:text-secondary-color-text" size={"lg"}
                                type="submit">
                            Add Ticket
                        </Button>
                    </form>
                </div>
                <div className="flex flex-col gap-6 h-full">
                    <h2 className="font-semibold">YOUR TICKETS</h2>
                    <div className="border h-full rounded-[6px] dark:border-label-text-primary">
                        <Table>
                            <TableHeader>
                                <TableRow className="dark:border-label-text-primary">
                                    <TableHead className="dark:text-secondary-color-text">NAME</TableHead>
                                    <TableHead className="dark:text-secondary-color-text">TYPE</TableHead>
                                    <TableHead className="dark:text-secondary-color-text">PRICE</TableHead>
                                    <TableHead className="dark:text-secondary-color-text text-center">CAPACITY</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="border-b dark:border-label-text-primary">
                                {tickets.map((ticket, index) => (
                                    <TableRow key={index}  className="dark:border-label-text-primary">
                                        <TableCell>{ticket.name}</TableCell>
                                        <TableCell>
                                            {ticket.type === 'vip' ? (
                                                <Badge
                                                    className="bg-label-vip dark:text-secondary-color-text hover:bg-label-vip/90 rounded-[6px] font-normal flex w-14 items-center gap-x-1.5">
                                                    VIP
                                                    <RiStarFill className="h-2.5 w-2.5"/>
                                                </Badge>
                                            ) : (
                                                <Badge variant="secondary" className="bg-label-free w-14 justify-center hover:bg-label-free/90 rounded-[6px] font-normal text-label-text-primary">
                                                    Free
                                                </Badge>
                                            )}
                                        </TableCell>
                                        <TableCell
                                            className="text-green-600 font-bold text-lg">${ticket.price.toFixed(2)}</TableCell>
                                        <TableCell className="text-center">{ticket.capacity}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <RiMore2Line className="h-4 w-4"/>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                                    <DropdownMenuItem className="text-red-600">
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between">
                <Button className="w-24 text-primary-color hover:text-primary-color dark:border-label-text-primary hover:bg-primary-color/10" size={"lg"}>Cancel</Button>
                <Button onClick={() => router.push("/organizer/events/detail-event")} className="bg-primary-color w-24 hover:bg-primary-color/90 dark:text-secondary-color-text" size={"lg"}>Save</Button>
            </div>
        </section>
    )
}