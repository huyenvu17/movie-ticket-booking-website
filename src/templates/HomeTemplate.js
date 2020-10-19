import Footer from 'components/Footer';
import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../content/styles/user/main.scss';

function HomeLayout(props){
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="mainpage">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
} 
export default function HomeTemplate({Component, ...props}) {
  return (
    <Route 
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  )
}
