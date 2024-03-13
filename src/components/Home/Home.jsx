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
    <section id='home' ref={homeRef} className={styles.home}>
      <div className={` ${styles.homeBgLayer}`}/>
      <div className={styles.homeWrapper}>
        <img className={styles.homeImg} src={gymLinkLogo} alt='gymlink-logo'/>
        <div className='flex items-center flex-col gap-4 md:items-start md:gap-8'>
          <h1>
            Gymlink
          </h1>
          <p>
            Manage your gym in an <br/> <b>efficient way</b> with us
          </p>
        </div>
      </div>
        <a className='relative z-40' href='https://gymlink-frontend-cweybgrrnq-uc.a.run.app'>
          Try the app
        </a>
    </section>
  )
}
