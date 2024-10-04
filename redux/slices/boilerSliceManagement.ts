import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ShiftData {
  ca: string
  dateTime: string
  soLuongHoi: string
  soLuongDien: string
  hoaChat: string
  muoi: string
  do: string
  nhienLieu: string
}

interface BoilerState {
  shifts: ShiftData[]
}

const initialState: BoilerState = {
  shifts: [],
}

export const boilerSlice = createSlice({
  name: 'boiler',
  initialState,
  reducers: {
    addShift: (state: { shifts: any[] }, action: PayloadAction<ShiftData>) => {
      state.shifts.push(action.payload) // Ensure this is a plain object
    },
    deleteShift: (state: { shifts: any[] }, action: PayloadAction<number>) => {
      state.shifts.splice(action.payload, 1)
    },
  },
})

export const { addShift, deleteShift } = boilerSlice.actions
export default boilerSlice.reducer
