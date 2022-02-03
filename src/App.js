import React from 'react';

import { makeStyles } from '@mui/styles';
import Header from './components/Header.component';

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
    </div>
  );
}

export default App;
