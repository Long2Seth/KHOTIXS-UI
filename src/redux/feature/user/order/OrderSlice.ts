import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Ticket {
    ticketId: string;
    quantity: number;
    price: number;
    ticketType: string;
}

interface OrderState {
    eventId: string | null;
    eventTitle: string | null;
    tickets: Ticket[];
}

const initialState: OrderState = {
    eventId: null,
    eventTitle: null,
    tickets: [],
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<{ eventId: string; eventTitle: string; tickets: Ticket[] }>) => {
            state.eventId = action.payload.eventId;
            state.tickets = action.payload.tickets;
            state.eventTitle = action.payload.eventTitle;
        },
    },
});

export const {setOrder} = orderSlice.actions;
export default orderSlice.reducer;