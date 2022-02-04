import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Collapse } from '@mui/material';

const ImageCard = ({ place, checked }) => {

    return (
        <Collapse
            in={checked}
            {...checked ? { timeout: 1500 } : {}}
        >
            <Card sx={{ maxWidth: 600, maxHeight: 610, background: 'rgba(0,0,0,0.2)', color: 'white' }}>
                <CardMedia
                    component="img"
                    alt="logo"
                    height='400'
                    image={process.env.PUBLIC_URL + `${place.imageUrl}`}
                />
                <CardContent sx={{ fontFamiliy: 'Nunito Sans, sans-serife' }} >
                    <Typography gutterBottom variant="h4" component="div">
                        {place.title}
                    </Typography>
                    <Typography variant="body" color="white">
                        {place.description}
                    </Typography>
                </CardContent>
            </Card>
        </Collapse>
    );
}

export default ImageCard;
