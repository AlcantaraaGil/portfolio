import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import imgDev from '../assets/7-dark.png';

export const About = () => {
  return (
    <>
    <div className="about-text">
      <Typography fontSize={25} color='secondary'>About me</Typography>
    </div>
    <Card sx={{ display:'flex', maxWidth: '70vw',margin: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
        <CardContent sx={{ maxWidth: '60%'}}>
        <Typography variant="body1" color="text.secondary">
            I'm familiar with HTML, CSS, and <span className='highlighted'>JavaScript</span>, which I use to build interactive and responsive websites. I'm also learning and working with <span className='highlighted-blue'>React.js</span> to develop modern web applications.
        </Typography>
        <br/>
        <a href="https://www.linkedin.com/in/alcantaraagil/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon sx={{ marginRight: '10px', color: '#0077B5' }} />  {/* Azul LinkedIn */}
        </a>
        <a href="https://github.com/AlcantaraaGil" target="_blank" rel="noopener noreferrer">
          <GitHubIcon sx={{ color: 'white' }} />  {/* Negro GitHub */}
        </a>

        </CardContent>
    </Box>
        <CardMedia
        component='img'
        sx={{ width: '30vw' }}
        image={imgDev}
        alt="me illustration"
        />
  </Card>
    </>
  )
}
