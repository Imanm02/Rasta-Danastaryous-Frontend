import React from 'react';

import DashboardButton from './components/DashboardButton';

const WorkshopAppBarItems = () => {

  const registerButton = <DashboardButton name={'ثبت‌نام'} color='secondary' to={'//kamva.academy/create_account?private_event_enter=10'} />;
  const loginButton = <DashboardButton name={'ورود'} color='primary' to={'//kamva.academy/login?private_event_enter=10'} />;

  const desktopLeftItems = [registerButton, loginButton];
  const desktopRightItems = [];
  const mobileLeftItems = [loginButton];
  const mobileRightItems = [registerButton];
  const mobileMenuListItems = [];

  return {
    desktopLeftItems,
    desktopRightItems,
    mobileLeftItems,
    mobileRightItems,
    mobileMenuListItems,
  };
};

export default WorkshopAppBarItems;
