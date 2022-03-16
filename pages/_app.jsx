import '@styles/global.css'
import { Analytics } from '@components/Analytics/Analytics'
import { Loader } from '@components/Loader/Loader'

import { AppProvider } from '@context/AppContext.js'

export default ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <MyApp {...{ Component, pageProps }} />
    </AppProvider>
  )
}

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <Loader />
      <Component {...pageProps} />
    </>
  )
}
