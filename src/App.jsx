import { useEffect, useState } from 'react'
import './App.css'
import {
  AboutUs,
  ContactUs,
  Features,
  Home,
  Navbar
} from './components'

export const App = () => {
  const [isMobile, setMobile] = useState(window.innerWidth <= 768)

  const updateMedia = () => {
    setMobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <>
      <Navbar isMobile={isMobile}/>
      <main className='w-vw h-svh'>
        <Home/>
        <Features isMobile={isMobile}/>
        <AboutUs/>
        {/* <ContactUs/> */}
      </main>
    </>
  )
}

export default App
