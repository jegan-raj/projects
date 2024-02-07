import React from 'react'
import { Element } from 'react-scroll'

// MUI 
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// React ICon

import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa";


const Courses = () => {
  return (
    <Element id='Services'>


      <Box sx={{ height: 'auto', width: '100%', backgroundColor: '#f8f9fa', paddingTop: '30px' }} paddingBottom={'100PX'}>

        {/* Text */}

        <Typography align='center' variant='h4' Element='div' pt={8}>  What i did </Typography>

        <Container sx={{ marginTop: '50px' }}>

          <Grid container spacing={6} alignItems={'center'} justifyContent={'center'}>


            {/* WEB BASIC START*/}

            <Grid item xs={12} md={6} lg={3}>
              <Box data-aos="fade-down" data-aos-duration="2300" sx={{
                height: '300px',
                width: 'auto',
                backgroundColor: '#fff',
                boxShadow: ' 0px  0px  15px 2px rgba(0, 0, 0, 0.176)'
              }}>
                <Container sx={{
                  display: 'flex',
                  flexDirection: "column",
                  alignItems: "center",
                  color: '#666666'
                }}>
                  <CgWebsite style={{
                    color: '#00b4d9',
                    height: '50px',
                    width: '50px',
                    marginTop: "20px"
                  }} /> <br />
                  <Typography variant='body1'>web development basic</Typography> <br />
                  <Typography variant='p'>I have completed web development basic course in 2023 . This course duration is 40 hours .</Typography>
                </Container>
              </Box>
            </Grid>

            {/* WEB BASIC END */}

            {/* REACT JS START */}

            <Grid item sx={12} md={6} lg={3}>
              <Box data-aos="fade-down" data-aos-duration="2600" sx={{
                height: '300px',
                width: 'auto',
                backgroundColor: '#fff',
                boxShadow: ' 0px  0px  15px 2px rgba(0, 0, 0, 0.176)'
              }}>
                <Container sx={{
                  display: 'flex',
                  flexDirection: "column",
                  alignItems: "center",
                  color: '#666666'
                }}>
                  <FaReact style={{
                    color: '#00b4d9',
                    height: '50px',
                    width: 'auto',
                    marginTop: "20px"
                  }} /> <br />
                  <Typography variant='body1' sx={{ color: '#666666' }}>REACT JS </Typography> <br />
                  <Typography variant='p'>I have completed Advanced React js  course in 2023 . This course duration same as basic course. </Typography>
                </Container>
              </Box>
            </Grid>

            {/* REACT JS END */}



          </Grid>
        </Container>

      </Box>


    </Element>
  )
}

export default Courses
