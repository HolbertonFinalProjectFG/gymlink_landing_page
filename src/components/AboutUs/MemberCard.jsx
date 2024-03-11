import styles from './AboutUs.module.css'
import Github from './assets/Github.svg'
import LinkedIn from './assets/LinkedIn.svg'
import Web from './assets/Web.svg'

export const MemberCard = ({
  fullName,
  role,
  github,
  linkedin,
  portfolio,
  imgFr,
  imgCr
}) => {
  return (
    <li className={`group ${styles.memberCard}`}>
      <div className={`group ${styles.memberCardLayer}`}>
        <div className={styles.memberCardLayerWrapper}>
          <div className={styles.memberCardLinks}>
            <div className='flex flex-row mb-28 gap-8 items-center'>
              <a href={github} className='group-hover:translate-y-0'>
                <img src={Github}/>
              </a>
              <a href={linkedin} className='group-hover:translate-y-0'>
                <img src={LinkedIn}/>
              </a>
              {
                portfolio &&
                <a href={portfolio} className='group-hover:translate-y-0'>
                  <img src={Web}/>
                </a>
              }
            </div>
          </div>
        </div>
      </div>
      <div className={ `${styles.imgWrapper}`}>
        <div style={{ backgroundImage: `url(${imgCr})` }} className={ `${styles.cr} ${styles.memberImg}`}/>
        <div style={{ backgroundImage: `url(${imgFr})` }} className={`group-hover:opacity-0 ${styles.fr} ${styles.memberImg} `}/>
      </div>
      <div className={styles.memberInfo}>
        <h4>{fullName}</h4>
        <h5>{role}</h5>
      </div>
    </li>
  )
}
