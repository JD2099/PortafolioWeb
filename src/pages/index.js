import Head from 'next/head';
import Layout from '@/components/layout';
import Image from 'next/image';
import FotoPersonal from '../../public/images/profile/fotoCvSinFondo.png';
import AnimatedText from '@/components/animatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Juan Diego Castillo | Home</title>
        <meta name="description" content="Portafolio de Juan Diego Castillo" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full  min-h-screen lg:-mt-32 md:mt-0
      dark:text-light dark:bg-dark'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full '>
              <Image src={FotoPersonal} alt="Juan Diego Castillo" className="w-auto h-screen lg:hidden md:inline-block md:w-full -translate-y-28 sm:-translate-y-10"
               priority  sizes="(max-width:768px) 100vw, 
               (max-width:1200px) 50vw, 33vw"/>
            </div>
            <div className='pb-2 w-1/2 flex flex-col items-center self-center 
            lg:w-full lg:text-center md:mt-6'>
              <AnimatedText text="to create something fantastic, you first have to imagine it." className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm lg:px-24 md:px-0 sm:text-xs'>
              Discover how I combine my passion for programming with the art of design. 
              I invite you to get to know me, explore projects and articles that reflect my skills in various technological solutions.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/CV WEB 02.2023.pdf" target='_blank'
                className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:text-dark dark:bg-light
                hover:dark:text-light hover:dark:bg-dark hover:dark:border-light
                md:p-2 md:px-4 md:text-base'
                download={true}
                >Resume <LinkArrow className={'w-6 ml-1'}/> </Link>
                <Link href="mailto:jdcastillodev@gmail.com" target='_blank'
                className='ml-4 text-lg font-medium capitalize text-dark underline
                dark:text-light md:text-base'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-16 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='Imagen de bombilla' className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}
