import { Divider } from '@mui/material'
import React from 'react'
import Creativepeoples from '../Components/Creativepeoples'
import MainBanner from '../Components/MainBanner'
import MainTestimonial from '../Components/MainTestimonial'
import ProfessionsTeam from '../Components/ProfessionsTeam'
import Projectsdone from '../Components/Projectsdone'
import Services from '../Components/Services'
import Whatweare from '../Components/Whatweare'

const Home = () => {
  return (
    <>
    <MainBanner/>
    <Creativepeoples/>
    <Whatweare/>
    <Projectsdone/>
    <Divider/>
    <Services/>
    <ProfessionsTeam/>
    <MainTestimonial/>

    </>
  )
}

export default Home