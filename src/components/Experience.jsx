import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles'
import { experiences } from '../constant'
import { SectionWrapper } from '../hoc'
import { textVariant, slideIn, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center
        w-full h-full">
          {/* <img src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain" /> */}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience.title}
        </h3>
        <p className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>

    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="ml-8">
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      <div className="m-6 ">
        <motion.div
          variants={slideIn('left', "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl mt-6"
        >

          <p className={styles.sectionSubText}>What Skills I have</p>
          <h3 className={styles.sectionHeadText}>Skills</h3>
          <motion.p variants={fadeIn('', '', 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            I am a dynamic and motivated
            professional with a diverse skill
            set, blending technical proficiency
            with a creative problem-solving
            mindset. Leveraging a background
            in <span>Software Development</span>,
            I bring a unique perspective to
            tackle challenges and contribute to
            innovative solutions. My adaptability
            and commitment to continuous learning
            empower me to excel in a fast-paced
            and ever-evolving professional
            landscape. Explore my skills below
            to gain insights into my capabilities.
          </motion.p>
        </motion.div>
      </div>
    </>
  )
}

export default Experience