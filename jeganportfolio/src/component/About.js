import React from 'react'

// React-Scroll
import { Element, Link } from 'react-scroll'

// MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import img1 from '../component/Images/jegan.jpeg'
import { Button, Grid, Stack, Typography } from '@mui/material'

// MUI -Icon
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MessageIcon from '@mui/icons-material/Message';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


// Resume
import Rsume from './Images/webdevelopment-certificate_page-0001 (1) (1).jpg'


const ListKey = ["Name",
  "Age",
  "Experience",
  "Country",
  "Location",
  "e-mail",
  "Phone"

]

const dot = [":", ":", ":", ":", ":", ":", ":"]

const ListValue = ["Jegan Raj",
  "21 Years",
  "Fresher",
  "India",
  "Tirunelveli",
  "jeganraj0102@gmail.com",
  "+ (91) 6369 121 662"

]



const About = () => {
  return (
    <Element id='About' >


      <Grid container >

        {/*About Img Container - Start */}


        <Grid item xs={12} md={12} lg={6}>
          <Box sx={{ flex: '0.5' }}>
            <Container sx={{ marginTop: '100px' }}>

              <Stack>
                <img src={img1} alt="" class="img-thumbnail img-fluid" style={{ boxShadow: ' 0px  0px  15px 2px rgba(0, 0, 0, 0.576)' }}
                  data-aos="fade-right"
                  data-aos-duration="2000" />
              </Stack>

            </Container>
          </Box>

        </Grid>

        {/*About Img Container - End */}

        {/* About Bio Data - Start */}

        <Grid item xs={12} md={12} lg={6}>

          <Box sx={{
            flex: '0.5',
            marginTop: "100px",
            marginLeft: "40px"
          }}
            data-aos="fade-right"
            data-aos-duration="2000">
            <Typography variant='h4' sx={{ color: 'rgba(0, 0, 0, 0.676)' }} >HI GUYS!</Typography> <br />
            <Typography variant='caption' lineHeight={3} letterSpacing={1} sx={{ color: 'rgba(0, 0, 0, 0.576)' }} >I'm  Jegan Raj, a passionate and detail-oriented front-end developer eager to make a mark in the digital world.
              Armed with a solid foundation in HTML, CSS, and JavaScript, I thrive on turning creative ideas into functional, user-friendly websites. My journey into the world of web development began with a curiosity for crafting visually appealing and seamless user experiences.
              My skill set extends to responsive web design, ensuring that the websites I create not only look stunning on desktops but also provide an optimal viewing experience across various devices. I'm committed to staying up-to-date with the latest trends and technologies in the ever-evolving landscape of front-end development.
              Proficient in popular front-end frameworks such as React.js , I enjoy the challenge of building interactive and dynamic user interfaces that enhance the overall user experience.

            </Typography>



            <Grid container columns={12} pt={2}>


              <Grid item xs={4} md={2} lg={2}>

                {
                  ListKey.map((ListKey) => { return <Typography fontFamily={'cursive'} fontWeight={'bold'} variant='body1'>{ListKey}</Typography> })
                }

              </Grid>
              <Grid item xs={1} md={1} lg={1}>

                {
                  dot.map((dot) => { return <Typography variant='body1'>{dot}</Typography> })
                }


              </Grid>
              <Grid item xs={7} md={4} lg={4}>

                {
                  ListValue.map((listData) => {
                    return <Typography variant='body1' fontFamily={'sans-serif'} noWrap>{listData}</Typography>
                  })
                }


              </Grid>


            </Grid>

            {/* BUUTON CONTAINER START */}

            <Box sx={{ marginTop: '30px', marginBottom: '40px' }}>

              <Button variant="contained" color='info' startIcon={<AttachFileIcon />} size='large'><a href={Rsume} download='resume.jpg' style={{textDecoration:'none' , color:'#fff'}}>DOWNLOAD RESUME </a> </Button>

              <Link to='Contact' smooth={true} duration={5000}>

                <Button variant="contained" color='error' startIcon={<MessageIcon />} size='large'
                  sx={{ marginLeft: "20px" }}>CONTACT ME
                </Button>

              </Link>
            </Box>

            {/* BUUTON CONTAINER END */}


          </Box>




        </Grid>

      </Grid>

      {/* About Bio Dta - End */}





    </Element >

  )
}

export default About
