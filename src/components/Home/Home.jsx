import styles from './Home.module.css'
import gymLinkLogo from '/assets/logo.svg'

export const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.homeBgLayer}/>
      <div className={styles.homeWrapper}>
        <img src={gymLinkLogo} alt='gymlink-logo'/>
        <h1>
          Gymlink
        </h1>
        <p>
          Manage your gym in an <b>efficient way</b> with us
        </p>
        <a>
          Try the app
        </a>
      </div>
    </section>
  )
}
