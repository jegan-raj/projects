//MUI
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

//REACT ICON
import { SlSocialFacebook } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";


const Footer = () => {
    return (
        <Grid container pt={10}>
            <Grid item xs={12} md={12} lg={12}>
                <Box sx={{ height: '200px', width: '100%', backgroundColor: '#1D2022' }}>
                    <Grid container spacing={2} pt={4} >

                        <Grid item xs={12} md={12} lg={12} sx={{ height: '50px', width: '100%', display: "flex", alignItems: 'center', justifyContent: 'center' }}>

                            <Stack direction="row" spacing={3} pt={4} sx={{ color: '#000', fontSize: '18px', }}>
                                <Box sx={{ height: '35px', width: '35px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <a href="https://www.facebook.com/kjegan.raj.1?sfnsn=wiwspwa&mibextid=RUbZ1f"><SlSocialFacebook style={{ color: '#000' }} /></a>
                                </Box>



                                <Box sx={{ height: '35px', width: '35px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <a href="https://www.instagram.com/jeganraj_k?igsh=OGQ5ZDc2ODk2ZA==">  <FiInstagram style={{ color: '#000' }} /></a>
                                </Box>


                                <Box sx={{ height: '35px', width: '35px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <a href="https://www.linkedin.com/in/jegan-webdeveloper" > <SlSocialLinkedin style={{ color: '#000' }} /></a>
                                </Box>

                                <Box sx={{ height: '35px', width: '35px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <a href="https://github.com/jegan-raj" ><FiGithub style={{ color: '#000' }} /></a>
                                </Box>




                            </Stack>

                        </Grid>

                    </Grid>

                    <Grid item xs={12} md={12} lg={12} textAlign={'center'} pt={5} sx={{ fontSize: '13px' }}>
                        <Typography variant='p' sx={{ color: '#fff' }}>Designed & Developed by</Typography> <a href="https://mui.com/" style={{ textDecoration: 'none' }}>mui</a>
                    </Grid>


                </Box>

            </Grid>

        </Grid>
    )
}

export default Footer
