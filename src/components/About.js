import React from 'react';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmailIcon from '@material-ui/icons/Email';
import MyLocationTwoToneIcon from '@material-ui/icons/MyLocationTwoTone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Section from './Section';
import { Paper } from '@material-ui/core';
import Footer from './Footer';



const About = () => {
    return (
        <div>
            <Section  heading3="Do You KNow About Us"/>
        <div container-fluid>
             <div className="row about" style={{marginLeft:"20px"}}>
                <div className="col-md-4 left" >
                <div className="circle">
                        
                        </div>
                    <div className="sign-h">
                    <h1 >Contact Information</h1>
                    <p>Fill up the form and our team will get back to you soon</p>
                    </div>
                    
                    <div className="Icon-a">
                        <span className="icon-d">< PhoneInTalkIcon style={{fontSize:"50"}}/></span>
                        <span className="font-style">+91-9368983634</span>
                    </div>
                    <div className="Icon-a">
                        <span  className="icon-d"> <EmailIcon style={{fontSize:"50"}} /></span>
                        <span className="font-style">@support.escrowBear.com</span>
                    </div>
                    <div className="Icon-a">
                        <span  className="icon-d">< MyLocationTwoToneIcon style={{fontSize:"50"}} /></span>
                        <span className="font-style">This street,Building No #43 New Delhi,india</span>
                    </div>
                    <div className="social-icon" style={{marginTop:"50px"}}>
                    <FacebookIcon style={{fontSize:"40",color:"rgb(233, 131, 162)",marginLeft:"15px"}} />
                    <InstagramIcon style={{fontSize:"40",color:"rgb(233, 131, 162)",marginLeft:"15px"}} />
                    <TwitterIcon style={{fontSize:"40",color:"rgb(233, 131, 162)",marginLeft:"15px"}} />
                    <div className="circle"> </div>
                    </div>
                    

                </div>
                <div className="col-md-6 d-flex justify-content-center mx-auto about-us-res">
                    <Paper elevation={20} width={600} height={600} style={{padding:"20px"}}>
                        <h1 style={{textAlign:"center"}}>About us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                             magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                              sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
                              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit 
                              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                               velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                            

                        </p>

                    </Paper>
                </div>
        </div>

        
        </div>
        <div className="container-fluid footer-about-res"><Footer/></div>
    
        </div>
    )
}

export default About;
