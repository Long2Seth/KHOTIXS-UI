// import { Client } from '@stomp/stompjs';
//
// export const createWebSocketClient = (userId: string) => {
//     const client = new Client({
//         brokerURL: 'ws://localhost:8888/ws',
//         connectHeaders: {
//             userId: userId,
//         },
//         debug: (str) => {
//             console.log(str);
//         },
//         reconnectDelay: 5000,
//         heartbeatIncoming: 4000,
//         heartbeatOutgoing: 4000,
//     });
//
//     return client;
// };