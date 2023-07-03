import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon })=>{
  return (
    <Tilt classNAme="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div options={{max:45, scale:1, speed:450
      }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
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

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
       I possess a diverse skill set as a graphic designer, with expertise in graphic design, photo editing, 2D animation, 3D modeling, and video editing. My keen eye for aesthetics and deep understanding of design principles enable me to create visually captivating designs that effectively convey messages. When it comes to photo editing, I pay meticulous attention to detail and demonstrate proficiency in various editing software. Through my animation skills, I bring illustrations and graphics to life with fluid and engaging movements. Additionally, my proficiency in 3D modeling allows me to create realistic and immersive designs. With my video editing abilities, I transform raw footage into compelling videos, incorporating visual effects, transitions, and color grading as needed. Overall, my versatile skill set makes me a valuable asset in the field of design and multimedia.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service}/>))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about")