import { configureStore } from '@reduxjs/toolkit'
import boilerReducer from './slices/boilerSliceManagement'
import boilerInfoReducer from './slices/boilerInfo'

const store = configureStore({
  reducer: {
    boiler: boilerReducer, // Reducer to manage shifts
    boilerInfo: boilerInfoReducer, // Reducer to manage boiler information
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
