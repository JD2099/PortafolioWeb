import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () =>{
    return (
        <div className="flex items-center justify-center mt-2">
            <MotionLink href='/'
                className="w-16 h-16 bg-dark text-light flex items-center justify-center
                rounded-full text-2xl font-bold
                border border-solid border-transparent
                dark:border-light
                "
                whileHover={{
                    backgroundColor:["#121212", "rgba(11, 114, 133, 1)","rgba(28, 158, 11, 0.8)","rgba(10, 13, 128, 0.8)","rgba(11, 114, 133, 1)", "#121212"],
                    transition:{duration:1, repeat:Infinity}}}
                >JD</MotionLink>
        </div>
    );
};

export default Logo;