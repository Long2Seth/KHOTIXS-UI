import {configureStore} from '@reduxjs/toolkit'
import { khotixsApi} from "@/lib/api";


export const makeStore = () => {
    return configureStore({
        reducer: {
            [khotixsApi.reducerPath]: khotixsApi.reducer,
            // [istadLmsApi.reducerPath]: istadLmsApi.reducer,
            // studentCourseApi: studentCourseApi.reducer,
            // instructorCourseApi: instructorCourseApi.reducer,
            // studentAchievementApi: studentAchievementApi.reducer,
            // Reportstudent: ReportstudentSlice,
            // Reportinstructor: ReportinstructorSlice,
            // priceYearOfStudy: priceSlice,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(khotixsApi.middleware),
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
