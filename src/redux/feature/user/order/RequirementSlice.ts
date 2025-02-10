import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Ticket = {
    ticketId: string;
    quantity: number;
    price: string;
}

type OrderState = {
    eventId: string;
    tickets: Ticket[];
    userId:string;
    formData: {
        fullName: string;
        email: string;
        phoneNumber: string;
        userId: string;
    } | null;
}

const initialState: OrderState = {
    eventId: '',
    tickets: [],
    formData: null,
    userId: ''
};

const requirementSlice = createSlice({
    name: 'requirement',
    initialState,
    reducers: {
        setOrderData(state, action: PayloadAction<OrderState>) {
            state.eventId = action.payload.eventId;
            state.tickets = action.payload.tickets;
            state.formData = action.payload.formData;
            state.userId = action.payload.userId;
        },
    },
});

export const { setOrderData } = requirementSlice.actions;
export default requirementSlice.reducer;