import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

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

interface ViewModalProps {
  fuelInput: FuelInput | null
  onClose: () => void
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 600px;
  max-width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`

const InfoRow = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.6; /* Improved spacing between lines */
  margin-bottom: 10px; /* Space between each info row */
`

const EditButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`

const CloseButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 45%;

  &:hover {
    background-color: #c0392b;
  }
`

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
  border-bottom: 2px solid #f2f2f2;
  padding-bottom: 10px;
  text-align: center;
`

const ViewFuelInputModal: React.FC<ViewModalProps> = ({ fuelInput, onClose }) => {
  if (!fuelInput) return null

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Thông Tin Nhiên Liệu Đầu Vào</Title>
        <InfoRow>
          <strong>Date/Time:</strong> {fuelInput.dateTime}
        </InfoRow>
        <InfoRow>
          <strong>SKU:</strong> {fuelInput.sku}
        </InfoRow>
        <InfoRow>
          <strong>Số Phiếu Cân:</strong> {fuelInput.soPhieuCan}
        </InfoRow>
        <InfoRow>
          <strong>Số Thứ Tự Xe:</strong> {fuelInput.soThuTuXe}
        </InfoRow>
        <InfoRow>
          <strong>Chất Lượng:</strong> {fuelInput.chatLuongNhienLieu}
        </InfoRow>
        <InfoRow>
          <strong>Biển Số Xe:</strong> {fuelInput.bienSoXe}
        </InfoRow>
        <InfoRow>
          <strong>Khối Lượng Hàng:</strong> {fuelInput.khoiLuongHang}
        </InfoRow>
        <InfoRow>
          <strong>Loại Hàng:</strong> {fuelInput.loaiHang}
        </InfoRow>
        <InfoRow>
          <strong>Độ Ẩm:</strong> {fuelInput.doAm}%
        </InfoRow>
        <ModalActions>
          <Link href={`/thong-tin-lo/quan-ly-lo/nhien-lieu-dau-vao/add?id=${fuelInput.id}`}>
            <EditButton>Edit</EditButton>
          </Link>
          <CloseButton onClick={onClose}>Close</CloseButton>{' '}
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  )
}

export default ViewFuelInputModal
