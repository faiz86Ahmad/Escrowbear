import React from 'react';
import Image from "../images/video.jpg";
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';

const Videoplay = () => {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4 col-sm-12 image-box">
                    
                        <img src={Image} alt="video" className="img-fluid" />
                

                </div>
                <div className="col-md-4 col-sm-12 video-play">
                 <h1>Watch the EscrowBear promo video</h1>
                 <p>Learn how Escaroo can help with all your bitcoin & 
                    cryptocurrency payment needs</p>
             <PlayCircleOutlineOutlinedIcon style={{color:"red",fontSize:"100"}} />

                </div>
            </div>
            
        </div>
    )
}

export default Videoplay;
