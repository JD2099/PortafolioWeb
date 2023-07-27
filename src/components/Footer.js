import React from 'react'
import Layout from './layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg px-8 mt-5
    '>
        <Layout className='py-8 flex items-center justify-center'>
            <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
            
        </Layout>
    </footer>
  )
}

export default Footer