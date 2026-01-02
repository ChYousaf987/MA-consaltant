import React from 'react'
import BlogMain from '../compounent/BlogMain'
import Navbar from '../compounent/Navbar'
import LatestBlog from '../compounent/LatestBlog'
import AllBlog from '../compounent/AllBlog'
import Footer from '../compounent/Footer'

const Blog = () => {
  return (
    <>
    <Navbar/>
    <BlogMain/>
    <LatestBlog/>
    <AllBlog/>
    <Footer/>
    </>
  )
}

export default Blog