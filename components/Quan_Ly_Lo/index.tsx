import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa'
import styled from 'styled-components'
import Link from 'next/link'
import { deleteShift } from '../../redux/slices/boilerSliceManagement'

const QuanLyLo = () => {
  const dispatch = useDispatch()
  const boilerShifts = useSelector((state: RootState) => state.boiler.shifts)
  console.log('boilerShifts', boilerShifts)

  const handleDelete = (index: number) => {
    dispatch(deleteShift(index))
  }

  return (
    <Wrapper>
      <Header>
        <h1>Quản Lý Lò Hơi</h1>
        {/* Add Button to redirect to the form page */}
        <Link href='/thong-tin-lo/add'>
          <AddButton>+ Add Thông Tin</AddButton>
        </Link>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>Ca</th>
            <th>Ngày/Giờ</th>
            <th>Số Lượng Hơi</th>
            <th>Số Lượng Điện</th>
            <th>Hóa Chất</th>
            <th>Muối</th>
            <th>Dầu DO</th>
            <th>Nhiên Liệu Tồn Kho</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {boilerShifts.map((shift, index) => (
            <tr key={index}>
              <td>{shift.ca}</td>
              <td>{shift.dateTime}</td>
              <td>{shift.soLuongHoi}</td>
              <td>{shift.soLuongDien}</td>
              <td>{shift.hoaChat}</td>
              <td>{shift.muoi}</td>
              <td>{shift.do}</td>
              <td>{shift.nhienLieu}</td>
              <td>
                <ActionButton onClick={() => console.log('View')}>
                  <FaEye />
                </ActionButton>
                <ActionButton onClick={() => console.log('Edit')}>
                  <FaEdit />
                </ActionButton>
                <ActionButton onClick={() => handleDelete(index)}>
                  <FaTrashAlt />
                </ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  )
}

export default QuanLyLo

// Styled components
const Wrapper = styled.div`
  padding: 20px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
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
