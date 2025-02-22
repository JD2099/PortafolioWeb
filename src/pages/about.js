import AnimatedText from '@/components/animatedText'
import Layout from '@/components/layout'
import Head from 'next/head'
import Image from 'next/image'
import  {React, useEffect, useRef } from 'react'
import FotoPersonal from '../../public/images/profile/fotoB&N.png';
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'



const AnimatedNumbers = ({value})=>{
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once: true});

    useEffect(() =>{
        if(isInView){
            motionValue.set(value);
        }
    },[isInView, value, motionValue])

    useEffect(() =>{
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    },[springValue,value])

        return <span ref={ref}></span> 
};

const about = () => {
  return (
    <>
        <Head>
            <title>Juan Diego Castillo | About Page</title>
            <meta name='description' content='Página para conocer más acerca de Juan Diego Castillo'></meta>
        </Head>
        <TransitionEffect />
        <main className='overflow-hidden flex w-full flex-col items-center justify-center
        dark:text-light'>
            <Layout className='pt-16'>
            <AnimatedText text='create your own destiny!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl
            sm:mb-8'/>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-start 
                xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                    <p className='font-medium'>
                        Hello world, I am Juan Diego Castillo, I am from Lima, Peru. I am a student in the final years of computer science and informatics at Cibertec.
                        Passionate about technology, innovation and design. With desire to learn and improve myself every day, increasing my knowledge and skills. 
                    </p>
                    <p className='font-medium my-4'>
                    I enjoy researching from many sources and finding creative ways to solve different problems.
                    </p>
                    <p className='font-medium'> 
                    I am currently looking for pre-professional experience that will allow me to demonstrate my talent and capabilities, I know how to work in a team and under pressure, either designing, analyzing, or implementing innovative solutions.
                    </p>
                        
                </div>
                    
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8  dark:bg-dark dark:border-light
                        xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                            <Image src={FotoPersonal} alt='Juan Diego Castillo' className='w-full h-auto rounded-2xl'
                            priority  sizes="(max-width:768px) 100vw, 
                            (max-width:1200px) 50vw, 50vw"
                            />
                    </div>
                           
                        <div  className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 
                        xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold 
                                md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75
                                dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied client</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold 
                                md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={20} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75
                                dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold
                                md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75
                                dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                            </div>
                        </div>
 
                </div>
                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default about