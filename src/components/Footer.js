import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

const Footer = () => {
    return (
        <div className="container-fluid footer-d">
            <div className="row footer-res">
                <div className="col-md-4 col-12">
                    <h1>EscrowBear</h1>
                    <p>Escrowbear Help you provide the service to 
                      sell or buy the crypto currencies at ease.</p>
                      <p>We adopt the best option to help protect
                          your privacy and security using our 
                        anti cheat systems and qualified staff</p>
                </div>
                <div className="col-md-4 col-12 list-content">
                    <h1>Quick Links</h1>
                    <ul>
                        <a href=""><li>Home</li></a>
                        <a href=""><li>About</li></a>
                        <a href=""><li>Services</li></a>
                        <a href=""><li>Contact us</li></a>
                    </ul>
                </div>
                <div className="col-md-4 col-12 ">
                    <h1>Social Links</h1>
                    <div className="social-icon" style={{marginTop:"50px",textAlign:"center"}}>
                    <FacebookIcon style={{fontSize:"40",color:"#fff",marginLeft:"15px",}} />
                    <InstagramIcon style={{fontSize:"40",color:"#fff",marginLeft:"15px"}} />
                    <TwitterIcon style={{fontSize:"40",color:"#fff",marginLeft:"15px"}} />
                    </div>
                </div>
            </div>
           <div className="row main-chat">
               <div className="chat-box">
                   <p>How we can help you</p>
               </div>
           <div className="chatbox">
               <ChatBubbleOutlineOutlinedIcon style={{color:"white",fontSize:"50"}} />
           </div>
           </div>
           
           <div className="footer-heading-l">
               <p>All rights reserved | Copyright EscrowBear.com</p>
           </div>
           <div className="footer-heading-r">
               <span>Privacy Policy</span>
               <span>Term And Condition</span>
           </div>
            
        </div>
    )
}

export default Footer;
