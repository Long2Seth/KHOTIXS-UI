'use client'
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LuUpload } from "react-icons/lu";
import { z } from 'zod';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FormSectionComponent } from "@/components/organizer/event/component/FormSectionComponent";
import { DatePickerComponent } from "@/components/organizer/event/component/DatePickerComponent";
import { format } from "date-fns";
import { EventType } from "@/lib/customer/event";

type Props = {
    id: string;
}

const eventSchema = z.object({
    eventTitle: z.string().min(1, "Event title is required"),
    eventCategoryName: z.string().min(1, "Category is required"),
    location: z.string().min(1, "Location is required"),
    startedDate: z.string().min(1, "Start date is required"),
    endedDate: z.string().min(1, "End date is required"),
    description: z.string().optional(),
    thumbnail: z.string().nullable(),
});

export function EditEvent({ id }: Props) {
    const router = useRouter();
    const [startedDate, setStartedDate] = useState<Date | undefined>();
    const [endedDate, setEndedDate] = useState<Date | undefined>();
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [action, setAction] = useState<string>("");
    const [eventData, setEventData] = useState<EventType>({
        eventTitle: "",
        eventCategoryName: "",
        location: "",
        startedDate: "",
        endedDate: "",
        description: "",
        thumbnail: null,
    });

    const handleSectionClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const getEventDate = async () => {
        try {
            const response = await fetch(`/event-ticket/api/v1/events/${id}`, {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setEventData(data);
            setStartedDate(new Date(data.startedDate));
            setEndedDate(new Date(data.endedDate));
            setThumbnail(data.thumbnail);
            console.log("Event data:", data);
        } catch (error) {
            console.error("Error fetching event data:", error);
        }
    };

    useEffect(() => {
        getEventDate();
    }, [id]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('/asset/api/v1/files', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setThumbnail(data.uri);
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        }
    };

    const calculateCapacity = (start: Date | undefined, end: Date | undefined): number => {
        if (!start || !end) return 0;
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEventData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formatStartedDate = startedDate ? format(startedDate, "yyyy-MM-dd'T'HH:mm") : "";
        const formatEndedDate = endedDate ? format(endedDate, "yyyy-MM-dd'T'HH:mm") : "";

        const formData = {
            ...eventData,
            startedDate: formatStartedDate,
            endedDate: formatEndedDate,
            thumbnail,
            capacity: calculateCapacity(startedDate, endedDate),
        };

        const result = eventSchema.safeParse(formData);
        if (!result.success) {
            const newErrors: Record<string, string> = {};
            result.error.errors.forEach(error => {
                if (error.path.length > 0) {
                    newErrors[error.path[0] as string] = error.message;
                }
            });
            setErrors(newErrors);
            console.log("Validation Errors:", newErrors);
        } else {
            setErrors({});
            try {
                const response = await fetch(`/event-ticket/api/v1/events/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log("Form submitted successfully");

                if (action === "save") {
                    router.push("/organizer/events");
                } else if (action === "saveAndContinue") {
                    router.push(`/organizer/events/tickets/${data.uuid}`);
                }
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}
              className=" bg-white rounded-[6px] p-10 dark:bg-khotixs-background-dark dark:border dark:border-dark-border-color mx-5 lg:mx-10">
            <Card className=" w-full rounded-[6px]">
                <CardContent className=" w-full rounded-[6px]">
                    <section className="space-y-6">
                        <p className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">Edit
                            Event</p>
                        <section className="grid md:grid-cols-2 gap-4">
                            <section className=" flex flex-col space-y-2 ">
                                <FormSectionComponent
                                    id="eventTitle"
                                    name="eventTitle"
                                    label="Event title"
                                    placeholder="Enter event title"
                                    error={errors.eventTitle}
                                    required
                                    defaultValue={eventData.eventTitle}
                                    onChange={handleInputChange}
                                />
                                <FormSectionComponent
                                    id="eventCategoryName"
                                    name="eventCategoryName"
                                    label="Category"
                                    placeholder="Select category"
                                    error={errors.eventCategoryName}
                                    required
                                    defaultValue={eventData.eventCategoryName}
                                    onChange={handleInputChange}
                                />
                                <FormSectionComponent
                                    id="location"
                                    name="location"
                                    label="Location"
                                    placeholder="Enter location"
                                    error={errors.location}
                                    required
                                    defaultValue={eventData.location}
                                    onChange={handleInputChange}
                                />
                                <DatePickerComponent
                                    label="Start Date"
                                    date={startedDate}
                                    setDate={setStartedDate}
                                    error={errors.startedDate}
                                    required
                                />
                                <DatePickerComponent
                                    label="End Date"
                                    date={endedDate}
                                    setDate={setEndedDate}
                                    error={errors.endedDate}
                                    required
                                />
                                <FormSectionComponent
                                    id="description"
                                    name="description"
                                    label="Event Description"
                                    placeholder="Enter event description"
                                    type="textarea"
                                    error={errors.description}
                                    defaultValue={eventData.description}
                                    onChange={handleInputChange}
                                />
                            </section>
                            <section className=" w-full pt-[30px]">
                                <section className=" w-full h-full border-gray-400 border border-dashed rounded-[6px]"
                                         onClick={handleSectionClick}>
                                    <div className=" w-full h-full flex flex-col justify-center items-center ">
                                        {thumbnail ? (
                                            <Image unoptimized width={100} height={100} src={thumbnail} alt="Uploaded"
                                                   className="h-full w-full object-cover rounded-[6px]"/>
                                        ) : (
                                            <>
                                                <LuUpload className=" h-[50px] w-[50px] text-gray-400"/>
                                                <p className=" text-gray-400">Drop file here or click to upload
                                                    here </p>
                                            </>
                                        )}
                                    </div>
                                    <input type="file" ref={fileInputRef} style={{display: 'none'}}
                                           onChange={handleFileChange}/>
                                </section>
                            </section>
                        </section>
                    </section>
                </CardContent>
            </Card>
            <section className="flex flex-wrap justify-end gap-4 pt-6 ">
                <Button onClick={() => router.push("/organizer/events")}
                        className="border-red-600 text-red-500 rounded-[6px] hover:text-red-600 hover:bg-red-50 "
                        variant="outline">
                    Cancel
                </Button>
                <Button type="submit" onClick={() => setAction("save")}
                        className="bg-primary-color border border-primary-color rounded-[6px] text-secondary-color-text hover:bg-primary-color/80 ">
                    Save
                </Button>
            </section>
        </form>
    );
}