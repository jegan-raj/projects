import React from 'react'
import { useState } from 'react';
import { Element } from 'react-scroll'




// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'


import webdevelopmentCertificate from './Images/webdevelopment-certificate_page-0001 (1) (1).jpg'


const Certificate = () => {

  const [CounterOn, SetCounterOn] = useState(false)

  return (
    <Element id='Work'>
      <Box sx={{ backgroundColor: '#f2f2f2' }}>
        <Container>

          {/* WORK CONTAINER TOP (IMG NAD BUTTON) START*/}

          <Box>
            <Box pt={10}>
              <Typography textAlign={'center'} variant='h4'>My Remarkable Certificate</Typography>
            </Box>

            <Stack direction={'row'} spacing={2} pt={5} sx={{ display: "flex", justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ color: '#00b4d9' }}>All</Button>
              <Button variant="contained" sx={{ backgroundColor: '#00b4d9' }}>BASIC WEB</Button>
              <Button variant="contained" sx={{ backgroundColor: '#00b4d9' }}>REACT JS</Button>

            </Stack>

            <Stack direction={'row'} pt={6} sx={{ display: "flex", justifyContent: 'center' ,paddingBottom:'20px' }} >
              <Box>
              
                <img src={webdevelopmentCertificate} class="img-fluid" alt="Responsive image" />
              </Box>

            </Stack>

          </Box>
        </Container>

        {/* WORK CONTAINER TOP (IMG NAD BUTTON) END*/}



      </Box >


    </Element >
  )
}

export default Certificate
