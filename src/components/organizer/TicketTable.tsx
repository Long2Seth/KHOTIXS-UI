'use client'
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {RiEyeLine, RiEyeOffLine, RiMore2Line, RiStarFill} from "react-icons/ri";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

import {useRouter} from "next/navigation";

export default function TicketTable() {
    const router = useRouter();
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-bold">TICKETS</h2>

            <div className="flex items-center gap-4">
                <Input className="max-w-xs" placeholder="Search..."/>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Ticket Type"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="vip">VIP</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="regular">Regular</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Publish"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="unpublished">Unpublished</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Display"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Display</SelectItem>
                        <SelectItem value="visible">Visible</SelectItem>
                        <SelectItem value="hidden">Hidden</SelectItem>
                    </SelectContent>
                </Select>
                <Button onClick={() => router.push("/events/tickets")} className="bg-primary-color hover:bg-primary-color/90">New Ticket</Button>
            </div>

            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>TICKET NAME</TableHead>
                            <TableHead>TICKET TYPE</TableHead>
                            <TableHead>PUBLISH</TableHead>
                            <TableHead>DISPLAY</TableHead>
                            <TableHead>SOLD</TableHead>
                            <TableHead>REVENUE</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>VIP</TableCell>
                            <TableCell>
                                <Badge
                                    className="bg-label-vip hover:bg-label-vip/90 rounded-[6px] font-normal flex w-14 items-center gap-x-1.5">
                                    VIP
                                    <RiStarFill className="h-2.5 w-2.5"/>
                                </Badge></TableCell>
                            <TableCell>
                                <Badge
                                    className="bg-label-published hover:bg-label-published/90 rounded-[6px] font-normal">Published</Badge>
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
                        <TableRow>
                            <TableCell>PREMIUM</TableCell>
                            <TableCell>
                                <Badge
                                    className="bg-label-premium hover:bg-label-premium/90 rounded-[6px] font-normal">Premium</Badge>
                            </TableCell>
                            <TableCell>
                                <Badge
                                    className="bg-label-published hover:bg-label-published/90 rounded-[6px] font-normal">Published</Badge>
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
                        <TableRow>
                            <TableCell>REGULAR</TableCell>
                            <TableCell>
                                <Badge
                                    className="bg-label-regular hover:bg-label-regular/90 rounded-[6px] font-normal">Regular</Badge>
                            </TableCell>
                            <TableCell>
                                <Badge
                                    className="bg-label-paid hover:bg-label-paid/90 rounded-[6px] font-normal">Unpublish</Badge>
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
            </Card>
        </section>
    )
}
