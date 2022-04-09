import {
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { React, useEffect, useState } from 'react';

import API from '../../axios';
import PersonCard from '../../components/Cards/PersonCard';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(20, 0, 20, 0),
    zIndex: 5,
    position: 'relative',
    background: '#343e55',
  },

  whiteDescription: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'justify',
    textJustify: 'inter-word',
  },

  title: {
    color: 'white',
    margin: theme.spacing(0, 0, 5, 0),
  },
}));

function Index() {
  const classes = useStyles();
  const [staff, setStaff] = useState([]);
  const EVENT_REGISTRATION_FORM_ID = 530;

  useEffect(() => {
    API.GET(`/event_metadata/form/${EVENT_REGISTRATION_FORM_ID}/staff_infos/`).then((response) => {
      try {
        setStaff(response);
      } catch (error) {
        console.log(error)
      }
    });
  }, [])

  return (
    <section className={classes.section}>

      <Container maxWidth='lg'>
        <Typography className={classes.title} variant="h1" gutterBottom>
          {'دست‌اندر‌کاران'}
        </Typography>
        <Grid container justify="space-between" alignItems="center" spacing={2}>
          {staff.map((staff) => (
            <Grid item key={staff.id}>
              <PersonCard {...staff} />
            </Grid>
          ))}
        </Grid>
      </Container>

    </section>
  );
}

export default Index;
