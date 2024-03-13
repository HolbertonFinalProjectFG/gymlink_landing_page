import { MemberCard } from './MemberCard'
import styles from './AboutUs.module.css'
import images from './assets/members'

const membersData = [
  {
    id: 1,
    fullName: 'Facundo Sánchez',
    role: 'Project Manager, Frontend Developer',
    github: 'https://github.com/Facusan2016',
    linkedin: 'https://www.linkedin.com/in/facundos%C3%A1nchez/',
    portfolio: 'https://facundosanchezv2.netlify.app/',
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
    <>
      <article className={styles.inspiration}>
        <h2>
          What inspired us to <b>make this project?</b>
        </h2>
        <p>
          The idea for GymLink originated from the dissatisfaction of
          some of our team members with the conventional method of accessing
          gym routines, which typically involves paper sheets displaying exercises.
          We decided we wanted to create a tool that would allow gym clients easy
          access to their routines, as well as provide a fast way for trainers to
          create them. This is how the initial concept of GymLink was conceived.
        </p>
        <p>
          Once we had decided to develop GymLink, we recognized the need for a more
          comprehensive and useful application. That&apos;s when we chose to incorporate
          an administration section, where the admin user would be able to manage all
          of the user&apos;s data, as well as the gym&apos;s inventory.
        </p>
      </article>
      <section className={styles.aboutUs}>
        <div className={styles.aboutUsTextWrapper}>
          <h2 className='md:mb-10'>Meet our Team</h2>
        </div>
        <ul>
          {
            membersData.map((member) =>
              <MemberCard key={member.id} {...member}/>
            )
          }
        </ul>
      </section>
    </>
  )
}
