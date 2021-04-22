import React from 'react';
import App from "../App";

import Section from '../components/Section';
import CompanyName  from '../components/CompanyName';
import AboutUs from '../components/AboutUs';
import Service from '../components/Service';
import Product from '../components/Product';
import Videoplay from '../components/Videoplay';
import Footer from './Footer';



const Home = () => {
    return (
        <div>
      <Section heading1="The Leading Bitcoin Escrow and Cryptocurrency Escrow System!"
              
              
               
      />
      <CompanyName 
      name1="Forbes"
      name2="Google"
      name3="sony"
      name4="Iriver"
      />
      <AboutUs />
      <Service />
      <Product />
      <Videoplay />
      <CompanyName name5="WalletConnect"
                   name6="Fortmatic"
                   name7="Metamask"
                   name8="portis"
                   
                
      />
    <Footer />
      
        </div>
    )
}

export default Home;
