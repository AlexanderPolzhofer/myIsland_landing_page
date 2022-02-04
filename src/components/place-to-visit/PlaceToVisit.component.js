import React from 'react';

import { makeStyles } from '@mui/styles';
import ImageCard from '../card/ImageCard.component';

import DATA_PLACES from '../../static/DATA_PLACES';
import useWindowPosition from './../../hook/useWindowPosition';

const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        marginTop: '34px',
    },
},
);

const PlaceToVisit = () => {
    const classes = useStyles();
    const checked = useWindowPosition('header');

    return (
        <div className={classes.root} id='place-to-visit'>
            <ImageCard place={DATA_PLACES[0]} checked={checked} />
            <ImageCard place={DATA_PLACES[1]} checked={checked} />
            <ImageCard place={DATA_PLACES[2]} checked={checked} />
            <ImageCard place={DATA_PLACES[3]} checked={checked} />
        </div>
    );
}

export default PlaceToVisit;
