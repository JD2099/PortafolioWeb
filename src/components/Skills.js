import React from 'react'
import {motion} from 'framer-motion'


const Skill =({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute
        dark:bg-light dark:text-dark
        lg:py-2 lg:px-4
        md:text-sm md:py-1.5 md:px-3 
        xs:bg-transparent  xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
        '
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y, transition: {duration:1.5}}}
        viewport={{once:true}}
        >
            {name}
        </motion.div>
    );
};


const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center
    md:text-6xl md:mtp-32'>skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
    lg:h-[80vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    sm:h-[60vh] md:bg-circularLightMd md:dark:bg-circularDarkMd
    xs:h-[50vh] sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer
        dark:bg-light dark:text-dark
        lg:p-6 md:p-4 xs:text-xs xs:p-2
        '
        whileHover={{scale:1.05}}
        >
            Web
        </motion.div>

        <Skill name="Html" x="-28vw" y="2vh"/>
        <Skill name="Css" x="-5vw" y="-12vh"/>
        <Skill name="TailwindCss " x="0vw" y="42vh"/>
        <Skill name="BootstrapCss" x="0vw" y="14vh"/>
        <Skill name="Javascript" x="-23vw" y="-15vh"/>
        <Skill name="ReactJs" x="25vw" y="-12vh"/>
        <Skill name="NextJs" x="42vw" y="-5vh"/>
        <Skill name="Java" x="0vw" y="-28vh"/>
        <Skill name="C#" x="-22vw" y="18vh"/>
        <Skill name="SqlServer" x="21vw" y="18vh"/>

    </div>
    </>
  )
}

export default Skills