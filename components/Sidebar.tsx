import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}
const Sidebar: FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarWrapper isOpen={isOpen}>
      {/* Sidebar cho màn hình lớn */}
      <div className={`slider-bar w-64 bg-gray-800 text-white p-4 h-screen md:block hidden`}>
        <h2 className='text-2xl font-bold mb-6'>Dashboard</h2>
        <nav className='flex-1 space-y-4'>
          <Link href='/' className='block p-3 bg-gray-700 hover:bg-gray-600 rounded-md'>
            Trang Chủ
          </Link>
          <Link href='/info-user' className='block p-3 bg-gray-700 hover:bg-gray-600 rounded-md'>
            Thông Tin Người Dùng
          </Link>
          <Link href='/thong-tin-lo' className='block p-3 bg-gray-700 hover:bg-gray-600 rounded-md'>
            Thông Tin Lò
          </Link>
          <Link href='/quan-ly-nguoi-dung' className='block p-3 bg-gray-700 hover:bg-gray-600 rounded-md'>
            Quản Lý Người Dùng
          </Link>
          <Link href='/settings' className='block p-3 bg-gray-700 hover:bg-gray-600 rounded-md'>
            Cài Đặt
          </Link>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-gray-800 text-white p-4 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform md:hidden`}>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold'>Dashboard</h2>
          <button onClick={toggleSidebar}>
            <XMarkIcon className='h-6 w-6' />
          </button>
        </div>
        <nav className='flex-1 space-y-4'>
          <Link href='/' className='block p-3 bg-gray-700 hover:bg-gray-600 rounded-md'>
            Trang Chủ
          </Link>
          <Link href='/users' className='block p-3 bg-gray-700 hover:bg-gray-600 rounded-md'>
            Thông Tin Người Dùng
          </Link>
          <Link href='/users' className='block p-3 bg-gray-700 hover:bg-gray-600 rounded-md'>
            Thông Tin Lò
          </Link>
          <Link href='/users' className='block p-3 bg-gray-700 hover:bg-gray-600 rounded-md'>
            Quản Lý Người Dùng
          </Link>
          <Link href='/settings' className='block p-3 bg-gray-700 hover:bg-gray-600 rounded-md'>
            Cài Đặt
          </Link>
        </nav>
      </div>

      {/* Overlay để đóng sidebar khi bấm bên ngoài */}
      {isOpen && <div className='fixed inset-0 z-30 bg-black opacity-50 md:hidden' onClick={toggleSidebar} />}
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  width: 16rem;
  background-color: #1f2937;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};

  @media (min-width: 768px) {
    transform: translateX(0);
  }
`

export default Sidebar
