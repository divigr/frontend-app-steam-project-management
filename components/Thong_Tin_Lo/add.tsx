import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { addBoiler } from '../../redux/slices/boilerInfo' // Use the correct action from boilerInfo slice
import 'tailwindcss/tailwind.css'
import { v4 as uuidv4 } from 'uuid'

const AddThongTinLo = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  // Initialize form data for boiler information
  const [boilerData, setBoilerData] = useState({
    id: uuidv4(),
    tenLo: '',
    diaChiLo: '',
    congSuatLo: '',
  })
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBoilerData({
      ...boilerData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const finalBoilerData = {
      ...boilerData,
    }

    dispatch(addBoiler(finalBoilerData))
    // Navigate back to the list page after submission
    router.push('/thong-tin-lo')
  }

  return (
    <div className='max-w-lg mx-auto p-6 bg-white shadow-md rounded-md'>
      <h1 className='text-xl font-bold mb-6'>Add Thông Tin Lò</h1>

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block mb-2 text-gray-700'>Tên Lò</label>
          <input
            type='text'
            name='tenLo'
            value={boilerData.tenLo}
            onChange={handleInputChange}
            className='w-full px-4 py-2 border rounded-md'
            placeholder='Nhập tên của lò'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block mb-2 text-gray-700'>Địa chỉ của Lò</label>
          <input
            type='text'
            name='diaChiLo'
            value={boilerData.diaChiLo}
            onChange={handleInputChange}
            className='w-full px-4 py-2 border rounded-md'
            placeholder='Nhập địa chỉ của lò'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block mb-2 text-gray-700'>Công suất của Lò (kW)</label>
          <input
            type='number'
            name='congSuatLo'
            value={boilerData.congSuatLo}
            onChange={handleInputChange}
            className='w-full px-4 py-2 border rounded-md'
            placeholder='Nhập công suất của lò (kW)'
            required
          />
        </div>

        <button type='submit' className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'>
          Gửi
        </button>
      </form>
    </div>
  )
}

export default AddThongTinLo
