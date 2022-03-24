import {
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { React } from 'react';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(20, 0, 20, 0),
    zIndex: 5,
    position: 'relative',
    background: '#BB914C',
  },
  whiteDescription: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'justify',
    textJustify: 'inter-word',
  },
  title: {
    margin: theme.spacing(0, 0, 5, 0),
  },
}));

import WorkshopCard from '../../../components/Cards/WorkshopCard';
import workshops from './workshops';

function Index() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container maxWidth='lg'>
        <Typography className={classes.title} variant="h1" gutterBottom>
          {'کارگاه‌ها'}
        </Typography>
        <Grid container spacing={4} alignItems="center" justify="center">
          {workshops.map((workshop, index) => (
            <Grid
              key={index}
              container
              alignItems="center"
              justify="center"
              item
              xs={12}
              sm={6}
              md={4}>
              <WorkshopCard
                image={process.env.PUBLIC_URL + workshop.image}
                name={workshop.name}
                description={workshop.description}
                teaserLink={workshop.teaserLink}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

    </section>
  );
}

export default Index;
