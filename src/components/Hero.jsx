import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
       <div className="flex flex-col justify-center items-center mt-10">
        {/* <div className='w-5 h-5 rounded-full bg-[#b3fffe]' />
        <div className='w-1 sm:h-80 h-40 #b3fffe-gradient'/> */}
       </div>
       <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#b3fffe]">Vikas</span></h1>
        <p className={`${styles.heroSubText} text-white-100`}>Graphic design: where creativity becomes a visual story.<br></br><span className="text-[#b3fffe] flex justify-end">-Vikas</span></p>
      </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <div className='w-[35px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev 
            animate={{
              y:[0,24,0]
            }}
            transition={{
            duration:1.5,
            repeat:Infinity,
            repeatType:'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero