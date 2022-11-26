import React from 'react'
import HeadersRest from '../Components/HeadersRest'
import MainTestimonial from '../Components/MainTestimonial'
import MissonVApproch from '../Components/MissonVApproch'
import OurTeam from '../Components/OurTeam'
import TextImage from '../Components/TextImage'
import image from '../images/bg/home-2.jpg'

const About = () => {
  return (
    <>
    <HeadersRest title="about us" image={image} mainTitle="Our Company"/>
    <TextImage/>
    <MissonVApproch/>
    <OurTeam/>
    <MainTestimonial bg="#f1f1f1"/>
    </>
  )
}

export default About