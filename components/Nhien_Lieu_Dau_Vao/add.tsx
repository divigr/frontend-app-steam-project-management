import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { RootState } from '../../redux/store'
import { addFuelInput, updateFuelInput } from '../../redux/slices/inputFuel'

// Styled components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Fieldset = styled.fieldset`
  margin-bottom: 15px;
  border: none;
`

const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #555;
  margin-bottom: 5px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`

const Button = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`

const AddFuelInput = () => {
  const [boilerId, setBoilerId] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [sku, setSku] = useState('')
  const [soPhieuCan, setSoPhieuCan] = useState('')
  const [soThuTuXe, setSoThuTuXe] = useState('')
  const [chatLuongNhienLieu, setChatLuongNhienLieu] = useState('')
  const [bienSoXe, setBienSoXe] = useState('')
  const [khoiLuongTongXe, setKhoiLuongTongXe] = useState(0)
  const [khoiLuongXe, setKhoiLuongXe] = useState(0)
  const [khoiLuongHang, setKhoiLuongHang] = useState(0)
  const [loaiHang, setLoaiHang] = useState('')
  const [doAm, setDoAm] = useState('')

  const fuelInputs = useSelector((state: RootState) => state.inputFuel.fuelInputs)
  const dispatch = useDispatch()
  const router = useRouter()

  const { id } = router.query

  useEffect(() => {
    if (id) {
      const fuelInput = fuelInputs.find((input) => input.id === id)
      if (fuelInput) {
        setBoilerId(fuelInput.boilerId)
        setDateTime(fuelInput.dateTime)
        setSku(fuelInput.sku)
        setSoPhieuCan(fuelInput.soPhieuCan)
        setSoThuTuXe(fuelInput.soThuTuXe)
        setChatLuongNhienLieu(fuelInput.chatLuongNhienLieu)
        setBienSoXe(fuelInput.bienSoXe)
        setKhoiLuongTongXe(fuelInput.khoiLuongTongXe)
        setKhoiLuongXe(fuelInput.khoiLuongXe)
        setKhoiLuongHang(fuelInput.khoiLuongHang)
        setLoaiHang(fuelInput.loaiHang)
        setDoAm(fuelInput.doAm.toString())
      }
    }
  }, [id, fuelInputs])

  // Fetch boiler info from Redux
  const boilerInfo = useSelector((state: RootState) => state.boilerInfo.boilers)

  // Calculate "khối lượng hàng" dynamically
  useEffect(() => {
    const netWeight = khoiLuongTongXe - khoiLuongXe

    // Ensure we don't calculate negative weight
    if (khoiLuongTongXe >= khoiLuongXe) {
      setKhoiLuongHang(netWeight)
    } else {
      setKhoiLuongHang(0)
      console.error('Error: khoiLuongTongXe must be greater than or equal to khoiLuongXe')
    }
  }, [khoiLuongTongXe, khoiLuongXe])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const doAmNumber = parseFloat(doAm)
    const updatedFuelInput = {
      id: id || uuidv4(),
      boilerId,
      dateTime,
      sku,
      soPhieuCan,
      soThuTuXe,
      chatLuongNhienLieu,
      bienSoXe,
      khoiLuongTongXe,
      khoiLuongXe,
      khoiLuongHang,
      loaiHang,
      doAm: doAmNumber,
    }

    if (id) {
      dispatch(updateFuelInput(updatedFuelInput))
    } else {
      dispatch(addFuelInput(updatedFuelInput))
    }

    router.push('/thong-tin-lo/quan-ly-lo/nhien-lieu-dau-vao')
  }

  return (
    <Container>
      <Title>{id ? 'Cập Nhập Nguyên Liệu Đầu Vào' : 'Thêm Nguyên Liệu Đầu Vào'}</Title>
      <Form onSubmit={handleSubmit}>
        {/* Select Boiler */}
        <Fieldset>
          <Label>Chọn Lò</Label>
          <Select value={boilerId} onChange={(e) => setBoilerId(e.target.value)} required>
            <option value=''>Chọn Lò</option>
            {boilerInfo.map((boiler) => (
              <option key={boiler.id} value={boiler.id}>
                {boiler?.tenLo} - {boiler?.diaChiLo}
              </option>
            ))}
          </Select>
        </Fieldset>

        {/* Date/Time */}
        <Fieldset>
          <Label>Chọn Ngày/Giờ</Label>
          <Input type='datetime-local' value={dateTime} onChange={(e) => setDateTime(e.target.value)} required />
        </Fieldset>

        {/* SKU */}
        <Fieldset>
          <Label>SKU</Label>
          <Input type='text' value={sku} onChange={(e) => setSku(e.target.value)} required />
        </Fieldset>

        {/* Số Phiếu Cân */}
        <Fieldset>
          <Label>Số Phiếu Cân</Label>
          <Input type='text' value={soPhieuCan} onChange={(e) => setSoPhieuCan(e.target.value)} required />
        </Fieldset>

        {/* Số Thứ Tự Xe */}
        <Fieldset>
          <Label>Số Thứ Tự Xe Hàng</Label>
          <Input type='text' value={soThuTuXe} onChange={(e) => setSoThuTuXe(e.target.value)} required />
        </Fieldset>

        {/* Chất Lượng Nhiên Liệu */}
        <Fieldset>
          <Label>Chất Lượng Nhiên Liệu</Label>
          <Input type='text' value={chatLuongNhienLieu} onChange={(e) => setChatLuongNhienLieu(e.target.value)} required />
        </Fieldset>

        {/* Biển Số Xe */}
        <Fieldset>
          <Label>Biển Số Xe</Label>
          <Input type='text' value={bienSoXe} onChange={(e) => setBienSoXe(e.target.value)} required />
        </Fieldset>

        {/* Khối Lượng Tổng Xe */}
        <Fieldset>
          <Label>Khối Lượng Tổng Xe</Label>
          <Input
            type='number'
            value={khoiLuongTongXe}
            onChange={(e) => {
              setKhoiLuongTongXe(Number(e.target.value))
            }}
            required
          />
        </Fieldset>

        {/* Khối Lượng Xe */}
        <Fieldset>
          <Label>Khối Lượng Xe</Label>
          <Input
            type='number'
            value={khoiLuongXe}
            onChange={(e) => {
              setKhoiLuongXe(Number(e.target.value))
            }}
            required
          />
        </Fieldset>

        {/* Khối Lượng Hàng */}
        <Fieldset>
          <Label>Khối Lượng Hàng</Label>
          <Input type='number' value={khoiLuongHang} readOnly />
        </Fieldset>

        {/* Loại Hàng */}
        <Fieldset>
          <Label>Loại Hàng</Label>
          <Input type='text' value={loaiHang} onChange={(e) => setLoaiHang(e.target.value)} required />
        </Fieldset>

        {/* Độ Ẩm */}
        <Fieldset>
          <Label>Độ Ẩm</Label>
          <Input type='number' step='0.01' value={doAm} onChange={(e) => setDoAm(e.target.value)} required />
        </Fieldset>

        <Button type='submit'>{id ? 'Cập Nhập' : 'Gửi'}</Button>
      </Form>
    </Container>
  )
}

export default AddFuelInput
