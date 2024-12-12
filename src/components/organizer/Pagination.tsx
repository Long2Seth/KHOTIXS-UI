'use server'

import { attendanceData } from "@/lib/organizer/attendanceData";

export async function getAttendanceData(page: number, itemsPerPage: number, search: string, eventFilter: string, publishFilter: string) {
    // Filter the data based on search term and other filters
    const filteredData = attendanceData.filter(attendance =>
        (attendance.userName.toLowerCase().includes(search.toLowerCase()) ||
            attendance.id.toLowerCase().includes(search.toLowerCase())) &&
        (eventFilter === '' || attendance.eventName === eventFilter) &&
        (publishFilter === '' || attendance.status === publishFilter)
    );

    // Calculate total items and pages
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Paginate the filtered data
    const paginatedData = filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return {
        data: paginatedData,
        totalItems,
        totalPages,
    };
}