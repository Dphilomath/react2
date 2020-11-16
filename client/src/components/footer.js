import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare,faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer(){
    return(
        <div className = "footer">
                <div className="col">
                <ul>
                    <h2>Links</h2>  
                    <hr/>             
                    <a href = "/"><li>Home</li></a>
                    <a href = "/about"><li>About us</li></a>
                    <a href = "/menu"><li>Menu</li></a>
                    <a href = "/contact"><li>Contact</li></a>
                </ul>
                </div>
                <div  className="col">
                    <ul> <h2>Our Address</h2>      
                         
                        <hr/>
                        <li>312C, Indira Vihar</li>
                        <li>Kota-324001</li>
                        <li>Rajasthan</li>
                        <li>+91-9460554703</li>
                        
                    </ul>
                </div>
                <div className="icons"> 
                <a href="https://www.facebook.com/daniyalmahmood123/" target="_blank"><FontAwesomeIcon className="icon" icon={faFacebookSquare}/></a>    
                <a href="https://github.com/Dphilomath" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub}/></a>   
                </div>               
        </div>
    )
}
export default Footer
