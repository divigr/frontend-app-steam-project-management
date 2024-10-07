import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BoilerData {
  id: string
  tenLo: string
  diaChiLo: string
  congSuatLo: string
}

interface BoilerState {
  boilers: BoilerData[]
}

const initialState: BoilerState = {
  boilers: [],
}

export const boilerInfoSlice = createSlice({
  name: 'boilerInfo',
  initialState,
  reducers: {
    addBoiler: (state, action: PayloadAction<BoilerData>) => {
      state.boilers.push(action.payload)
    },
    deleteBoiler: (state, action: PayloadAction<string>) => {
      state.boilers = state.boilers.filter((boiler) => boiler.id !== action.payload)
    },
  },
})

export const { addBoiler, deleteBoiler } = boilerInfoSlice.actions

export default boilerInfoSlice.reducer
