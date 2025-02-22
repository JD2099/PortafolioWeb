import AnimatedText from '@/components/animatedText'
import Layout from '@/components/layout'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react'
import article1 from '../../public/images/articles/proximamente.png'
import { motion, useMotionValue } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';


const FramerImage = motion(Image);


const MovingImage = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);


    function handleMouse(e) {
        imgRef.current.style.display="inline-block";
        x.set(e.pageX);
        y.set(-110);
    };

    function handleMouseLeave(e) {
        imgRef.current.style.display="none";
        x.set(0);
        y.set(0);
    };


    return (
        <Link href={link}
               target='_blank'
              onMouseMove={handleMouse}
              onMouseLeave={handleMouseLeave} >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage ref={imgRef}
                   src={img}
                   alt={title}
                   className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'
                   style={{x:x, y:y}}
                   initial={{opacity:0}}
                   whileInView={{opacity:1, transition:{duration:0.2}}}/>    
        </Link>
    );
};

const Article = ({img, title, date, link}) =>{
    return(
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:'easeInOut'}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0
        border border-solid border-dark border-r-4 border-b-4
        dark:bg-dark dark:text-light dark:border-light
        sm:flex-col'>
            <MovingImage title={title}
                         img={img}
                         link={link}
            />
            <span className='text-cyan-800 font-semibold dark:text-primary 
            sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    );
};


const FeaturedArticle = ({img, title, time, summary, link}) => {
    return(
        <li className='col-span-1 w-full p-4 bg-light rounded-2xl relative
        border border-solid border-dark
        dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light'/>
            <Link href={link} 
                  target='_blank'
                  className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                    <FramerImage src={img}
                           alt={title}
                           className='w-full h-auto' 
                           whileHover={{scale:1.05}}
                           transition={{duration:0.2}}
                           priority  sizes="(max-width:768px) 100vw, 
               (max-width:1200px) 50vw, 50vw"/> 
            </Link>
            <Link href={link}
                  target='_blank'>
                  <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline
                  xs:text-lg'>
                    {title}
                  </h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-cyan-800 font-semibold dark:text-primary'>{time}</span>
        </li>
    );
};



const articles = () => {
  return (
    <>
        <Head>
            <title>Juan Diego Castillo | Articles Page</title>
            <meta name='description' content='Página para conocer más acerca de Juan Diego Castillo'></meta>
        </Head>
        <TransitionEffect />
        <main className='mb-32 w-full flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Words Can Change The World!'
                className='mb-16
                lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <ul className='grid grid-cols-2 gap-16  
                lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedArticle 
                    title='Coming soon'
                    summary='Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla primis felis natoque orci malesuada vulputate, aptent nullam penatibus inceptos tempus ullamcorper ultricies blandit duis habitant hac suscipit. Tristique suspendisse nostra rhoncus ad, fames curabitur eros porta a, facilisi pharetra magnis.'
                    time='N min read'
                    link='/'
                    img={article1}
                    />
                    <FeaturedArticle 
                    title='Coming soon'
                    summary='Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla primis felis natoque orci malesuada vulputate, aptent nullam penatibus inceptos tempus ullamcorper ultricies blandit duis habitant hac suscipit. Tristique suspendisse nostra rhoncus ad, fames curabitur eros porta a, facilisi pharetra magnis.'
                    link='/'
                    time='N min read'
                    img={article1}
                    />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                <ul>
                    <Article
                    title='Coming soon'
                    date='August 01, 2023'
                    link='/'
                    img={article1}
                    /> 
                    <Article
                    title='Coming soon'
                    date='August 01, 2023'
                    link='/'
                    img={article1}
                    />                      
                </ul>
            </Layout>
        </main>

    </>
  )
}

export default articles