//
// import type { Notification } from '@/types/notification';
//
// const API_BASE_URL = 'http://localhost:8081/api/v1';
//
// // Fetch notifications from the backend
// export const fetchNotifications = async (): Promise<Notification[]> => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/kafka-producer/event-public`);
//         if (!response.ok) {
//             throw new Error(`Error fetching notifications: ${response.statusText}`);
//         }
//         const notifications = await response.json();
//         localStorage.setItem('notifications', JSON.stringify(notifications));
//         return notifications;
//     } catch (error) {
//         console.error('Error fetching notifications:', error);
//         const cachedNotifications = localStorage.getItem('notifications');
//         return cachedNotifications ? JSON.parse(cachedNotifications) : [];
//     }
// };
//
// // Post a new notification to the backend
// export const postNotification = async (notification: Notification): Promise<void> => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/kafka-producer/event-public`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(notification),
//         });
//         if (!response.ok) {
//             throw new Error(`Error posting notification: ${response.statusText}`);
//         }
//
//         // Update local storage
//         const cachedNotifications = localStorage.getItem('notifications');
//         const notifications: Notification[] = cachedNotifications ? JSON.parse(cachedNotifications) : [];
//         notifications.push(notification);
//         localStorage.setItem('notifications', JSON.stringify(notifications));
//     } catch (error) {
//         console.error('Error posting notification:', error);
//     }
// };
//
//
// // Mark a notification as read/unread
// export const markAsRead = async (id: string, status: boolean): Promise<void> => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/notifications/${id}/status?read=${status}`, {
//             method: 'PUT',
//         });
//         if (!response.ok) {
//             throw new Error(`Error marking notification as read: ${response.statusText}`);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// };
//
// // Remove a notification
// export const removeNotification = async (id: string): Promise<void> => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/notifications/${id}`, {
//             method: 'DELETE',
//         });
//         if (!response.ok) {
//             throw new Error(`Error removing notification: ${response.statusText}`);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// };
//
//

// import type { Notification } from '@/type/notification';
//
// const API_BASE_URL = '/api/v1';
//
// export const fetchNotifications = async (): Promise<Notification[]> => {
//     const response = await fetch(`${API_BASE_URL}/notifications/event-public`);
//     if (!response.ok) {
//         throw new Error(`Error fetching notifications: ${response.statusText}`);
//     }
//     return response.json();
// };
//
// export const markAsRead = async (id: string, status: boolean): Promise<void> => {
//     await fetch(`${API_BASE_URL}/notifications/${id}/status?read=${status}`, {
//         method: 'PUT',
//     });
// };
//
// export const removeNotification = async (id: string): Promise<void> => {
//     await fetch(`${API_BASE_URL}/notifications/${id}`, {
//         method: 'DELETE',
//     });
// };

// import { Notification } from '@/types/notification';
//
// const API_BASE_URL = 'http://localhost:8081/api/v1';
//
// export const fetchNotifications = async (): Promise<Notification[]> => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/kafka-producer/event-public`);
//         if (!response.ok) {
//             throw new Error(`Error fetching notifications: ${response.statusText}`);
//         }
//         const notifications = await response.json();
//         localStorage.setItem('notifications', JSON.stringify(notifications));
//         return notifications;
//     } catch (error) {
//         console.error('Error fetching notifications:', error);
//         const cachedNotifications = localStorage.getItem('notifications');
//         return cachedNotifications ? JSON.parse(cachedNotifications) : [];
//     }
// };
//
// export const postNotification = async (notification: Notification): Promise<void> => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/kafka-producer/event-public`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(notification),
//         });
//         if (!response.ok) {
//             throw new Error(`Error posting notification: ${response.statusText}`);
//         }
//
//         const cachedNotifications = localStorage.getItem('notifications');
//         const notifications: Notification[] = cachedNotifications ? JSON.parse(cachedNotifications) : [];
//         notifications.push(notification);
//         localStorage.setItem('notifications', JSON.stringify(notifications));
//     } catch (error) {
//         console.error('Error posting notification:', error);
//     }
// };
//
// export const markAsRead = async (id: string, status: boolean): Promise<void> => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/kafka-producer/${id}/status?read=${status}`, {
//             method: 'PUT',
//         });
//         if (!response.ok) {
//             throw new Error(`Error marking notification as read: ${response.statusText}`);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// };
//
// export const removeNotification = async (id: string): Promise<void> => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/kafka-producer/${id}`, {
//             method: 'DELETE',
//         });
//         if (!response.ok) {
//             throw new Error(`Error removing notification: ${response.statusText}`);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// };
//