import { MemberCard } from './MemberCard'
import textDecoration from './assets/decoration.svg'
import styles from './AboutUs.module.css'
import images from './assets/members'

const membersData = [
  {
    id: 1,
    fullName: 'Facundo Sánchez',
    role: 'Project Manager, Frontend Developer',
    github: 'https://github.com/Facusan2016',
    linkedin: 'https://www.linkedin.com/in/facundos%C3%A1nchez/',
    portfolio: 'https://facundosanchez.netlify.app/',
    imgCr: images.FacundoCr,
    imgFr: images.FacundoFr
  },
  {
    id: 2,
    fullName: 'Facundo Villagra',
    role: 'Backend Developer, QA Tester',
    github: 'https://github.com/FacundoV21',
    linkedin: 'https://www.linkedin.com/in/facundo-villagra-/',
    portfolio: undefined,
    imgCr: images.FacundoVCr,
    imgFr: images.FacundoVFr
  },
  {
    id: 3,
    fullName: 'Gabriel Rossy',
    role: 'Frontend Developer, UX/UI Designer',
    github: 'https://github.com/gaboxdeveloper',
    linkedin: 'https://www.linkedin.com/in/gabriel-rossy-baptista-y-vedia/',
    portfolio: undefined,
    imgCr: images.GabrielCr,
    imgFr: images.GabrielFr
  },
  {
    id: 4,
    fullName: 'Franco Musso',
    role: 'Backend Developer, Devops',
    github: 'https://github.com/FrancoMuVa',
    linkedin: 'https://www.linkedin.com/in/franco-musso/',
    portfolio: undefined,
    imgCr: images.FrancoCr,
    imgFr: images.FrancoFr
  },
  {
    id: 5,
    fullName: 'Gastón Perego',
    role: 'Backend Developer, Devops',
    github: 'https://github.com/gastonperego',
    linkedin: 'https://www.linkedin.com/in/gaston-perego-7487a6294/',
    portfolio: undefined,
    imgCr: images.GastonCr,
    imgFr: images.GastonFr
  }
]

export const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutUsTextWrapper}>
        <h2>Meet our Team</h2>
      </div>
      <ul>
        {
          membersData.map((member) =>
            <MemberCard key={member.id} {...member}/>
          )
        }
      </ul>
    </section>
  )
}
