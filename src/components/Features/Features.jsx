import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import style from './Features.module.css'
import clientDemo from './assets/DemoClient.jpg'

gsap.registerPlugin(gsap, ScrollTrigger)

export const Features = () => {
  const featuresRef = useRef()

  useGSAP(
    () => {
      const articles = gsap.utils.toArray('.feature-article')
      articles.forEach((article) => {
        const children = gsap.utils.toArray((article.children))
        children.forEach((child) => {
          if (child.className !== style.trapezoid) {
            gsap.fromTo(child, {
              y: '100%',
              opacity: 0
            }, {
              y: 0,
              opacity: 1,
              stagger: 2,
              scrollTrigger: {
                trigger: article,
                start: '60% bottom',
                end: 'bottom 20%'
              }
            })
          }
        })
      })
    },
    { scope: featuresRef }
  )

  return (
    <section ref={featuresRef} className={style.features}>
      <article className={`${style.shadowedBox} feature-article`}>
        <div className={style.trapezoid}/>
        <h3 className='text-light-aux'>Users management</h3>
        <p className='text-light-aux'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <img src={clientDemo}/>
      </article>
      <article className='feature-article'>
        <h3 className='text-light-primary'>Interactive routine creation</h3>
        <p className='text-light-aux_op'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <img src={clientDemo}/>
      </article>
      <article className={`${style.shadowedBox} feature-article`}>
        <div className={`-scale-y-100 -bottom-32 top-auto ${style.trapezoid}`}/>
        <h3 className='text-light-primary'>
          Routines visualization<br/>for clients
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <img src={clientDemo}/>
      </article>
    </section>
  )
}
