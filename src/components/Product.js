import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const Product = () => {
    return (
        <div className="container product-box">
             <h1 style={{color:"blue",textAlign:"center",fontSize:"40px"}}>Say Hello to EscrowBear</h1>
            <div className="row" >
           
                <div className="col-md-4 col-sm-12 product-flex">
                    <div className="circle-p" ><LockOutlinedIcon  style={{color:"#fff",fontSize:"60"}}/></div>
                    <h1>truely secure</h1>
                    <p>Escaroo's proprietary 
                       KeylessEscrow® system will 
                       keep your funds truly secure 
                       during the entire transaction 
                          process</p>
                </div>
                <div className="col-md-4 col-sm-12 product-flex">
                    <div className="circle-p">< PersonAddOutlinedIcon  style={{color:"#fff",fontSize:"60"}} /></div>
                    <h1>fully compliant</h1>
                    <p>Escaroo's proprietary 
                       KeylessEscrow® system will 
                       keep your funds truly secure 
                       during the entire transaction 
                          process</p>
                </div>
                <div className="col-md-4 col-sm-12 product-flex ">
                    <div className="circle-p"><FavoriteBorderOutlinedIcon style={{color:"#fff",fontSize:"60"}}/></div>
                    <h1>Totaly awesome</h1>
                    <p>Escaroo's proprietary 
                       KeylessEscrow® system will 
                       keep your funds truly secure 
                       during the entire transaction 
                          process</p>
                </div>
            </div>
            
        </div>
    )
}

export default Product
