// boilerSliceManagement.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BoilerData {
  tenLo: string
  diaChiLo: string
  congSuatLo: string
}

interface BoilerState {
  boilers: BoilerData[]
}

const initialState: BoilerState = {
  boilers: [], // An array to store multiple boiler entries
}

export const boilerInfoSlice = createSlice({
  name: 'boilerInfo',
  initialState,
  reducers: {
    addBoiler: (state, action: PayloadAction<BoilerData>) => {
      state.boilers.push(action.payload) // Add new boiler information to the list
    },
    deleteBoiler: (state, action: PayloadAction<number>) => {
      state.boilers.splice(action.payload, 1) // Remove boiler based on index
    },
  },
})

export const { addBoiler, deleteBoiler } = boilerInfoSlice.actions

export default boilerInfoSlice.reducer
