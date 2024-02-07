// REACT
import { Link } from 'react-scroll'
import { Element } from 'react-scroll'

// MUI
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'

// MUI MENU ICON
import MenuIcon from '@mui/icons-material/Menu'

// FONT
import '@fontsource/roboto/700.css';
import { Drawer, Stack } from '@mui/material'
import { useState } from 'react'


const Navebar = () => {
  const [visible, setvisible] = useState(false)
  return (

    <AppBar position='fixed' sx={{ backgroundColor: "#fff", }}>
      <Element id='Home'>
        <Container >
          <Toolbar>
            <Typography variant='h6' color={"#007bff"} component='div' sx={{ flexGrow: '1', fontFamily: 'fontsource' }} >Jegan Raj</Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

              <Link to='Header' smooth={true} duration={500}><Button sx={{ color: "black", fontSize: '12px' }}>HOME</Button> </Link>
              <Link to='About' smooth={true} duration={500}><Button sx={{ color: "black", fontSize: '12px' }}>ABOUT</Button></Link>
              <Link to='Services' smooth={true} duration={500}><Button sx={{ color: "black", fontSize: '12px' }}>COURSES</Button></Link>
              <Link to='Reusme' smooth={true} duration={500}><Button sx={{ color: "black", fontSize: '12px' }}>RESUME</Button></Link>
              <Link to='Work' smooth={true} duration={500}> <Button sx={{ color: "black", fontSize: '12px' }}>Certificate</Button></Link>
              <Link to='Contact' smooth={true} duration={500}><Button sx={{ color: "black", fontSize: '12px' }}>CONTACT</Button></Link>

            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton size='large' edge='start' color='skyblue' onClick={() => { setvisible(true) }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>


        </Container>

        {/* DRAWER START */}


        <Drawer open={visible} placement='top' title='portfolio' onClose={() => {
          setvisible(false)

        }}>
          <Stack direction={'column'} alignItems={'center'} pt={5} sx={{ display: { xs: 'flex', md: 'none' }, width: '200px' }}>

            <Link to='Header' smooth={true} duration={500} onClick={() => { setvisible(false) }}>
              <Button sx={{ color: "black", fontSize: '12px' }} >HOME</Button>
              <hr />
            </Link>
           

            <Link to='About' smooth={true} duration={500} onClick={() => { setvisible(false) }}>
              <Button sx={{ color: "black", fontSize: '12px' }}>ABOUT</Button>
              <hr />

            </Link>
           
            <Link to='Services' smooth={true} duration={500} onClick={() => { setvisible(false) }}>
              <Button sx={{ color: "black", fontSize: '12px' }}>COURSES</Button>
              <hr />


            </Link>

            <Link to='Reusme' smooth={true} duration={500} onClick={() => { setvisible(false) }}>
              <Button sx={{ color: "black", fontSize: '12px' }}>RESUME</Button>
              <hr />

            </Link>

            <Link to='Work' smooth={true} duration={500} onClick={() => { setvisible(false) }}>
              <Button sx={{ color: "black", fontSize: '12px' }}>Certificate</Button>
              <hr />

            </Link>

            <Link to='Contact' smooth={true} duration={500} onClick={() => { setvisible(false) }}>
              <Button sx={{ color: "black", fontSize: '12px' }}>CONTACT</Button>
              <hr />

            </Link>

          </Stack>



        </Drawer>

        {/* DRAWER END */}

      </Element>



    </AppBar>

  )
}

export default Navebar
