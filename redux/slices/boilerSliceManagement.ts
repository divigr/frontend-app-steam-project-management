import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ShiftData {
  id: string
  boilerId: string
  ca: string
  dateTime: string
  soLuongHoi: string
  soLuongDien: string
  hoaChat: string
  muoi: string
  dau_do: string
  nhienLieu: string
}

interface BoilerShiftState {
  shifts: ShiftData[]
}

const initialState: BoilerShiftState = {
  shifts: [],
}

export const boilerSlice = createSlice({
  name: 'boilerShift',
  initialState,
  reducers: {
    addShift: (state, action: PayloadAction<ShiftData>) => {
      state.shifts.push(action.payload)
    },
    deleteShift: (state, action: PayloadAction<string>) => {
      state.shifts = state.shifts.filter((shift) => shift.id !== action.payload)
    },
  },
})

export const { addShift, deleteShift } = boilerSlice.actions

export default boilerSlice.reducer
