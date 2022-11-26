import React from 'react'
import HeadersRest from '../Components/HeadersRest'
import image from './../images/blog/Blogs.jpg'

const Blog = () => {
  return (
    <section className='blog'>
      <HeadersRest title="Our Blog" mainTitle="Blog Articles" image={image}/>      
    </section>
  )
}

export default Blog