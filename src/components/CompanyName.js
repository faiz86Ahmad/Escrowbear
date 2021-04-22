import React from 'react'

const CompanyName = (props) => {
    return (
        
            <div className="container-fluid name">
            
                    
                       <span className="company-name"><h1>{props.name1}{props.name5}</h1></span> 
                        
        
                    
                        <span  className="company-name"><h1>{props.name2}{props.name6}</h1></span>
                    
                       <span  className="company-name"><h1>{props.name3}{props.name7}</h1> </span> 
                    
                        <span  className="company-name"><h1>{props.name4}{props.name8}</h1></span>
                    </div>
                        
        
    
    
    )
}

export default CompanyName;
