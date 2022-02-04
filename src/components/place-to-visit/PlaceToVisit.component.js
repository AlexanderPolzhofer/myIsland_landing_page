import React from 'react';

import { makeStyles } from '@mui/styles';
import ImageCard from '../card/ImageCard.component';

import DATA_PLACES from '../../static/DATA_PLACES';


const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        marginTop: '34px',
    },
})

const PlaceToVisit = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageCard place={DATA_PLACES[0]} />
            <ImageCard place={DATA_PLACES[1]} />
            <ImageCard place={DATA_PLACES[2]} />
            <ImageCard place={DATA_PLACES[3]} />
        </div>
    );
}

export default PlaceToVisit;
