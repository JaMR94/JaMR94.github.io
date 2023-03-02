import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  weight:['400'],
  subsets: ['latin'],
})


export default function App({ Component, pageProps }) {
  return(
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>

  ) 
}
