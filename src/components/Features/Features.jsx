import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import style from './Features.module.css'
import clientDemo from './assets/DemoClient.jpg'

gsap.registerPlugin(gsap, ScrollTrigger)

export const Features = () => {
  const featuresRef = useRef()
  const introFeaturesRef = useRef()

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

  useGSAP(() => {
    const introChilds = gsap.utils.toArray(introFeaturesRef.current.children)

    gsap.fromTo(introChilds, {
      y: '100%',
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: introFeaturesRef.current,
        start: '50% bottom',
        end: 'bottom bottom'
      }
    })
  })

  return (
    <>
      <article ref={introFeaturesRef} className={`features-intro ${style.featuresIntro}`}>
        <h2>
          Gymlink is about fostering unity among gym admins,
          trainers, and clients for a <b>streamlined fitness experience.</b>
        </h2>
        <p>
          Gymlink is a comprehensive gym management application that fosters
          unity among gym administrators, trainers, and clients.
          This platform serves as a centralized hub, streamlining communication
          and coordination to enhance the overall gym experience.
          Admins can efficiently manage operations, trainers can
          connect with clients more effectively, and clients can
          access personalized routines seamlessly. Gymlink brings
          together the key stakeholders in the gym environment,
          promoting a collaborative and unified approach to fitness management.
        </p>
      </article>
      <section ref={featuresRef} className={style.features}>
        <article className={`${style.shadowedBox} feature-article`}>
          <div className={style.trapezoid}/>
          <h3 className='text-light-aux'>Users and inventory management</h3>
          <p className='text-light-aux'>
            Organize your gym&apos;s members
          </p>
          <iframe
            className=' aspect-video'
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/EIWKPJ3r45E?si=jMWyOYzNAaN7f_Gp"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          >
          </iframe>
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
    </>
  )
}
