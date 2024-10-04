import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import AddThongTinQuanLyLo from '../../../components/Quan_Ly_Lo/add'
import { addShift } from '../../../redux/slices/boilerSliceManagement'

const addInfoBoiler = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = (formData) => {
    dispatch(addShift(formData)) // Use the correct action
    router.push('/thong-tin-lo')
  }

  return <AddThongTinQuanLyLo onSubmit={handleSubmit} />
}

export default addInfoBoiler
