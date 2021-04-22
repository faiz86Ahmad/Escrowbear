import React from 'react'
import Image from "../images/shape-bg.png"

const Service = (props) => {
    const services = [
        {
            heading: "Heading here",
            desc: "Lorem ipsum text here realted to heading",
        },
        {
            heading: "Heading here",
            desc: "Lorem ipsum text here realted to heading",
        },
        {
            heading: "Heading here",
            desc: "Lorem ipsum text here realted to heading",
        },
        {
            heading: "Heading here",
            desc: "Lorem ipsum text here realted to heading",
        },
        {
            heading: "Heading here",
            desc: "Lorem ipsum text here realted to heading",
        },
        {
            heading: "Heading here",
            desc: "Lorem ipsum text here realted to heading",
        },
        {
            heading: "Heading here",
            desc: "Lorem ipsum text here realted to heading",
        },
        {
            heading: "Heading here",
            desc: "Lorem ipsum text here realted to heading",
        },
    ]
    return (
        <div className="service-box">
           
           
                
                    <div className="row ">
                        <div className="col-md-6  mx-auto service-flex">
                        <h1>We Value Your Money That's Why Our Anti-Cheat System Help You Avoid fraud</h1>
                            {
                        services.map((service, index) => (
                            <div className="service">
                                <div className="service-circle">

                                </div>

                                <div className="service-heading">
                                    <h3>{service.heading}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                        ))}

                        </div>
                        </div>
                
                        <div className="bg-img">
                        <img src={Image} alt="bg-3"/>
                        </div>

          

           </div>
                  
                )
}

export default Service;
