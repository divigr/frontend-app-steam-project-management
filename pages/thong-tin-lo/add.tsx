import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { addBoiler } from '../../redux/slices/boilerInfo'
import AddThongTinLo from '../../components/Thong_Tin_Lo/add'

const addInfoBoiler = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = (formData) => {
    dispatch(addBoiler(formData))
    router.push('/thong-tin-lo')
  }

  return <AddThongTinLo onSubmit={handleSubmit} />
}

export default addInfoBoiler
