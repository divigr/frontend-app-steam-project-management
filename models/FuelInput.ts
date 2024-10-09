export interface FuelInput {
  id: string
  boilerId: string
  dateTime: string
  sku: string
  soPhieuCan: string
  soThuTuXe: string
  chatLuongNhienLieu: string
  bienSoXe: string
  nhaCungCap: string
  khoiLuongTongXe: number
  khoiLuongXe: number
  khoiLuongHang: number
  loaiHang: string
  doAm: number
  nguoiNhanHang: string
}

export interface FuelState {
  fuelInputs: FuelInput[]
}
