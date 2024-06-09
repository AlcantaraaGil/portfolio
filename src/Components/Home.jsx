import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import imgDev from '../assets/1-dark.png';

export const Home = () => {
  return (
    <Card sx={{ display:'flex', maxWidth: '80vw',marginTop: 5, height: '60vh' }}>
    <CardMedia
      component='img'
      sx={{ width: '30vw' }}
      image={imgDev}
      alt="developer illustration"
    />
    <Box sx={{ display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
        <CardContent>
        <Typography sx={{ margin:0}} gutterBottom variant="h5" component="div">
            Hi.
        </Typography>
        <Typography sx={{ margin:0}} gutterBottom variant="h5" component="div">
            I'm Gil,
        </Typography>
        <Typography sx={{ marginTop:0}} gutterBottom variant="h4" component="div" color='secondary'>
            Front End Developer
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
            I'm familiar with HTML, CSS, and JavaScript, which I use to build interactive and responsive websites. I'm also learning and working with React.js to develop modern web applications.
        </Typography> */}
        </CardContent>
    </Box>
  </Card>
  )
}
