import React from 'react';

import { makeStyles } from '@mui/styles';

import { AppBar, Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: 'white',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        color: 'white',
        flexGrow: '1',
    },
    colorText: {
        color: '#5AFF3D',
    },
    icon: {
        color: 'white',
        fontSize: '2rem',
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} color='transparent' elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h2 className={classes.appbarTitle}>My<span className={classes.colorText}>Island.</span></h2>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div>
                <h2>Welcome to <br />
                    My<span className={classes.colorText}>Island.</span></h2>
            </div>
        </div>
    );
}

export default Header;
