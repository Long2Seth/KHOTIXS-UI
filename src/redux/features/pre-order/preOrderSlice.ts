import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "@/redux/store";

const initialState = {
    firstName: null as string | null,
    lastName: null as string | null,
    fullName: null as string | null,
    email: null as string | null,
    phoneNumber: null as string | null,
    gender: null as string | null,
    dateOfBirth: null as string | null,
    address: null as string | null,
}

const preOrderSlice = createSlice({
    name: 'preOrder',
    initialState,
    reducers: {
        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
        setFullName: (state, action: PayloadAction<string>) => {
            state.fullName = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPhoneNumber: (state, action: PayloadAction<string>) => {
            state.phoneNumber = action.payload;
        },
        setGender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload;
        },
        setDateOfBirth: (state, action: PayloadAction<string>) => {
            state.dateOfBirth = action.payload;
        },
        setAddress: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
    },
});

export const {
    setFirstName,
    setLastName,
    setFullName, 
    setEmail, 
    setPhoneNumber,
    setGender,
    setDateOfBirth,
    setAddress,
} = preOrderSlice.actions;

export default preOrderSlice.reducer;

export const selectPreOrder = (state: RootState) => state.preOrder;