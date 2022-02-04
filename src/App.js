import React from 'react';

import { makeStyles } from '@mui/styles';
import Header from './components/header/Header.component';
import PlaceToVisit from './components/place-to-visit/PlaceToVisit.component';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/backgroundImage.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <PlaceToVisit />
    </div>
  );
}

export default App;
