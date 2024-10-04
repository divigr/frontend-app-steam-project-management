import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addShift } from '../../redux/slices/boilerSlice'
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'

const AddThongTinQuanLyLo = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  // Initialize form data
  const [shiftData, setShiftData] = useState({
    ca: 'Ca 1', // Default to Ca 1
    soLuongHoi: '',
    soLuongDien: '',
    hoaChat: '',
    muoi: '',
    do: '',
    nhienLieu: '',
    dateTime: '',
  })
  const [isFormEnabled, setIsFormEnabled] = useState(false)

  // Enable form fields if date/time is selected
  const handleDateTimeChange = (e) => {
    const { value } = e.target
    setShiftData({ ...shiftData, dateTime: value })
    setIsFormEnabled(!!value) // Enable form fields if dateTime is selected
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setShiftData({
      ...shiftData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const finalShiftData = {
      ...shiftData,
    }

    dispatch(addShift(finalShiftData))
    router.push('/thong-tin-lo') // Navigate back to the list page
  }

  return (
    <div className='max-w-lg mx-auto p-6 bg-white shadow-md rounded-md'>
      <h1 className='text-xl font-bold mb-6'>Add Thông Tin Lò</h1>

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block mb-2 text-gray-700'>Chọn Ngày / Giờ</label>
          <input
            type='datetime-local'
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600'
            value={shiftData.dateTime}
            onChange={handleDateTimeChange}
            required
          />
        </div>

        <fieldset disabled={!isFormEnabled}>
          <div className='mb-4'>
            <label className='block mb-2 text-gray-700'>Chọn Ca</label>
            <select name='ca' value={shiftData.ca} onChange={handleInputChange} className='w-full px-4 py-2 border rounded-md' required>
              <option value='Ca 1'>Ca 1</option>
              <option value='Ca 2'>Ca 2</option>
              <option value='Ca 3'>Ca 3</option>
            </select>
          </div>

          <div className='mb-4'>
            <label className='block mb-2 text-gray-700'>Số Lượng Hơi Tổng (Ca)</label>
            <input
              type='number'
              name='soLuongHoi'
              value={shiftData.soLuongHoi}
              onChange={handleInputChange}
              className='w-full px-4 py-2 border rounded-md'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block mb-2 text-gray-700'>Số Lượng Điện Tổng (Ca)</label>
            <input
              type='number'
              name='soLuongDien'
              value={shiftData.soLuongDien}
              onChange={handleInputChange}
              className='w-full px-4 py-2 border rounded-md'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block mb-2 text-gray-700'>Hóa Chất</label>
            <input
              type='number'
              name='hoaChat'
              value={shiftData.hoaChat}
              onChange={handleInputChange}
              className='w-full px-4 py-2 border rounded-md'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block mb-2 text-gray-700'>Muối</label>
            <input
              type='number'
              name='muoi'
              value={shiftData.muoi}
              onChange={handleInputChange}
              className='w-full px-4 py-2 border rounded-md'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block mb-2 text-gray-700'>Dầu DO</label>
            <input
              type='number'
              name='do'
              value={shiftData.do}
              onChange={handleInputChange}
              className='w-full px-4 py-2 border rounded-md'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block mb-2 text-gray-700'>Nhiên Liệu Tồn Kho</label>
            <input
              type='number'
              name='nhienLieu'
              value={shiftData.nhienLieu}
              onChange={handleInputChange}
              className='w-full px-4 py-2 border rounded-md'
              required
            />
          </div>

          <button type='submit' className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'>
            Gửi
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default AddThongTinQuanLyLo
