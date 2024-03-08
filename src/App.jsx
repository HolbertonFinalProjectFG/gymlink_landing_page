import './App.css'
import {
  AboutUs,
  ContactUs,
  Features,
  Home,
  Navbar
} from './components'

export const App = () => {
  return (
    <>
      <Navbar/>
      <main className='w-vw h-svh'>
        <Home/>
        <Features/>
        <AboutUs/>
        {/* <ContactUs/> */}
      </main>
    </>
  )
}

export default App
