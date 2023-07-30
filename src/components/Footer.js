import React from 'react'
import Layout from './layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg px-8 mt-0 text-light bg-dark
    dark:text-dark dark:bg-light dark:border-light
    '>
        <Layout className='py-2.5 flex items-center justify-center !bg-dark
        dark:!bg-light'>
            <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
            
        </Layout>
    </footer>
  )
}

export default Footer