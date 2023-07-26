import theme from '@/components/UI/theme-config';
import { ConfigProvider } from 'antd';
import "../styles/globals.css"
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
 
  return <ConfigProvider theme={theme}>
    {
      getLayout(<Component {...pageProps} />)
    }
  </ConfigProvider>
}