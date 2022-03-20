import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { React } from 'react';


const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(20, 0, 20, 0),
    zIndex: 5,
    position: 'relative',
    background: '#343e55',
  },

  featuresSectionPaper: {
    padding: theme.spacing(2),
    '& img': {
      width: '100%',
    },
  },

  title: {
    color: '#FFFFFF',
    textShadow: '-1px 1px #412C7D',
    margin: theme.spacing(0, 0, 7, 0),
  },

  description: {
    textAlign: 'center',
    textJustify: 'inter-word',
  },
}));


function Index() {
  const classes = useStyles();
  return (
    <section className={classes.section}>

      <Container maxWidth='lg'>
        <Typography className={classes.title} variant="h1" gutterBottom>
          {'قراره رویداد چه شکلی باشه؟'}
        </Typography>

        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={3}>
          <Grid item xs={12} sm={10} md={8}>
            <Paper className={classes.featuresSectionPaper} elevation={3}>
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={4}>
                <img src={process.env.PUBLIC_URL + '/step-1.png'} alt="" />
                </Grid>
                <Grid item xs={12} sm={80}>
                  <Typography variant="h2" align="center" gutterBottom>
                    {'کارگاه مجازی'}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.description}>
                    متاسفانه امسال هم به خاطر شرایط کرونایی، قراره کارگاه‌های رویداد رو به صورت مجازی داشته باشیم. اما شما از این فرصت استفاده کنین و با دوست‌هاتون از هر شهر  و جای دیگه‌ای که هستند در رویداد شرکت کنین!
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Paper className={classes.featuresSectionPaper}>
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={4}>
                <img src={process.env.PUBLIC_URL + '/step-2.png'} alt="" />
                </Grid>
                <Grid item xs={12} sm={80}>
                  <Typography variant="h2" align="center" gutterBottom>
                    {'ارتباط با همیار'}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.description}>
                    بچه‌های تیم طراحی و همیارها، داخل کارگاه‌ها همراهتون هستند و با همراه هم در مسیر یادگیری حرکت می‌کنین، فقط حواستون باشه که سوال‌ها و مشارکت‌ شما داخل کارگاه از مهم‌ترین و واجب‌ترین چیزهاست.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Paper className={classes.featuresSectionPaper}>
              <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} sm={4}>
                <img src={process.env.PUBLIC_URL + '/step-3.png'} alt="" />
                </Grid>
                <Grid item xs={12} sm={80}>
                  <Typography variant="h2" align="center" gutterBottom>
                    {' کار گروهی'}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.description}>
                    هم توی رستا و هم داناک، آموزش بر اساس تعامل در گروه‌ها و کار روی مسئله‌های چالش‌برانگیز، واقعی و نزدیک به دنیای فکری مخاطبینه. هدف ما از آموزش مسائل به شکل تعامل‌محور، ایجاد خلاقیت و یادگیری عمیق و همچنین تقویت روحیه کار گروهی توی شماست!                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

      </Container>


    </section>
  );
}

export default Index;