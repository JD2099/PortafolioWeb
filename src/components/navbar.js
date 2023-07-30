import React from "react";
import Link from "next/link";
import Logo from "./logo";
import { useRouter } from "next/router";
import  { GithubIcon, LinkedInIcon, InstagramIcon, SunIcon, MoonIcon } from "./icons";
import {motion} from "framer-motion";
import useThemeSwitcher from "./hoooks.js/useThemeSwitcher";

const CustomLink = ({href, title, className=""}) =>{
    const router = useRouter();
    console.log(router);
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

const NavBar = () =>{

    const[mode, setMode] = useThemeSwitcher();

    return(
        <header
          className="w-full px-32 py-8 font-medium flex items-center justify-between
          dark:text-light" >
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
                className="w-6 mx-3"
                >
                    <InstagramIcon />
                </motion.a>
                <motion.a href='https://github.com/JD2099' target={'_blank'} rel="noopener noreferrer"
                whileHover={{y:-2}}
                whileTap={{scale : 0.9}}
                className="w-6 mx-3">
                    <GithubIcon />
                </motion.a>
                <motion.a href='https://www.linkedin.com/in/juan-diego-castillo-chavez-523257267/' target={'_blank'} rel="noopener noreferrer"
                whileHover={{y:-2}}
                whileTap={{scale : 0.9}}
                className="w-6 mx-3">
                    <LinkedInIcon />
                </motion.a>
            
                <button onClick={() => setMode(mode === 'light'? 'dark' : 'light')}
                className={`ml-3 flex items-center justify-center rounded-full
                ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
                `}
                >
                {
                    mode === 'dark'? <SunIcon className={'fill-dark'} />
                    : <MoonIcon className={'fill-dark'} />
                }
                </button>

            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
                <Logo></Logo> 
            </div>
        </header>
    );
};

export default NavBar;