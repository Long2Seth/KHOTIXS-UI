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
        {name: "VIP", type: "vip", price: 100.00, capacity: 12},
        {name: "PREMIUM", type: "premium", price: 0.00, capacity: 12},
        {name: "STANDING", type: "standing", price: 0.00, capacity: 10},
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

                    <form
                        onSubmit={handleAddTicket}
                        className="space-y-4">

                        <div
                            className="space-y-2">

                            <Label
                                htmlFor="name"
                                className="text-lg font-medium text-primary-color-text dark:text-secondary-color-text">
                                Ticket Name <span className="text-red-500">*</span>
                            </Label>

                            <Input
                                id="name"
                                name="name"
                                className=" bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400  text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                                placeholder="Enter ticket name"
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
                                    <SelectValue
                                        placeholder="Select ticket type"/>
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
                            //onClick={() => router.push("/organizer/events/tickets")}
                            className="bg-primary-color text-secondary-color-text rounded-[6px] w-full hover:bg-primary-color/90 dark:text-secondary-color-text"
                            size={"lg"}
                            type="submit">Add Ticket
                        </Button>
                    </form>
                </div>

                <div className="flex flex-col gap-6 h-full">

                    <h2 className="text-description-color text-base md:text-lg xl:text-xl dark:text-dark-description-color font-semibold ">
                        YOUR TICKETS
                    </h2>

                    <section className="border h-[540px]  rounded-[6px] dark:border-label-text-primary overflow-y-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="dark:border-label-text-primary">
                                    <TableHead
                                        className="text-title-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">NAME</TableHead>
                                    <TableHead
                                        className="text-title-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">TYPE</TableHead>
                                    <TableHead
                                        className="text-title-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">PRICE</TableHead>
                                    <TableHead
                                        className="text-title-color text-base md:text-lg xl:text-xl dark:text-dark-description-color">CAPACITY</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="border-b dark:border-label-text-primary">
                                {tickets.map((ticket, index) => (
                                    <TableRow key={index} className="dark:border-label-text-primary">
                                        <TableCell
                                            className=" text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color ">{ticket.name}</TableCell>
                                        <TableCell
                                            className=" text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color ">
                                            {ticket.type === 'vip' ? (
                                                <Badge
                                                    className="bg-label-vip min-w-[100px] justify-center text-sm md:text-base xl:text-lg text-dark-description-color hover:bg-label-vip/90 rounded-[6px] font-normal flex w-14 items-center gap-x-1.5">
                                                    VIP
                                                    <RiStarFill className="h-2.5 w-2.5"/>
                                                </Badge>
                                            ) : ticket.type === 'premium' ? (
                                                <Badge
                                                    className="bg-label-premium  min-w-[100px] justify-center text-sm md:text-base xl:text-lg text-dark-description-color hover:bg-label-premium/90 rounded-[6px] font-normal flex w-14 items-center gap-x-1.5">
                                                    Premium
                                                </Badge>
                                            ) : ticket.type === 'regular' ? (
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
                                            className="text-green-600 font-bold text-lg">${ticket.price.toFixed(2)}</TableCell>
                                        <TableCell
                                            className="text-sm md:text-base xl:text-lg text-center">{ticket.capacity}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <RiMore2Line className="h-4 w-4"/>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent
                                                    className=" bg-white border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400  text-primary-color-text dark:backdrop-blur dark:bg-opacity-5 dark:text-secondary-color-text"
                                                    align="end">
                                                    <DropdownMenuItem
                                                        className=" text-sm md:text-base xl:text-lg ">Edit</DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        className="text-sm md:text-base xl:text-lg hover:text-red-500 text-red-600">
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
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
                        onClick={() => router.push("/organizer/events/")}
                        className="bg-primary-color w-24 rounded-[6px] text-secondary-color-text  hover:bg-primary-color/90 dark:text-secondary-color-text"
                        size={"lg"}>Save</Button>
                </div>
            </section>

        </section>
    )
}