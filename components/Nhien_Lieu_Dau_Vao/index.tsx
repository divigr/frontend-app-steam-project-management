import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import styled from 'styled-components'
import { RootState } from '../../redux/store'
import { deleteFuelInput } from '../../redux/slices/inputFuel'
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`

const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`
const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
  text-align: left;
`

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`
const ActionButton = styled.button`
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    color: #000;
  }
  svg {
    height: 1.2em;
    width: 1.2em;
  }
`

const NhiemLieuDauVaoIndex = () => {
  const dispatch = useDispatch()

  // Get the list of fuel inputs from Redux
  const fuelInputs = useSelector((state: RootState) => state.inputFuel.fuelInputs)
  const infoLo = useSelector((state: RootState) => state.boilerInfo.boilers)

  console.log('fuelInputs - infoLo', fuelInputs, infoLo)

  const handleDelete = (id: string) => {
    dispatch(deleteFuelInput(id))
  }

  return (
    <>
      <Header>
        <h1>Quản Lý Nhiên Liệu Đầu Vào</h1>
        <Link href='/thong-tin-lo/quan-ly-lo/nhien-lieu-dau-vao/add'>
          <AddButton>+ Add Thông Tin</AddButton>
        </Link>
      </Header>
      <Table>
        <thead>
          <tr>
            <TableHeader>Lò</TableHeader>
            <TableHeader>Ngày/Giờ</TableHeader>
            <TableHeader>SKU</TableHeader>
            <TableHeader>Số Phiếu Cân</TableHeader>
            <TableHeader>Số Thứ Tự Xe</TableHeader>
            <TableHeader>Chất Lượng</TableHeader>
            <TableHeader>Biển Số Xe</TableHeader>
            <TableHeader>Khối Lượng Hàng</TableHeader>
            <TableHeader>Loại Hàng</TableHeader>
            <TableHeader>Độ Ẩm</TableHeader>
            <TableHeader>Hành Động</TableHeader>
          </tr>
        </thead>
        <tbody>
          {fuelInputs.map((input) => (
            <tr key={input.id}>
              <TableCell> {infoLo.find((c) => c.id === input.boilerId)?.tenLo || 'Lò không tồn tại'}</TableCell>
              <TableCell>{input.dateTime}</TableCell>
              <TableCell>{input.sku}</TableCell>
              <TableCell>{input.soPhieuCan}</TableCell>
              <TableCell>{input.soThuTuXe}</TableCell>
              <TableCell>{input.chatLuongNhienLieu}</TableCell>
              <TableCell>{input.bienSoXe}</TableCell>
              <TableCell>{input.khoiLuongHang}</TableCell>
              <TableCell>{input.loaiHang}</TableCell>
              <TableCell>{input.doAm}%</TableCell>
              <td>
                <ActionButton onClick={() => console.log('View')}>
                  <FaEye />
                </ActionButton>
                <ActionButton onClick={() => console.log('Edit')}>
                  <FaEdit />
                </ActionButton>
                <ActionButton onClick={() => handleDelete(input.id)}>
                  <FaTrashAlt />
                </ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default NhiemLieuDauVaoIndex
