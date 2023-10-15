import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { newmarketAPI } from '../api/api';



export const store = configureStore({
    reducer: {
        [newmarketAPI.reducerPath]: newmarketAPI.reducer,
        // consultationGlobalFilterTimelineTimeFrame: consultationGlobalFilterTimelineTimeFrameReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}).concat(newmarketAPI.middleware),
});

setupListeners(store.dispatch);
