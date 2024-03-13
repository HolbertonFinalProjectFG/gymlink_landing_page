import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import style from './Features.module.css'
import adminSection from './assets/AdminSection.jpg'
import routineDrag from './assets/RoutinesSectionDrag.jpg'
import routineMobile from './assets/RoutineMobile.jpg'

gsap.registerPlugin(gsap, ScrollTrigger)

export const Features = ({ isMobile }) => {
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
      <article id='features' ref={introFeaturesRef} className={`features-intro ${style.featuresIntro}`}>
        <div className='md:w-2/3'>
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
        </div>
      </article>
      <section ref={featuresRef} className={style.features}>
        <article className={`${style.shadowedBox} feature-article`}>
          <div className={style.trapezoid}/>
          <div className={style.featureInfoWrapper}>
            <h3 className='text-light-aux'>Users and inventory management</h3>
            <p className='text-light-aux'>
              Keep your clients and employees well organized with the tools we provide.
              Our intuitive user interface makes it easier for you to register clients
              and employees, streamlining your day.
              Additionally, we offer an inventory section to better track the
              equipment in your gym.
            </p>
          </div>
          {
            isMobile
              ? (
                  <div className={style.featureImgHorizontal} style={{ backgroundImage: `url(${adminSection})` }}/>
                )
              : (
                  <img src={adminSection}/>
                )
          }
        </article>
        <article className={`${style.reverseRow} feature-article`}>
          <div className={style.featureInfoWrapper}>
            <h3 className='text-light-primary'>Interactive routine creation</h3>
            <p className='text-light-aux_op'>
            To enhance user experience, we&apos;ve implemented a simple drag-and-drop system for
            creating weekly routines as a trainer, based on muscular group routines.
            </p>
          </div>
          {
            isMobile
              ? (
                  <div className={style.featureImgHorizontal} style={{ backgroundImage: `url(${routineDrag})` }}/>
                )
              : (
                  <img src={routineDrag}/>
                )
          }
        </article>
        <article className={`${style.shadowedBox} feature-article`}>
          <div className={`-scale-y-100 -bottom-32 top-auto ${style.trapezoid}`}/>
          <div className={style.featureInfoWrapper}>
          <h3 className='text-light-primary'>
            Routines visualization<br/>for clients
          </h3>
          <p>
          As a trainer, when you create a new routine and assign it to a client,
          a link will be generated. You can then share this link with your client,
           allowing them to view their own routine on their mobile device.
          </p>
          </div>
          {
            isMobile
              ? (
                  <div className={style.featureImgHorizontal} style={{ backgroundImage: `url(${routineMobile})` }}/>
                )
              : (
                  <img src={routineMobile}/>
                )
          }
        </article>
      </section>
    </>
  )
}
