import { useRef, useState, useEffect } from 'react'
import { HamMenu } from './HamMenu'
import styles from './Navbar.module.css'
import gsap from 'gsap'

export const Navbar = ({ isMobile }) => {
  const [navBarOpen, setNavBarOpen] = useState(false)
  const navBarRef = useRef(null)

  // Ensure that the animation runs when navBarOpen changes
  useEffect(() => {
    if (navBarOpen) {
      const links = navBarRef.current.querySelectorAll('.navbar-link')
      gsap.from(links, {
        y: '100%',
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out'
      })
    }
  }, [navBarOpen])

  return (
    <>
      {
        isMobile
          ? (
              <nav className={styles.navBar} ref={navBarRef}>
                <HamMenu open={navBarOpen} setOpen={setNavBarOpen}/>
                <div
                  style={{
                    opacity: navBarOpen ? '1' : '0',
                    visibility: navBarOpen ? 'visible' : 'hidden',
                    transition: 'opacity .2s, visibility .2s'
                  }}
                  className={styles.navBarLinks}
                >
                  <ul>
                    <li className='navbar-link'>
                      <a
                        onClick={() => setNavBarOpen(false)}
                        href='#home'
                      >
                        Home
                      </a>
                      </li>
                    <li className='navbar-link'>
                      <a
                        onClick={() => setNavBarOpen(false)}
                        href='#features'
                      >
                        Features
                      </a>
                      </li>
                    <li className='navbar-link'>
                      <a
                        onClick={() => setNavBarOpen(false)}
                        href='#aboutus'
                      >
                        About us
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            )
          : (
              <nav className={styles.navBarDesktop} ref={navBarRef}>
                  <ul>
                    <li className='navbar-link'>
                      <a href='#home'>
                        Home
                      </a>
                      </li>
                    <li className='navbar-link'>
                      <a href='#features'>
                        Features
                      </a>
                    </li>
                    <li className='navbar-link'>
                      <a href='#aboutus'>
                        About us
                      </a>
                    </li>
                  </ul>
              </nav>
            )
      }
    </>
  )
}
