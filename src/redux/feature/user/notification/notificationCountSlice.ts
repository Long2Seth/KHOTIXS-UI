import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';

type NotificationCountState = {
    unreadCount: number;
}

const initialState: NotificationCountState = {
    unreadCount: 0,
};

const notificationCountSlice = createSlice({
    name: 'notificationCount',
    initialState,
    reducers: {
        setUnreadCount: (state, action: PayloadAction<number>) => {
            state.unreadCount = action.payload;
        },
        incrementUnreadCount: (state) => {
            state.unreadCount += 1;
        },
        decrementUnreadCount: (state) => {
            state.unreadCount -= 1;
        },
    },
});

export const { setUnreadCount, incrementUnreadCount, decrementUnreadCount } = notificationCountSlice.actions;

export const selectUnreadCount = (state: RootState) => state.notificationCount.unreadCount;

export default notificationCountSlice.reducer;