import React from 'react'
import './Contact.css'
import { Element } from 'react-scroll'

// MUI 
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// ICON FROM REACT
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";


const Contact = () => {
  return (
    <Element id='Contact' >

      <Box pt={1}>
        <Container sx={{ boxShadow: '1px 1px 3px 2px #D9D9D9', marginTop: '100px' }}>

          <Container>

            <Grid container>

              {/* CONTACT FORM LEFT SIDE START */}

              <Grid item xs={12} md={6} lg={6} sx={{ flex: '0.5' }}>

                <Container>

                  <Grid container>


                    <Grid item xs={12} md={12} lg={12} pt={4}>
                      <Box> <Typography variant='body1'>CONTACT FORM</Typography> </Box>
                    </Grid>

                    {/* CONTACT FORM START*/}

                    <form action="#">
                      <Grid direction={'column'} pt={3}>
                        <Grid container direction={'row'} spacing={3}>

                          <Grid item xs={12} md={6} lg={6}>
                            <input type="text" name='name' placeholder='Name' style={{ height: '30px', paddingLeft: '20px', outlineColor: '#A9DFEA', border: '1px solid #D9D9D9' }} />


                          </Grid>
                          <Grid item xs={12} md={6} lg={6}>
                            <input type="phone" name='phone' placeholder='Phone' style={{ height: '30px', paddingLeft: '20px', outlineColor: '#A9DFEA', border: '1px solid #D9D9D9' }} />


                          </Grid>

                        </Grid>

                        <Grid container direction={'row'} spacing={3} pt={4}>

                          <Grid item xs={12} md={6} lg={6}>
                            <input type="text" name='subject' placeholder='Subject' style={{ height: '30px', paddingLeft: '20px', outlineColor: '#A9DFEA', border: '1px solid #D9D9D9' }} />


                          </Grid>
                          <Grid item xs={12} md={6} lg={6}>
                            <input type="email" name='email' placeholder='E-mail' style={{ height: '30px', paddingLeft: '20px', outlineColor: '#A9DFEA', border: '1px solid #D9D9D9' }} />

                          </Grid>

                        </Grid>

                        <Grid item xs={12} md={6} lg={6} pt={3}>
                          <textarea name="message" id="" cols="31" rows="3" placeholder='Your Message' style={{ outlineColor: '#A9DFEA', padding: '20px', border: '1px solid #D9D9D9' }}></textarea>


                        </Grid>


                        <Grid item xs={12} md={6} lg={6} pt={3}>
                          <Button type='submit' variant="contained" sx={{ backgroundColor: '#00b4d9', border: '1px solid #D9D9D9' }}>SEND MESSAGE</Button>

                        </Grid>


                      </Grid>
                    </form>


                    {/* CONTACT FORM END*/}

                  </Grid>


                </Container>


              </Grid>

              {/* CONTACT FORM LEFT SIDE END */}

              {/* CONTACT DETAIL RIGHT SIDE START */}


              <Grid item xs={12} md={6} lg={6} sx={{ flex: '0.5' }}>


                <Grid container>

                  {/* CONTACT DETAIL TITLE */}

                  <Grid item xs={12} md={12} lg={12} pt={4}>
                    <Box> <Typography variant='body1'>CONTACT ADDRESS</Typography> </Box>
                  </Grid>


                  <Grid container sx={{ border: '1px solid #D9D9D9', paddingBottom: '20px', marginTop: '30px' }}>

                    <Container>

                      {/* CONTACT DETAIL CONTAINER START */}
                      <Grid container direction={'column'} >

                        {/* CONTACT DETAIL CONTAINER - LOCATION */}

                        <Grid container direction={'row'} alignItems={'center'} spacing={3} pt={3}>

                          <Grid item xs={12} md={2} lg={2}>

                            <Box sx={{ height: '40px', width: '40px', borderRadius: '50%', backgroundColor: '#00b4d9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                              <FaLocationDot style={{ color: '#fff' }} />

                            </Box>
                          </Grid>
                          <Grid item xs={12} md={10} lg={10}>

                            <Box sx={{ color: '#9F9F9F', fontSize: '14px' }}> <Typography variant='p'>Tirunelveli,Tamilnadu</Typography> </Box>

                          </Grid>

                        </Grid>

                        {/* CONTACT DETAIL CONTAINER - E MAIL */}


                        <Grid container direction={'row'} alignItems={'center'} spacing={3} pt={3}>

                          <Grid item xs={12} md={2} lg={2}>

                            <Box sx={{ height: '40px', width: '40px', borderRadius: '50%', backgroundColor: '#00b4d9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                              <FaEnvelope style={{ color: '#fff' }} />

                            </Box>
                          </Grid>

                          <Grid item xs={12} md={10} lg={10}>

                            <Typography variant='p' sx={{ color: '#9F9F9F', fontSize: '14px' }}> jeganraj0102@gmail.com</Typography> <br />

                          </Grid>
                        </Grid>

                        {/* CONTACT DETAIL CONTAINER - PHONE */}


                        <Grid container direction={'row'} alignItems={'center'} spacing={1} pt={3}>

                          <Grid item xs={12} md={2} lg={2}>

                            <Box sx={{ height: '40px', width: '40px', borderRadius: '50%', backgroundColor: '#00b4d9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                              <FaPhone style={{ color: '#fff' }} />

                            </Box>
                          </Grid>

                          <Grid item xs={12} md={10} lg={10}>

                            <Box sx={{ color: '#9F9F9F', fontSize: '14px' }}> <Typography variant='p'>+ (91) 6369 121 662</Typography> <br />


                            </Box>
                          </Grid>
                        </Grid>

                      </Grid>

                      {/* CONTACT DETAIL CONTAINER END */}

                    </Container>

                  </Grid>

                </Grid>


              </Grid>

              {/* CONTACT DETAIL RIGHT SIDE END ^ */}


            </Grid>

            {/* CONTACT DETAIL CONTAINER - GOOGLE-MAP */}

            <div className='map-responsive'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.988860125773!2d77.62845977515335!3d8.402753798477027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0467e6001e7d0f%3A0x3542b441ad3bb29!2sjegan%20RajHouse!5e0!3m2!1sen!2sin!4v1706007101341!5m2!1sen!2sin" style={{ width: "", height: "", style: "border:0;", allowFullscreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: 'Responsive Google Map' }}></iframe>
            </div>

          </Container>

        </Container>

      </Box>

    </Element>
  )
}

export default Contact
