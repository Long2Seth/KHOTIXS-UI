// for notification in api.ts
import type { Notification } from '@/type/notification';
const API_BASE_URL = 'http://localhost:8080/api/v1';

export const fetchNotifications = async (userId: string): Promise<Notification[]> => {
    const response = await fetch(`${API_BASE_URL}/notifications/${userId}`);
    return response.json();
};