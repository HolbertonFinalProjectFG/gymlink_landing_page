import { useState } from 'react'
import { HamMenu } from './HamMenu'
import styles from './Navbar.module.css'

export const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false)

  return (
    <nav className={styles.navBar}>
      <HamMenu open={navBarOpen} setOpen={setNavBarOpen}/>
      <div className={`${!navBarOpen ? 'opacity-0' : undefined} ${styles.navBarLinks}`}>
        <ul>
          <li>Product</li>
          <li>Features</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </nav>
  )
}
