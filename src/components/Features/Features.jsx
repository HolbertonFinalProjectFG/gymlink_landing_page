import style from './Features.module.css'
import clientDemo from './assets/DemoClient.jpg'

export const Features = () => {
  return (
    <section className={style.features}>
      <article className={style.shadowedBox}>
        <div className={style.trapezoid}/>
        <h3 className='text-light-aux'>Users management</h3>
        <p className='text-light-aux'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <img src={clientDemo}/>
      </article>
      <article>
        <h3 className='text-light-primary'>Interactive routine creation</h3>
        <p className='text-light-aux_op'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <img src={clientDemo}/>
      </article>
      <article className={style.shadowedBox}>
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
