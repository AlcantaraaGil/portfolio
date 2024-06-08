import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import imgDev from '../assets/7-dark.png';

export const About = () => {
  return (
    <Card sx={{ display:'flex', maxWidth: '80%',margin: 5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
        <CardContent sx={{ maxWidth: '80%'}}>
        <Typography variant="body1" color="text.secondary">
            I'm familiar with HTML, CSS, and JavaScript, which I use to build interactive and responsive websites. I'm also learning and working with React.js to develop modern web applications.
        </Typography>
        </CardContent>
    </Box>
        <CardMedia
        component='img'
        sx={{ width: 400 }}
        image={imgDev}
        alt="me illustration"
        />
  </Card>
  )
}
