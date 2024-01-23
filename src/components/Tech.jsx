import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constant'
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-14'>
      {technologies.map((technology) => (
        <div className='w-28 h-28'
          key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <div className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {technology.title}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");