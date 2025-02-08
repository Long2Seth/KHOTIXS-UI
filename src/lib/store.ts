import { configureStore } from '@reduxjs/toolkit';
import { khotixsApi } from '@/lib/api';
import notificationCountReducer from '@/redux/feature/user/notification/notificationCountSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            [khotixsApi.reducerPath]: khotixsApi.reducer,
            notificationCount: notificationCountReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(khotixsApi.middleware),
    });
};

export const store = makeStore();

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];