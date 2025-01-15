'use client'

import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
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
import {Badge} from "@/components/ui/badge"
import {Checkbox} from "@/components/ui/checkbox";
import {useRouter} from "next/navigation";
import {RiStarFill} from "react-icons/ri";

type Ticket = {
    ticketTitle: string
    type: string
    price: number
    capacity: number
}

export function TicketSettingsForm() {
    const router = useRouter();
    const [isFree, setIsFree] = useState(false)
    const [tickets, setTickets] = useState<Ticket[]>([])
    // const [dataEvent, setDataEvent] = useState<any>([])

    const createTicket = async () => {
        try {
            const formattedTickets = tickets.map(ticket => ({
                ...ticket,
                price: Number(ticket.price)
            }));

            const response = await fetch("http://localhost:8000/event-ticket/api/v1/tickets/492ed718-e441-402a-94ce-bb1125e19c9f", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formattedTickets),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error:", errorData);
                alert(`Error: ${response.status} - ${errorData.message}`);
            } else {
                router.push("/organizer/events");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while creating tickets.");
        }
    };

    // const getTickets = async () => {
    //     try {
    //         const response = await fetch("http://localhost:8000/event-ticket/api/v1/events/492ed718-e441-402a-94ce-bb1125e19c9f");
    //         const data = await response.json();
    //         setDataEvent(data);
    //         setTickets(data.tickets);
    //     } catch (error) {
    //         console.error("Error:", error);
    //         alert("An error occurred while fetching tickets.");
    //     }
    // }

    // useEffect(() => {
    //     getTickets();
    // }, []);

    const handleAddTicket = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newTicket = {
            ticketTitle: formData.get('ticketTitle') as string,
            type: formData.get('type') as string,
            price: isFree ? 0 : Number(formData.get('price')),
            capacity: Number(formData.get('capacity')) || 1,
        }
        setTickets([...tickets, newTicket])
        e.currentTarget.reset()
    }

    return (
        <section className="space-y-6">
            <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text uppercase">
                Ticket Setting
            </h1>
            <section
                className="grid lg:grid-cols-2 gap-10 p-6 dark:border-primary-color rounded-[6px] bg-white dark:backdrop-blur dark:bg-opacity-5 ">
                <div className="space-y-6">
                    <h2 className=" text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color font-semibold">
                        TICKET INFO
                    </h2>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            className=" rounded-[6px] "
                            id="free"
                            checked={isFree}
                            onCheckedChange={(checked) => setIsFree(checked as boolean)}
                        />
                        <label
                            htmlFor="free"
                            className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Do you want to set the ticket for free?
                        </label>
                    </div>
                    <form onSubmit={handleAddTicket} className="space-y-4">
                        <div className="space-y-2">
                            <Label
                                htmlFor="ticketTitle"
                                className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                Ticket Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="ticketTitle"
                                name="ticketTitle"
                                className=" bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400  text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                                placeholder="Enter ticket ticketTitle"
                                required/>
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="type"
                                className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                Ticket Type
                            </Label>
                            <Select name="type">
                                <SelectTrigger
                                    className=" bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400  text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                    <SelectValue placeholder="Select ticket type"/>
                                </SelectTrigger>
                                <SelectContent
                                    className=" bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400  text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text">
                                    <SelectItem className=" dark:hover:text-primary-color-text" value="vip">
                                        VIP
                                    </SelectItem>
                                    <SelectItem className=" dark:hover:text-primary-color-text" value="premium">
                                        Premium
                                    </SelectItem>
                                    <SelectItem className=" dark:hover:text-primary-color-text" value="standing">
                                        Standing
                                    </SelectItem>
                                    <SelectItem value="regular">
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
                                className=" bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400  text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                                id="price"
                                name="price"
                                type="number"
                                min="0"
                                step="0.01"
                                required
                                disabled={isFree}
                                value={isFree ? "0" : undefined}
                            />
                            <p className="text-sm text-muted-foreground dark:text-label-text-primary">
                                Price is in USD
                            </p>
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="capacity"
                                className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                Ticket Capacity
                            </Label>
                            <Input
                                className=" bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400  text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
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
                        <Button
                            className="bg-primary-color text-secondary-color-text rounded-[6px] w-full hover:bg-primary-color/90 dark:text-secondary-color-text"
                            size={"lg"}
                            type="submit">Add Ticket
                        </Button>
                    </form>
                </div>
                <div className="flex flex-col gap-6 h-full w-full">
                    <h2 className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color font-semibold ">
                        YOUR TICKETS
                    </h2>
                    <section
                        className="border h-[540px] w-full rounded-[6px] dark:border-label-text-primary overflow-y-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="dark:border-label-text-primary">
                                    <TableHead
                                        className="text-title-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">NAME</TableHead>
                                    <TableHead
                                        className="text-title-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">TICKET TYPE</TableHead>
                                    <TableHead
                                        className="text-title-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">PRICE</TableHead>
                                    <TableHead
                                        className="text-title-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">CAPACITY</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="border-b dark:border-label-text-primary">
                                {tickets.map((ticket, index) => (
                                    <TableRow key={index} className="dark:border-label-text-primary">
                                        <TableCell
                                            className=" text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color ">{ticket.ticketTitle}
                                        </TableCell>
                                        <TableCell
                                            className=" text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color ">
                                            {ticket.type.toLowerCase() === 'vip' ? (
                                                <Badge
                                                    className="bg-label-vip min-w-[100px] justify-center text-sm md:text-base xl:text-lg text-dark-description-color hover:bg-label-vip/90 rounded-[6px] font-normal flex w-14 items-center gap-x-1.5">
                                                    VIP
                                                    <RiStarFill className="h-2.5 w-2.5"/>
                                                </Badge>
                                            ) : ticket.type.toLowerCase() === 'premium' ? (
                                                <Badge
                                                    className="bg-label-premium  min-w-[100px] justify-center text-sm md:text-base xl:text-lg text-dark-description-color hover:bg-label-premium/90 rounded-[6px] font-normal flex w-14 items-center gap-x-1.5">
                                                    Premium
                                                </Badge>
                                            ) : ticket.type.toLowerCase() === 'regular' ? (
                                                <Badge
                                                    className="bg-label-regular min-w-[100px]  justify-center text-sm md:text-base xl:text-lg text-dark-description-color hover:bg-label-regular/90 rounded-[6px] font-normal flex w-14 items-center gap-x-1.5">
                                                    Regular
                                                </Badge>
                                            ) : (
                                                <Badge
                                                    className="bg-label-free  min-w-[100px]  justify-center text-sm md:text-base xl:text-lg text-dark-description-color  hover:bg-label-free/90 rounded-[6px] font-normal ">
                                                    Free
                                                </Badge>
                                            )}
                                        </TableCell>
                                        <TableCell
                                            className="text-green-600 font-bold text-lg">${Number(ticket.price).toFixed(2)}
                                        </TableCell>
                                        <TableCell
                                            className="text-sm md:text-base xl:text-lg text-start">{ticket.capacity}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </section>
                </div>
                <hr className=" w-full lg:col-span-2 dark:border-label-text-primary"/>
                <div className="lg:col-span-2 flex justify-between">
                    <Button
                        onClick={() => router.push("/organizer/events")}
                        className="w-24 text-red-500 border border-red-500 rounded-[6px] hover:text-red-500 hover:bg-red-300/10"
                        size={"lg"}>Cancel</Button>
                    <Button
                        type="button"
                        onClick={async () => {
                            await createTicket();
                            router.push("/organizer/events");
                        }}
                        className="bg-primary-color w-24 rounded-[6px] text-secondary-color-text hover:bg-primary-color/90 dark:text-secondary-color-text"
                        size={"lg"}
                    >
                        Save
                    </Button>
                </div>
            </section>
        </section>
    )
}