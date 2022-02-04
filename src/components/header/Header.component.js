import React, { useState, useEffect } from 'react';

import { makeStyles } from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppBar, Collapse, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SortIcon from '@mui/icons-material/Sort';

import HEADER_STYLES from '../../static/HEADER_STYLES';

const useStyles = makeStyles(HEADER_STYLES);

const Header = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, [])

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
            <Collapse
                in={checked}
                {... true ? { timeout: 2000 } : {}}
            >
                <div className={classes.container}>
                    <h2 className={classes.title}>Welcome to <br />
                        My<span className={classes.colorText}>Island.</span></h2>
                    <IconButton >
                        <KeyboardArrowDownIcon className={classes.goDown} sx={{ fontSize: '2.5rem' }} />
                    </IconButton>
                </div>
            </Collapse>
        </div>
    );
}

export default Header;
