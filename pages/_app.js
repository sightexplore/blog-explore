import '../styles/globals.css'
import ModeProvider from '../hooks/useContextMode'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'



function MyApp({ Component, pageProps }) {
  return <>
    <ModeProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ModeProvider>
  </>
}

export default MyApp

