import { Provider } from 'react-redux'
import store from '../redux/store'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout' // Đảm bảo chỉ sử dụng Layout 1 lần

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  )
}

export default MyApp
