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
      <main>
        <Home/>
        <Features/>
        <AboutUs/>
        <ContactUs/>
      </main>
    </>
  )
}

export default App
