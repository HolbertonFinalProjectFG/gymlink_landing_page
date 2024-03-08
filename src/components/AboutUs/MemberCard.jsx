import styles from './AboutUs.module.css'

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
    <li className={styles.memberCard}>
      <div className={ `${styles.imgWrapper}`}>
        <div style={{ backgroundImage: `url(${imgCr})` }} className={ `${styles.cr} ${styles.memberImg}`}/>
        <div style={{ backgroundImage: `url(${imgFr})` }} className={ `${styles.fr} ${styles.memberImg} `}/>
      </div>
      <div className={styles.memberInfo}>
        <h4>{fullName}</h4>
        <h5>{role}</h5>
      </div>
    </li>
  )
}
