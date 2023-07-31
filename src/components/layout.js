import React from "react";

const Layout = ({children, className =""}) => {
    return(
        <div className={`w-full h-full inline-block z-0 bg-light px-32 
        xl:pt-0 xl:px-24
        lg:pt-32 lg:px-16 
        md:pt-8 md:px-12 
        sm:pt-6 sm:px-8
        ${className}
                        dark:bg-dark`}>
            {children}
        </div>
    );
};

export default Layout;