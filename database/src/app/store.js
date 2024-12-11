import { configureStore } from '@reduxjs/toolkit'
import { eventApiSlice } from '../feature/eventslice/eventApiSlice'




export const store = configureStore({
  reducer: {
 
    [eventApiSlice.reducerPath]: eventApiSlice.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventApiSlice.middleware),
})
