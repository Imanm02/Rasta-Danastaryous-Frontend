import {
  makeStyles,
} from '@material-ui/core';
import { React } from 'react';

import Appbar from '../../components/Appbar/ResponsiveAppBar'
import Comments from './Comments';
import FAQ from './FAQ';
import Footer from './Footer';
import Galley from './Gallery';
import Header from './Header';
import Staff from './Staff';
import Steps from './Steps';
import WhatTheFuzz from './WhatTheFuzz';
import WorkshopsList from './WorkshopsList';


const useStyles = makeStyles((theme) => ({
}));

function Index() {
  const classes = useStyles();
  return (
    <>
      <Appbar showBackOnScroll />
      <div id="back-to-top-anchor"></div>
      <Header />
      <WhatTheFuzz />
      <Steps />
      <WorkshopsList />
      {/*<Galley />*/}
      <Comments />
      <FAQ />
      <Staff />
      <Footer />
    </>
  );
}

export default Index;
