'use client'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {RiEyeLine, RiEyeOffLine, RiMore2Line, RiStarFill} from "react-icons/ri";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

import {useRouter} from "next/navigation";
import {Input} from "@/components/ui/input";

export default function TicketTable() {
    const router = useRouter();
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-bold">TICKETS</h2>

            <div className="lg:flex items-center grid grid-cols-2 gap-4">
                <Input className="col-span-2 dark:border-label-text-primary max-w-full md:max-w-xs bg-transparent" placeholder="Search..."/>
                <Select>
                    <SelectTrigger className="w-[180px] dark:border-label-text-primary">
                        <SelectValue placeholder="Ticket Type"/>
                    </SelectTrigger>
                    <SelectContent className="dark:bg-khotixs-background-dark">
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="vip">VIP</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="regular">Regular</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px] dark:border-label-text-primary">
                        <SelectValue placeholder="Publish"/>
                    </SelectTrigger>
                    <SelectContent className="dark:bg-khotixs-background-dark">
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="unpublished">Unpublished</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px] dark:border-label-text-primary">
                        <SelectValue placeholder="Display"/>
                    </SelectTrigger>
                    <SelectContent className="dark:bg-khotixs-background-dark">
                        <SelectItem value="all">All Display</SelectItem>
                        <SelectItem value="visible">Visible</SelectItem>
                        <SelectItem value="hidden">Hidden</SelectItem>
                    </SelectContent>
                </Select>
                <Button onClick={() => router.push("/organizer/events/tickets")} className="bg-primary-color hover:bg-primary-color/90 dark:text-secondary-color-text">New Ticket</Button>
            </div>

            <div className="border rounded-[6px] dark:border-label-text-primary">
                <Table>
                    <TableHeader>
                        <TableRow className="dark:border-label-text-primary">
                            <TableHead className="dark:text-secondary-color-text">TICKET NAME</TableHead>
                            <TableHead className="dark:text-secondary-color-text">TICKET TYPE</TableHead>
                            <TableHead className="dark:text-secondary-color-text">PUBLISH</TableHead>
                            <TableHead className="dark:text-secondary-color-text">DISPLAY</TableHead>
                            <TableHead className="dark:text-secondary-color-text">SOLD</TableHead>
                            <TableHead className="dark:text-secondary-color-text">REVENUE</TableHead>
                            <TableHead className="dark:text-secondary-color-text"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="dark:border-label-text-primary">
                            <TableCell>VIP</TableCell>
                            <TableCell>
                                <Badge className="bg-label-vip hover:bg-label-vip/90 rounded-[6px] text-secondary-color-text font-normal flex w-14 items-center gap-x-1.5">
                                    VIP
                                    <RiStarFill className="h-2.5 w-2.5"/>
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <Badge
                                    className="bg-label-published hover:bg-label-published/90 rounded-[6px] text-label-text-primary font-normal">Published</Badge>
                            </TableCell>
                            <TableCell><RiEyeLine className="h-5 w-5 text-muted-foreground"/></TableCell>
                            <TableCell>10/12</TableCell>
                            <TableCell className="text-green-600 font-bold text-lg">$100.00</TableCell>
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <RiMore2Line className="h-5 w-5"/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                        <DropdownMenuItem>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                        <TableRow className="dark:border-label-text-primary">
                            <TableCell>PREMIUM</TableCell>
                            <TableCell>
                                <Badge
                                    className="bg-label-premium hover:bg-label-premium/90 rounded-[6px] text-label-text-primary font-normal">Premium</Badge>
                            </TableCell>
                            <TableCell>
                                <Badge
                                    className="bg-label-published hover:bg-label-published/90 rounded-[6px] text-label-text-primary font-normal">Published</Badge>
                            </TableCell>
                            <TableCell><RiEyeLine className="h-5 w-5 text-muted-foreground"/></TableCell>
                            <TableCell>0/12</TableCell>
                            <TableCell className="text-green-600 font-bold text-lg">$0.00</TableCell>
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <RiMore2Line className="h-5 w-5"/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                        <DropdownMenuItem>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                        <TableRow className="dark:border-label-text-primary">
                            <TableCell>REGULAR</TableCell>
                            <TableCell>
                                <Badge
                                    className="bg-label-regular hover:bg-label-regular/90 rounded-[6px] text-label-text-primary font-normal">Regular</Badge>
                            </TableCell>
                            <TableCell>
                                <Badge className="bg-label-paid hover:bg-label-paid/90 rounded-[6px] text-label-text-primary font-normal">Unpublish</Badge>
                            </TableCell>
                            <TableCell><RiEyeOffLine className="h-5 w-5 text-muted-foreground"/></TableCell>
                            <TableCell>0/10</TableCell>
                            <TableCell className="text-green-600 font-bold text-lg">$0.00</TableCell>
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <RiMore2Line className="h-5 w-5"/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                        <DropdownMenuItem>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}
