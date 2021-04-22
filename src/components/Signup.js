import React from 'react'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Section from './Section'

const Signup = () => {
    return (
        <div>
        <Section  heading2="Registration"/>
        <AboutUs />
        <div className="container-fluid footer-about-res"><Footer/></div>
    
        </div>
    )
}

export default Signup;
