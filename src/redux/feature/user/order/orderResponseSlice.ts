import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';
import { OrderResponseType } from '@/lib/types/customer/QrCode';

type OrderResponseState = {
    orderResponse: OrderResponseType | null;
}

const initialState: OrderResponseState = {
    orderResponse: null,
};

const orderResponseSlice = createSlice({
    name: 'orderResponse',
    initialState,
    reducers: {
        setOrderResponse: (state, action: PayloadAction<OrderResponseType>) => {
            state.orderResponse = action.payload;
        },
    },
});

export const { setOrderResponse } = orderResponseSlice.actions;

export const selectOrderResponse = (state: RootState) => state.orderResponse.orderResponse;

export default orderResponseSlice.reducer;