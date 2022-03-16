import { Container, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

import ResponsiveAppBar from '../components/Appbar/ResponsiveAppBar';
import Footer from './Landing/Footer';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  container: {
    marginTop: 80,
    marginBottom: 10,
  },
}));

function AboutUs() {
  const classes = useStyles();

  return (
    <>
      <ResponsiveAppBar mode="LANDING" />
      <Container maxWidth="sm" className={classes.container}>
        <Paper className={classes.paper}>
          <Typography component="h2" variant="h2" gutterBottom>
            درباره‌ی ما
          </Typography>
          <Typography variant="subtitle1">
            داناک:
            جمعی از دانشجویان و دانش‌آموزان برای ارتقاء روند آموزشی گام برمی‌دارن. با این همه پیشرفت جهان توی شاخه های مختلف، منطقی نیست که تجربه یادگیری مثل خوردن داروی بدمزه باشه :)
            ما با برگزاری مسابقات، کارگاه‌ها، ایجاد تیم‌های دانش‌آموزی گوناگون و ... تلاش می‌کنیم تا با هر تعداد مخاطب، روش‌های جذابی برای یادگیری رو برای بالا بردن سطح دانش و مهارت شما دانش‌آموزای بااستعداد پیاده‌سازی کنیم و حتما از بازخورد و پیشنهادات شما هم استفاده کنیم.

            رستا:
            جمعی از دانشجوهای خانه‌ی ریاضیات اصفهان و دانشگاه شریف، در تابستان سال ۱۳۹۶، جمعی رو با هم تشکیل دادن که بعد از حدود ۵ سال از تشکیل اون، به عنوان «جمع علمی-ترویجی رستا» شناخته میشن.
            فعالیت‌های آموزشی و پرورشی رستا تابحال در حوزه‌های علوم کامپیوتر، ریاضی و فیزیک برای دانش‌آموزان دوره‌ی متوسطه‌ی اوّل و دوّم برگزار شده. رسالت رستا همیشه «تلاش در جهت تحقق پرورش در دل آموزش صحیح» بوده و هست.
          </Typography>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}

export default AboutUs;
