import Link from 'next/link'
import styled from 'styled-components'

// Define the BoilerData type that matches your Redux slice
interface BoilerData {
  id: string
  tenLo: string
  diaChiLo: string
  congSuatLo: string
}

interface BoilerInfoModalProps {
  boiler: BoilerData | null
  onClose: () => void
}

const BoilerInfoModal: React.FC<BoilerInfoModalProps> = ({ boiler, onClose }) => {
  if (!boiler) return null

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Thông Tin Lò</h2>
        <ModalBody>
          <InfoRow>
            <InfoLabel>Tên Lò:</InfoLabel>
            <InfoValue>{boiler.tenLo}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Địa chỉ:</InfoLabel>
            <InfoValue>{boiler.diaChiLo}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Công suất:</InfoLabel>
            <InfoValue>{boiler.congSuatLo}</InfoValue>
          </InfoRow>
        </ModalBody>
        <ModalActions>
          <Link href={`/thong-tin-lo/add?id=${boiler.id}`}>
            <EditButton>Edit</EditButton>
          </Link>
          {/* Close Button */}
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  )
}

export default BoilerInfoModal

// Styled components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
`

const ModalBody = styled.div`
  margin-bottom: 20px;
`

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`

const InfoLabel = styled.span`
  font-weight: bold;
  color: #555;
  font-size: 16px;
`

const InfoValue = styled.span`
  color: #777;
  font-size: 16px;
  text-align: right;
`

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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

  &:hover {
    background-color: #c0392b;
  }
`
