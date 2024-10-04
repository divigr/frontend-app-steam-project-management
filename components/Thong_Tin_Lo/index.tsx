import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { FaEye, FaEdit, FaTrashAlt, FaArrowRight } from 'react-icons/fa'
import styled from 'styled-components'
import Link from 'next/link'
import { deleteBoiler } from '../../redux/slices/boilerInfo'

const QuanLyThongTinLo = () => {
  const dispatch = useDispatch()
  const boilers = useSelector((state: RootState) => state.boiler) // Assuming "boilers" is stored in the Redux store

  const handleDelete = (index: number) => {
    dispatch(deleteBoiler(index))
  }

  return (
    <Wrapper>
      <Header>
        <h1>Quản Lý Thông Tin Lò</h1>
        {/* Add Button to redirect to the form page */}
        <Link href='/thong-tin-lo/add'>
          <AddButton>+ Add Thông Tin</AddButton>
        </Link>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>Tên Lò</th>
            <th>Địa chỉ</th>
            <th>Công suất</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {boilers.shifts?.map((boiler, index) => (
            <tr key={index}>
              <td>{boiler?.tenLo}</td>
              <td>{boiler?.diaChiLo}</td>
              <td>{boiler?.congSuatLo}</td>
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
                <ActionButton>
                  {/* Link to Quản Lý Lò for this boiler */}
                  <Link href='/thong-tin-lo/quan_ly_lo'>
                    <FaArrowRight />
                  </Link>
                </ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  )
}

export default QuanLyThongTinLo

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
