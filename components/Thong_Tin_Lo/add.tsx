import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { addBoiler, updateBoiler } from '../../redux/slices/boilerInfo' // Use the correct action from boilerInfo slice
import { v4 as uuidv4 } from 'uuid'
import 'tailwindcss/tailwind.css'

const AddThongTinLo = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { id } = router.query

  const boilers = useSelector((state: RootState) => state.boilerInfo.boilers)

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (typeof id === 'string') {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id: _, ...restOfBoilerData } = boilerData
      dispatch(updateBoiler({ id, ...restOfBoilerData }))
    } else {
      // For adding a new boiler, just dispatch the boilerData without an id
      dispatch(addBoiler(boilerData))
    }

    // Redirect after submission
    router.push('/thong-tin-lo')
  }

  useEffect(() => {
    if (id) {
      // Prefill the form with the existing boiler details
      const existingBoiler = boilers.find((boiler) => boiler.id === id)
      if (existingBoiler) {
        setBoilerData(existingBoiler)
      }
    }
  }, [id, boilers])

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
          {id ? 'Update' : 'Gửi'}{' '}
        </button>
      </form>
    </div>
  )
}

export default AddThongTinLo
