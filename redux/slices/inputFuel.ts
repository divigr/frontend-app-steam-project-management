// redux/slices/fuelSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FuelInput {
  id: string
  boilerId: string
  dateTime: string
  sku: string
  soPhieuCan: string
  soThuTuXe: string
  chatLuongNhienLieu: string
  bienSoXe: string
  khoiLuongTongXe: number
  khoiLuongXe: number
  khoiLuongHang: number
  loaiHang: string
  doAm: number
}

interface FuelState {
  fuelInputs: FuelInput[]
}

const initialState: FuelState = {
  fuelInputs: [],
}

const fuelSlice = createSlice({
  name: 'fuel',
  initialState,
  reducers: {
    addFuelInput: (state, action: PayloadAction<FuelInput>) => {
      state.fuelInputs.push(action.payload)
    },
    deleteFuelInput: (state, action: PayloadAction<string>) => {
      state.fuelInputs = state.fuelInputs.filter((input) => input.id !== action.payload)
    },
  },
})

export const { addFuelInput, deleteFuelInput } = fuelSlice.actions
export default fuelSlice.reducer
