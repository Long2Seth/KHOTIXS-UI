// src/redux/feature/user/order/OrderSlice.ts
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
    userUuid: string | null;
}

const initialState: OrderState = {
    eventId: null,
    eventTitle: null,
    tickets: [],
    userUuid: null,
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
        setUserUuid: (state, action: PayloadAction<string>) => {
            state.userUuid = action.payload;
        },
    },
});

export const {setOrder, setUserUuid} = orderSlice.actions;
export default orderSlice.reducer;