import { Bars3Icon } from '@heroicons/react/24/outline'
import Sidebar from './Sidebar'
import { ReactNode, useState } from 'react'
import styled from 'styled-components'

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <LayoutWrapper>
      <div className='flex h-screen'>
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main content */}
        <div className='flex-1 flex flex-col'>
          {/* Header */}
          <header className='bg-gray-800 text-white p-4 flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
              <button className='md:hidden block' onClick={toggleSidebar}>
                <Bars3Icon className='h-6 w-6' />
              </button>
              <span className='text-xl font-bold'>
                {' '}
                <img src='../public/Logo Divi Group.png' className='logo_image' />
              </span>
            </div>
            <div>
              <img src='../public/Logo Divi Group.png' alt='Avatar' className='w-8 h-8 rounded-full' />
            </div>
          </header>

          {/* Content */}
          <main className='flex-1 p-6 bg-gray-100 overflow-y-auto'>{children}</main>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default Layout

const LayoutWrapper = styled.div`
  .logo_image {
    width: 50px;
    height: 50px;
  }
`
