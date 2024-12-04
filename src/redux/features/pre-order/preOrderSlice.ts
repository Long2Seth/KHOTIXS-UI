import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "@/redux/store";

const initialState: {
    username: string,
    email: string,
    phoneNumber: string,
} = {
    username: '',
    email: '',
    phoneNumber: '',
}

const preOrderSlice = createSlice({
    name: 'preOrder',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPhoneNumber: (state, action: PayloadAction<string>) => {
            state.phoneNumber = action.payload;
        },
    },
});

export const {setUsername, setEmail, setPhoneNumber} = preOrderSlice.actions;
export const selectPreOrder = (state: RootState) => state.preOrder;