import React from 'react'

// React-Scroll
import { Element, Link } from 'react-scroll'

// React ICon
import { SlGraduation } from "react-icons/sl";
import { BsWebcam } from "react-icons/bs";

// MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Grid, Typography } from '@mui/material'


const Resume = () => {
  return (
    <Element id='Reusme'>
      <Container>



        <Grid container pt={8}>

          {/* RESUME LEFT SIDE DETAILS START */}

          <Grid item xs={12} md={6} lg={6}>
            <Container sx={{ padding: "20px" }}>
              <Box sx={{ flex: '0.5' }}>

                <Box sx={{
                  width: '150px',
                  display: "flex",
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>

                  {/* EDUCATION ICON  */}

                  <Box sx={{
                    height: '50px',
                    width: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#00b4d9',
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <SlGraduation style={{ color: '#fff', height: '30px', width: '30px' }} />
                  </Box>

                  <Typography >EDUCATION</Typography>
                </Box>

              </Box>



              <ul style={{}}>

                <li style={{ color: "#00b4d9", marginTop: '20px', listStyle: 'none' }}>

                  <Box sx={{ padding: '20px', backgroundColor: '#f2f2f2' }}>

                    <Typography style={{ color: '#343a40' }} variant='body1' >Concordia higher secondary school</Typography>
                    <Typography variant='body2' style={{ color: '#6c757d', marginTop: '10px', marginBottom: '10px' }}>2012 - 2016</Typography>
                    <Typography variant='p' style={{ color: '#6c757d', fontSize: '13px' }} >Goverment school, Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</Typography>

                  </Box>

                </li>

                <li style={{ color: "#00b4d9", marginTop: '20px', listStyle: 'none' }}>

                  <Box sx={{ padding: '20px', backgroundColor: '#f2f2f2' }}>

                    <Typography style={{ color: '#343a40' }} variant='body1'>pet polytechnic college</Typography>
                    <Typography variant='body2' style={{ color: '#6c757d', marginTop: '10px', marginBottom: '10px' }}>2017 - 2020</Typography>
                    <Typography variant='p' style={{ color: '#6c757d', fontSize: '13px' }}>Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</Typography>

                  </Box>

                </li>

                <li style={{ color: "#00b4d9", marginTop: '20px', listStyle: 'none' }}>

                  <Box sx={{ padding: '20px', backgroundColor: '#f2f2f2' }}>

                    <Typography style={{ color: '#343a40' }} variant='body1'>pet engineering college</Typography>
                    <Typography variant='body2' style={{ color: '#6c757d', marginTop: '10px', marginBottom: '10px' }}>2020 - 2023</Typography>
                    <Typography variant='p' style={{ color: '#6c757d', fontSize: '13px' }}>Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.</Typography>

                  </Box>

                </li>

              </ul>

            </Container>


          </Grid>

          {/* RESUME LEFT SIDE DETAILS END */}


          {/* RESUME RIGHT SIDE DETAILS START */}

          <Grid item xs={12} md={6} lg={6}>
            <Container sx={{ padding: '20px' }}>
              <Box sx={{
                flex: '0.5'

              }}
              >
                <Box sx={{
                  width: '150px',
                  display: "flex",
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>

                  {/* PROJECT ICON */}
                  
                  <Box sx={{
                    height: '50px',
                    width: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#00b4d9',
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <BsWebcam style={{ color: '#fff', height: '25px', width: '25px' }} />
                  </Box>

                  <Typography>PROJECT</Typography>
                </Box>


              </Box>
              <ul style={{}}>

                <li style={{ color: "#00b4d9", marginTop: '20px', listStyle: 'none' }}>

                  <Box sx={{ padding: '20px', backgroundColor: '#f2f2f2' }}>

                    <Typography style={{ color: '#343a40' }} variant='body1'>E commerce website</Typography>
                    <Typography variant='body2' style={{ color: '#6c757d', marginTop: '5px', marginBottom: '5px' }}>Shopping website</Typography>
                    <Typography variant='p' style={{ color: '#6c757d', fontSize: '13px' }}>The Online Shopping Website is a web-based platform designed to provide users with a convenient and user-friendly interface for browsing, searching, and purchasing products or services online. </Typography>

                  </Box>

                </li>

                <li style={{ color: "#00b4d9", marginTop: '20px', listStyle: 'none' }}>

                  <Box sx={{ padding: '20px', backgroundColor: '#f2f2f2' }}>

                    <Typography style={{ color: '#343a40' }} variant='body1'>E commerce website</Typography>
                    <Typography variant='body2' style={{ color: '#6c757d', marginTop: '5px', marginBottom: '5px' }}>Grocery products sell</Typography>
                    <Typography variant='p' style={{ color: '#6c757d', fontSize: '13px' }}>This website only made for all local grocery shop owners . here’s they can  upload them products  and sell as them wish  .  They can sell the product prize them wish also .</Typography>

                  </Box>

                </li>

                <li style={{ color: "#00b4d9", marginTop: '20px', listStyle: 'none' }}>

                  <Box sx={{ padding: '20px', backgroundColor: '#f2f2f2' }}>

                    <Typography style={{ color: '#343a40' }} variant='body1'>professional website</Typography>
                    <Typography variant='body2' style={{ color: '#6c757d', marginTop: '5px', marginBottom: '5px' }}>Labours Booking </Typography>
                    <Typography variant='p' style={{ color: '#6c757d', fontSize: '13px' }}>If you need any labour you can book the labour this website near by you  like  mechanic , construction workers ,plumber, electrition.They will full fill your purpose 100% .</Typography>

                  </Box>

                </li>


              </ul>
            </Container>
          </Grid>

          {/* RESUME RIGHT SIDE DETAILS END */}


        </Grid>

      </Container>


    </Element>
  )
}

export default Resume
