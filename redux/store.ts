import { configureStore } from '@reduxjs/toolkit'
import boilerReducer from './slices/boilerSliceManagement'
import boilerInfoReducer from './slices/boilerInfo'
import fuelReducer from './slices/inputFuel'

const store = configureStore({
  reducer: {
    boiler: boilerReducer, // Reducer to manage shifts
    boilerInfo: boilerInfoReducer, // Reducer to manage boiler information
    inputFuel: fuelReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
