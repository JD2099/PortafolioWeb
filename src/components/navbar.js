import React, { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { useRouter } from "next/router";
import  { GithubIcon, LinkedInIcon, InstagramIcon, SunIcon, MoonIcon } from "./icons";
import {motion} from "framer-motion";
import useThemeSwitcher from "./hoooks.js/useThemeSwitcher";

const CustomLink = ({href, title, className=""}) =>{
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block  bg-dark
                              absolute left-0 -bottom-0.5
                              group-hover:w-full transition-[width] ease duration-300
                              ${router.asPath === href ? 'w-full' : 'w-0'}
                              dark:bg-light `}
            >&nbsp;</span>
        </Link>
    );
};

const CustomMobileLink = ({href, title, className="", toggle}) =>{
    const router = useRouter();
    
    const handleClic = () =>{
        toggle();
        router.push(href)
    };

    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClic}>
            {title}

            <span className={`h-[1px] inline-block  bg-light
                              absolute left-0 -bottom-0.5
                              group-hover:w-full transition-[width] ease duration-300
                              ${router.asPath === href ? 'w-full' : 'w-0'}
                              dark:bg-dark `}
            >
                &nbsp;
            </span>
        </button>
    );
};

const NavBar = () =>{

    const[mode, setMode] = useThemeSwitcher();
    const[isOpen, setIsOpen] = useState(false);

    const handleClic = () => {
        setIsOpen(!isOpen);
    };


    return(
        <header
          className="w-full px-32 py-8 font-medium flex items-center justify-between
          dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8" >

            <button className="flex-col justify-center items-center hidden lg:flex 
            md:absolute md:right-auto md:left-22 md:top-10 md:bottom-auto" onClick={handleClic}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out 'rotate-45 translate-y-1' : '-translate-y-0.5' h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span> 
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out 'rotate-45 translate-y-1' : '-translate-y-0.5' h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out 'rotate-45 translate-y-1' : '-translate-y-0.5' h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}` }></span>
            </button>

            <div className="w-full flex justify-between items-center lg:invisible">
                <nav>
                    <CustomLink href='/' title="Home" className="m-4"/>
                    <CustomLink href='/about' title="About" className="mx-4"/>
                    <CustomLink href='/projects' title="Projects" className="mx-4"/>
                    <CustomLink href='/articles' title="Articles" className="ml-4"/>
                </nav>

                <nav className="flex items-center justify-center flex-wrap"> 
                    <motion.a href='https://www.instagram.com/jd__castillo/' target={'_blank'} rel="noopener noreferrer"
                    whileHover={{y:-2}}
                    whileTap={{scale : 0.9}}
                    className="w-6 mx-3 "
                    >
                        <InstagramIcon />
                    </motion.a>
                    <motion.a href='https://github.com/JD2099' target={'_blank'} rel="noopener noreferrer"
                    whileHover={{y:-2}}
                    whileTap={{scale : 0.9}}
                    className="w-6 mx-3 bg-light rounded-full dark:bg-dark">
                        <GithubIcon />
                    </motion.a>
                    <motion.a href='https://www.linkedin.com/in/juan-diego-castillo-chavez-523257267/' target={'_blank'} rel="noopener noreferrer"
                    whileHover={{y:-2}}
                    whileTap={{scale : 0.9}}
                    className="w-6 mx-3 ">
                        <LinkedInIcon />
                    </motion.a>
                
                    <button onClick={() => setMode(mode === 'light'? 'dark' : 'light')}
                    className={`ml-3 flex items-center justify-center rounded-full lg:hidden
                    ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
                    `}
                    >
                    {
                        mode === 'dark'? <SunIcon className={'fill-dark'} />
                        : <MoonIcon className={'fill-dark'} />
                    }
                    </button>

                </nav>
            </div>

            {
                isOpen ?

            <motion.div 
            initial={{scale:0, opacity:0, x:"-50%", y: "-50%" }}
            animate={{scale:1, opacity:1}}
            className="z-10 min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-dark/90 dark:bg-light/75 rounded-lg backdrop:blur-md py-32">
                <nav className="flex items-center flex-col justify-center">
                    <CustomMobileLink href='/' title="Home" className="" toggle={handleClic}/>
                    <CustomMobileLink href='/about' title="About" className="" toggle={handleClic}/>
                    <CustomMobileLink href='/projects' title="Projects" className="" toggle={handleClic}/>
                    <CustomMobileLink href='/articles' title="Articles" className="" toggle={handleClic}/>
                </nav>

                <nav className="mt-2 flex items-center justify-center flex-wrap"> 
                    <motion.a href='https://www.instagram.com/jd__castillo/' target={'_blank'} rel="noopener noreferrer"
                    whileHover={{y:-2}}
                    whileTap={{scale : 0.9}}
                    className="w-6 mr-3 sm:mx-1"
                    >
                        <InstagramIcon />
                    </motion.a>
                    <motion.a href='https://github.com/JD2099' target={'_blank'} rel="noopener noreferrer"
                    whileHover={{y:-2}}
                    whileTap={{scale : 0.9}}
                    className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark">
                        <GithubIcon />
                    </motion.a>
                    <motion.a href='https://www.linkedin.com/in/juan-diego-castillo-chavez-523257267/' target={'_blank'} rel="noopener noreferrer"
                    whileHover={{y:-2}}
                    whileTap={{scale : 0.9}}
                    className="w-6 mx-3 sm:mx-1">
                        <LinkedInIcon />
                    </motion.a>
                
                    <button onClick={() => setMode(mode === 'light'? 'dark' : 'light')}
                    className={`ml-3 flex items-center justify-center rounded-full sm:mx-1 p-1 
                    ${mode === 'light' ? 'bg-dark  text-light' : 'bg-light text-dark '}
                    `}
                    >
                    {
                        mode === 'dark'? <SunIcon className={'fill-dark'} />
                        : <MoonIcon className={'fill-dark'} />
                    }
                    </button>

                </nav>
            </motion.div>

                :null
            }
            
            

            <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
                <Logo></Logo> 
            </div>
        </header>
    );
};

export default NavBar;