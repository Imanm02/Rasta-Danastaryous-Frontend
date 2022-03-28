import {
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { React } from 'react';

const useStyles = makeStyles((theme) => ({
  section: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  landingBackground: {
    top: 0,
    width: '100%',
    position: 'fixed',
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(5px)',
    webkitFilter: 'blur(0px)',
    opacity: 1,
    transform: 'scale(1.2)',
    zIndex: -10,
  },

  title: {
    fontSize: 65,
    lineHeight: '100px',
    color: '#FFFFFF',
    textShadow: '-2px 2px #412C7D',
    textAlign: 'center',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
      lineHeight: '50px',
      marginBottom: theme.spacing(1),
    },
  },

  manBehindLaptop: {
    height: '80%',
    maxHeight: 400,
    width: '80%',
    maxWidth: 400,
  },

  arrowText: {
    color: '#FFFFFF',
    fontSize: 30,
    marginBottom: -20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      marginBottom: -10
    },
  },

  arrowBottom: {
    width: 200,
    [theme.breakpoints.down('sm')]: {
      width: 100
    },
  }

}));

function Index() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.landingBackground} />
      <Grid container alignItems="center" direction="column">
        <Grid item container justifyContent='center'>
          <img
            style={{ borderRadius: '50%', filter: 'drop-shadow(1px 1px 5px #222)' }}
            src={process.env.PUBLIC_URL + '/logo.png'}
            alt="" className={classes.manBehindLaptop}
          />
        </Grid>
        <Grid item>
          <Typography variant="h1" className={classes.title} align='center'>
            {'کاوش‌های داناستاریوس'}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" align='center' style={{ color: 'white' }}>
            {'رویداد عیدانه‌ی مشترک رستا و داناک'}
          </Typography>
        </Grid>
        <Grid item style={{ position: 'absolute', bottom: 0, right: 0 }}>
          {/* <Typography align='center' component='p' variant="h4" className={classes.arrowText}>
            {'چه خبره؟'}
          </Typography> */}
          <img
            src={process.env.PUBLIC_URL + '/scroll-bottom.gif'}
            alt="" className={classes.arrowBottom}
          />
        </Grid>
      </Grid>
    </section>
  );
}

export default Index;
