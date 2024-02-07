//RACT
import { Element } from 'react-scroll'

//CSS
import '../component/Header.css'

// React icon
import { SlSocialFacebook } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

// BOOTSTARP
import 'bootstrap/dist/css/bootstrap.min.css';

//MUI
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'







const Header = () => {

  return (
    <Element id='Header' >


      <div className='Header-background' >
        <Box sx={{ height: '100%', boxShadow: ' inset 0 0 0  1000px rgba(0, 0, 0, 0.576)' }} >

          <Grid container direction={'column'} alignItems={'center'} >

            {/* HEADER NAME START */}

            <Grid item xs={'auto'} sm={12} md={12} lg={12}>
              <Typography variant='h3' pt={10} sx={{ color: '#ffff', fontFamily: 'Caveat, cursive' }} data-aos="fade-up" data-aos-duration="1000">Hi This is</Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant='h2' pt={2} sx={{ color: '#ffff' }} data-aos="fade-up" data-aos-duration="1000">Jegan Raj</Typography>
            </Grid>

            <Grid item xs={'auto'} sm={12} md={12} lg={12}>
              <Typography variant='h3' pt={2} sx={{ color: '#ffff', fontFamily: 'Caveat, cursive' }} data-aos="fade-up" data-aos-duration="2500">Front end developer</Typography>
            </Grid>

            {/* HEADER NAME END */}


            {/* HEADER ICON START */}

            <Grid container spacing={2} data-aos="fade-up" data-aos-duration="3000" >

              <Grid item xs={12} md={12} lg={12} sx={{ height: '50px', width: '100%', display: "flex", alignItems: 'center', justifyContent: 'center' }}>

                <Stack direction="row" spacing={3} pt={6} sx={{ color: '#000', fontSize: '18px', }}>
                  <Box sx={{ height: '35px', width: '35px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <a href="https://www.facebook.com/kjegan.raj.1?sfnsn=wiwspwa&mibextid=RUbZ1f"><SlSocialFacebook style={{color:'#000'}}/></a>
                  </Box>



                  <Box sx={{ height: '35px', width: '35px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <a href="https://www.instagram.com/jeganraj_k?igsh=OGQ5ZDc2ODk2ZA==">  <FiInstagram style={{color:'#000'}}/></a>
                  </Box>


                  <Box sx={{ height: '35px', width: '35px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <a href="https://www.linkedin.com/in/jegan-webdeveloper" > <SlSocialLinkedin style={{color:'#000'}}/></a>
                  </Box>

                  <Box sx={{ height: '35px', width: '35px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <a href="https://github.com/jegan-raj" ><FiGithub style={{color:'#000'}}/></a>
                  </Box>


                </Stack>

              </Grid>

            </Grid>

            {/* HEADER ICON END */}


          </Grid>

        </Box>


      </div>

    </Element>
  )
}

export default Header
