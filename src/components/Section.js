import React from 'react';

const Section = (props) => {
    return (
        <div className="main">
        
            <div className="container">
                <div className="section-h">
                  <h1>{props.heading1}{props.heading3}{props.heading2}{props.heading4}</h1>  
                  <p>Escaroo is the Worlds most secure Cross Chain DeFi platform allowing users to deploy crypto-based escrow smart contracts with no coding required</p>
                    <a href="" className="btn">Get Started</a>
                    </div>  
                 </div>
            
        </div>
    )
}

export default Section
