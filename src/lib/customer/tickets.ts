export type TicketType = {
    id: string
    name: string
    event: string
    price: number
    free?: boolean
    soldOut?: boolean
    quantity: number
    date: string
    mmm: string
    dd: string
    yyyy: string
}

export const tickets: TicketType[] = [
    { id: 'vip', event:'THE Q RISE OF THE QUEEN', name: 'VIP - TICKETS', price: 0, free: true, soldOut: true, quantity: 0, date: 'Friday',dd: '30', mmm: 'NOV',  yyyy: '2024'},
    { id: 'premium', event:'THE Q RISE OF THE QUEEN', name: 'PREMIUM - TICKETS', price: 30.00, soldOut: true, quantity: 0, date: 'Friday',dd: '30', mmm: 'NOV',  yyyy: '2024'},
    { id: 'standing', event:'THE Q RISE OF THE QUEEN', name: 'STANDING - TICKETS', price: 15.00, soldOut: false, quantity: 3, date: 'Friday',dd: '30', mmm: 'NOV',  yyyy: '2024'}
];