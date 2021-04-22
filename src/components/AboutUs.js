import React from 'react'
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import EmailIcon from '@material-ui/icons/Email';
import MyLocationTwoToneIcon from '@material-ui/icons/MyLocationTwoTone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyle = makeStyles((theme) => ({
    feild: {
        padding: "30px 20px",
    
        
    },
    space: {
        marginLeft: "50px",
    },


})
)


const AboutUs = () => {
    const classes = useStyle();
    return (
        <div className="container-fluid">
            <div className="row about">
                <div className="col-md-4 left" >
                <div className="circle">
                        
                        </div>
                    <div className="sign-h">
                    <h1>Contact Information</h1>
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
                    <div className="circle">

                    </div>
                    </div>
                    

                </div>
                <div className="col-md-8 right">


                    <Grid container >
                        <Paper elevation={20} className={classes.feild} >
                            <form>
                            <h1>Signup</h1>
                            <div className="row" style={{ padding: "20px" }}>
                                
                                <div className="col-md-6" style={{ marginTop: "50px" }}>
                                    <TextField fullWidth label="FirstName" placeholder="john" />
                                </div>

                                <div className="col-md-6" style={{ marginTop: "50px" }}>
                                    <TextField fullWidth label="LastName" placeholder="doe" />
                                </div>
                                <div className="col-md-6" style={{ marginTop: "50px" }}>
                                    <TextField fullWidth label="Email" placeholder="support@escrowBear.com" />
                                </div>
                                <div className="col-md-6" style={{ marginTop: "50px" }}>
                                    <TextField fullWidth label="phone" placeholder="+91-9368963634" />
                                </div>
                            </div>
                            <div className="radiobtn"  style={{ marginTop: "50px" }}>
                                <div className="col-md-6">
                                    <h5>Please choose your account type</h5>
                                    <FormControl component="fieldset" style={{ marginTop: "30px" }}>
                                    
                                        <RadioGroup aria-label="gender" name="gender1" style={{display:"initial"}}>
                                            <FormControlLabel value="female" control={<Radio />} label="Seller" />
                                            <FormControlLabel value="male" control={<Radio />} label="Buyer" />
                                            <FormControlLabel value="other" control={<Radio />} label="Broker" />
                                           
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                
                            </div>
                            <div className="container" style={{ marginTop: "50px" }}>
                            <TextField fullWidth label="Message" placeholder="Write your message here" />
                            </div>
                            <Button width={200} type="submit" variant="contained" color="primary"style={{ marginTop: "50px",float:"right" }}>Submit</Button>
                              </form>

                        </Paper>
                    </Grid>


                </div>
            </div>

        </div>
    )
}

export default AboutUs
