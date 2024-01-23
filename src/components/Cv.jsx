import VishalResume from '../assets/VishalResume.pdf'

const Cv = () => {
    return (
        <div className="cta">
            <a href={VishalResume} download className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">Download Prospectus</a>
            <a href="#contact" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">Let's Talk</a>

        </div>
    )
}

export default Cv