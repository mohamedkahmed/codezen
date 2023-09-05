import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import { useGlobalContext } from '../context/context';
import Whatsaapcontact from '../whasappfile/Whatsaapcontact';
import React from 'react';
import { useTranslation } from 'react-i18next'
import Upbutton from "../buttonup/Upbutton"
import { ScrollRestoration } from 'react-router-dom'; 
const Layout = () => {
  const {massageHandelar} = useGlobalContext();
  const { t } = useTranslation();
  return (
    <React.Fragment>

    <Navbar/>
    <Outlet/>
    {/* <ScrollRestoration /> */}
    <ScrollRestoration
  getKey={(location, matches) => {
    // default behavior
    return location.key;
  }}
/>
    <Whatsaapcontact />
    <Upbutton />
    <Footer/>

    </React.Fragment>
  )
}

export default Layout