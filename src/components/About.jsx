import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { services } from '../constant'
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'
import VishalResume from '../assets/VishalResume.pdf'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.74)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm well skilled software developer with exprience in Java, MySQL and Java-Script, and
        Exprience in frameworks like React, Spring-boot, ORM, Hibernate.
        I'm a quick learner and collaborate closely
        with clients to create efficient, sclable,
        and user-freindly solution that solve real-world problems.
        Let's work together to bring your ideas to life!.
      </motion.p>

      <div className="mt-12">
        <a href={VishalResume} download className="bg-tertiary py-6
         px-8 outline-none w-fit text-white 
         font-bold shadow-md shadow-primary rounded-xl green-pink-gradient">
          Download Resume
        </a>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")