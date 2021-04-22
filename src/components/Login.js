import React from 'react'
import Image from "../images/login.jpg"
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import Section from './Section';
import Footer from './Footer';

const Login = () => {
    return (
        <div>
        <Section heading4="Login with us" />
        <div className="container-fluid">
            <div className="row about">
                <div className="col-md-6 left d-flex justify-content-center align-items-center">
                    <img src={Image} alt="login" className="img-fluid img-res" width="400px" height="500px" />
                <div className="circle">
                        
                        </div>
                    <div className="sign-h">
                    <h1>Login Form</h1>
                    <p>please login your account</p>
                    </div>
                    
                   
                    <div className="circle">

                    </div>

                </div>
                <div className="col-md-6 right" style={{marginTop:"150px"}}>


                    
                        <Paper elevation={20} style={{padding:"30px"}} >
                            <form>
                            <h1 style={{textAlign:"center"}}>Login</h1>
                            <div className="row" style={{ padding: "20px" }}>
                                <div className="col-md-8" style={{ marginTop: "50px" }}>
                                    <TextField fullWidth label="Email" placeholder="support@escrowBear.com" />
                                </div>

                                
                                <div className="col-md-8" style={{ marginTop: "50px" }}>
                                    <TextField fullWidth label="Password" placeholder=" enter your Password" />
                                </div>
                               
                            </div>
                            
                            <Button width={200} type="submit" variant="contained" color="primary"style={{ marginTop: "50px"}}>Login</Button>
                          </form>

                        </Paper>
                


                </div>
            </div>

        </div>
        <div className="container-fluid footer-about-res"><Footer/></div>
        </div>
    )
}

export default Login;
