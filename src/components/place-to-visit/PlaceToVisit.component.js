import React from 'react';

import { makeStyles } from '@mui/styles';
import ImageCard from '../card/ImageCard.component';
import { Grid } from '@mui/material';

import DATA_PLACES from '../../static/DATA_PLACES';
import useWindowPosition from './../../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '34px',
        padding: '13px',
    },
}));

const PlaceToVisit = () => {
    const classes = useStyles();
    const checked = useWindowPosition('header');

    return (
        <div className={classes.root} id='place-to-visit'>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} md={6} lg={3} className={classes.item}>
                    <ImageCard place={DATA_PLACES[0]} checked={checked} />
                </Grid>
                <Grid item xs={12} md={6} lg={3} className={classes.item}>
                    <ImageCard place={DATA_PLACES[1]} checked={checked} />
                </Grid>
                <Grid item xs={12} md={3} lg={3} className={classes.item}>
                    <ImageCard place={DATA_PLACES[2]} checked={checked} className={classes.cardItem} />
                </Grid>
                <Grid item xs={12} md={3} lg={3} className={classes.item}>
                    <ImageCard place={DATA_PLACES[3]} checked={checked} />
                </Grid>
            </Grid>
        </div>
    );
}

export default PlaceToVisit;
