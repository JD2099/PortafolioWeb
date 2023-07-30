import AnimatedText from '@/components/animatedText'
import { GithubIcon } from '@/components/icons';
import Layout from '@/components/layout'
import Head from 'next/head'
import Link from 'next/link';
import React from 'react'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import Image from 'next/image';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

const FeaturedProject =({type, title, summary, img, link, github}) =>{
    return (
        <article className='w-full flex items-center justify-between p-12 relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light
        dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
            rounded-br-3xl dark:bg-light' />
            <Link href={link} 
                  target='_blank'
                  className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                    <FramerImage src={img}
                           alt={title}
                           className='w-full h-auto'
                           whileHover={{scale:1.05}}
                           transition={{duration:0.2}} 
                           priority  sizes="(max-width:768px) 100vw, 
               (max-width:1200px) 50vw, 50vw"/> 
            </Link>
            
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-cyan-800 font-medium text-xl dark:text-primary'>{type}</span>
                <Link href={link}
                      target='_blank'
                      className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark/75 dark:text-light/75'>{summary}</p>

                <div className='mt-2 flex items-center'>
                    <Link href={github}
                        target='_blank'
                        className='w-10'>
                            <GithubIcon />
                    </Link>
                    <Link href={link}
                        target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border
                        hover:text-dark hover:bg-light hover:border-dark hover:border-solid hover:border
                        dark:bg-light dark:text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light'>
                            Visit Project
                    </Link>
                </div>

            </div>

        </article>
    );
};

const Project =({title,type, img, link, github}) =>{
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light p-6 relative
        dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl'/>
            <Link href={link} 
                  target='_blank'
                  className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <FramerImage src={img}
                           alt={title}
                           className='w-full h-auto'
                           whileHover={{scale:1.05}}
                           transition={{duration:0.2}} /> 
            </Link>
            
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-cyan-800 font-medium text-xl dark:text-primary'>{type}</span>
                <Link href={link}
                      target='_blank'
                      className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link}
                        target='_blank'
                        className=' rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border
                        hover:text-dark hover:bg-light hover:border-dark hover:border-solid hover:border
                        dark:bg-light dark:text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light'>
                            Visit
                    </Link>
                    <Link href={github}
                        target='_blank'
                        className='w-8'>
                            <GithubIcon />
                    </Link>
                    
                </div>

            </div>
        </article>
    );
};

const projects = () => {
  return (
    <>
        <Head>
            <title>Juan Diego Castillo | Projects Page</title>
            <meta name='description' content='Página para conocer los proyectos de Juan Diego Castillo'></meta>
        </Head>
        <main className='pb-2  w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Imagination Trumps Knowledge!'
                className='mb-16'
                />
                <div className='grid grid-cols-12 gap-24 gap-y-32'>
                    <div className='col-span-12 '>
                        <FeaturedProject 
                        title='Crypto Screener Application'
                        img={project1}
                        summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                        link="/"
                        github="/"
                        type='Featured Project'
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        title='Crypto Screener Application'
                        img={project1}
                        summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                        link="/"
                        github="/"
                        type='Featured Project'
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        title='Crypto Screener Application'
                        img={project1}
                        summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                        link="/"
                        github="/"
                        type='Featured Project'
                        />
                    </div>

                    <div className='col-span-12 '>
                        <FeaturedProject 
                        title='Crypto Screener Application'
                        img={project1}
                        summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                        link="/"
                        github="/"
                        type='Featured Project'
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        title='Crypto Screener Application'
                        img={project1}
                        summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                        link="/"
                        github="/"
                        type='Featured Project'
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        title='Crypto Screener Application'
                        img={project1}
                        summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                        link="/"
                        github="/"
                        type='Featured Project'
                        />
                    </div>

                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects