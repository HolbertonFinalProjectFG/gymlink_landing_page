import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import styles from './Home.module.css'
import gymLinkLogo from '/assets/logo.svg'

gsap.registerPlugin(ScrollTrigger)

export const Home = () => {
  const homeRef = useRef()

  useGSAP(() => {
    gsap.to('.bg-layer', {
      backgroundColor: 'white',
      scrollTrigger: {
        trigger: '.bg-layer',
        start: 'bottom bottom',
        end: 'bottom 60%',
        scrub: true
      }
    })
  }, { scope: homeRef })

  return (
    <section ref={homeRef} className={styles.home}>
      <div className={` ${styles.homeBgLayer}`}/>
      <div className={styles.homeWrapper}>
        <img className='home-img' src={gymLinkLogo} alt='gymlink-logo'/>
        <h1>
          Gymlink
        </h1>
        <p>
          Manage your gym in an <br/> <b>efficient way</b> with us
        </p>
        <a>
          Try the app
        </a>
      </div>
    </section>
  )
}
