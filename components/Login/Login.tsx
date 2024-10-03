const Login = () => {
  return (
    <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
      <h2 className='text-2xl font-bold text-center mb-6'>Đăng nhập</h2>
      <form>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Nhập email'
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>
            Mật khẩu
          </label>
          <input
            type='password'
            id='password'
            placeholder='Nhập mật khẩu'
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </div>
        <button type='submit' className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>
          Đăng nhập
        </button>
      </form>
    </div>
  )
}

export default Login
