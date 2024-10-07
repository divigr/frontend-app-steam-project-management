import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa'
import styled from 'styled-components'
import Link from 'next/link'
import { deleteBoiler } from '../../redux/slices/boilerInfo'

const QuanLyThongTinLo = () => {
  const dispatch = useDispatch()

  // Get boiler and shift information from Redux
  const boilers = useSelector((state: RootState) => state.boilerInfo.boilers)

  const handleDeleteBoiler = (id: string) => {
    dispatch(deleteBoiler(id))
  }

  return (
    <Wrapper>
      <Header>
        <h1>Quản Lý Thông Tin Lò</h1>
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
          {boilers.map((boiler) => (
            <tr key={boiler.id}>
              <td>{boiler.tenLo}</td>
              <td>{boiler.diaChiLo}</td>
              <td>{boiler.congSuatLo}</td>

              <td>
                <ActionButton onClick={() => console.log('View')}>
                  <FaEye />
                </ActionButton>
                <ActionButton onClick={() => console.log('Edit')}>
                  <FaEdit />
                </ActionButton>
                <ActionButton onClick={() => handleDeleteBoiler(boiler.id)}>
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

export default QuanLyThongTinLo

const Wrapper = styled.div`
  padding: 20px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
    text-align: left;
  }
`

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 5px;
  color: #333;
  font-size: 16px;
`
