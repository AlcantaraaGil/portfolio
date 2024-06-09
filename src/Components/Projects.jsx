import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {trabajos} from '../data/trabajos'
// import img from '../assets/proyectos/mispelis.png'


export const Projects = () => {
    return (
        <>
        {
            trabajos.slice().map(trabajo =>(
            <Card key={trabajo.id} sx={{marginLeft: 2, marginRight: 2,marginBottom: 5, maxHeight: 500,width:500}}>
                <a href={trabajo.url} target="_blank" rel="noopener noreferrer">
                    <CardActionArea>
                        <CardMedia
                            sx={{maxHeight: 200}}
                        component="img"
                        image={`${process.env.PUBLIC_URL}/assets/proyectos/${trabajo.id}.png`}
                        alt={trabajo.id}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {trabajo.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {trabajo.descripcion}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </a>
            </Card>
            ))
        }
        </>
      );
}
