"use client"

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {events} from "@/lib/organizer/eventData";
import {useRouter} from "next/navigation";

export function EventsTable() {

    const router = useRouter();

    return (
        <section
            className="  space-y-[50px] md:space-y-[80px] xl:space-y-[100px] my-[50px] md:my-[80px] xl:my-[100px]  ">

            <div className=" space-y-5 ">

                <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">EVENTS
                    MANAGEMENT</h1>

                <div
                    className=" bg-white p-10 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5 space-y-4 ">

                    <div className="flex items-center gap-4">
                        <Input
                            className=" border-[1px] text-md md:text-lg border-light-border-color rounded-[6px] placeholder:text-gray-400 bg-khotixs-background-white text-primary-color-text"
                            placeholder="Search "/>
                        <Select>
                            <SelectTrigger
                                className="w-[200px] border-[1px] border-light-border-color rounded-[6px] bg-khotixs-background-white text-primary-color-text ">
                                <SelectValue className=" text-gray-300 " placeholder="Categories"/>
                            </SelectTrigger>
                            <SelectContent
                                className="bg-khotixs-background-white border-[1px] border-light-border-color rounded-[6px] text-primary-color-text ">
                                <SelectItem value="concert">Concert</SelectItem>
                                <SelectItem value="general">General</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger
                                className="w-[180px] border-[1px] border-light-border-color rounded-[6px] bg-khotixs-background-white text-primary-color-text ">
                                <SelectValue placeholder="Publish"/>
                            </SelectTrigger>
                            <SelectContent
                                className="border-[1px] items-start border-light-border-color rounded-[6px] bg-khotixs-background-white text-primary-color-text ">
                                <SelectItem value="published">Published</SelectItem>
                                <SelectItem value="unpublished">Unpublished</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button
                            className=" bg-primary-color text-secondary-color-text rounded-[6px] hover:bg-primary-color"
                            onClick={() => router.push("/organizer/events/create")}
                        >
                            New Event
                        </Button>
                    </div>

                    <div className=" border-[1px] border-light-border-color rounded-[6px] ">
                        <Table>
                            <TableHeader>
                                <TableRow className=" border-light-border-color  ">
                                    <TableHead
                                        className=" dark:text-secondary-color-text">EVENT
                                        TITLE</TableHead>
                                    <TableHead
                                        className=" dark:text-secondary-color-text">CATEGORY</TableHead>
                                    <TableHead
                                        className=" dark:text-secondary-color-text">START
                                        AT</TableHead>
                                    <TableHead
                                        className=" dark:text-secondary-color-text">END
                                        AT</TableHead>
                                    <TableHead
                                        className=" dark:text-secondary-color-text">STATUS</TableHead>
                                    <TableHead className="w-[50px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className=" border-gray-300 dark:bg-khotixs-background-dark  ">
                                {events.map((event) => (
                                    <TableRow className="hover:bg-gray-100 dark:hover:bg-khotixs-background-dark"
                                              key={event.title}>
                                        <TableCell
                                            className=" dark:text-dark-description-color">{event.title}</TableCell>
                                        <TableCell
                                            className=" dark:text-dark-description-color">{event.category}</TableCell>
                                        <TableCell
                                            className=" dark:text-dark-description-color">{event.startAt}</TableCell>
                                        <TableCell
                                            className=" dark:text-dark-description-color">{event.endAt}</TableCell>
                                        <TableCell>
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-[6px] text-xs font-medium ${event.status === 'Publish' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>{event.status}</span>
                                        </TableCell>
                                        {/*<TableCell>*/}
                                        {/*    <Button variant="ghost" size="icon">*/}
                                        {/*        <MoreVertical className="h-4 w-4"/>*/}
                                        {/*    </Button>*/}
                                        {/*</TableCell>*/}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                </div>
            </div>
        </section>
    );
}
