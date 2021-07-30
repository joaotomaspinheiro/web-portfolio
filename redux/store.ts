import { configureStore, createStore } from "@reduxjs/toolkit"
import { colorSchemeReducer, routesReducer } from "@redux/reducers";

export const store = configureStore({
    reducer: {
        route: routesReducer,
        colorScheme: colorSchemeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;