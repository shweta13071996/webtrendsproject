import React from "react";
import logo from '../images/logo3 copy.png'
import { SocialIcon } from "react-social-icons";
function Footer(){
    return(
        <div>
             <div className="footer-basic">
                <div className="footercol">
                <ul className="list-inline">
                <li className="list-inline-item"><SocialIcon url="https://twitter.com/jaketrent"/></li>
                <li className="list-inline-item"><SocialIcon url="https://facebook.com/jaketrent"/></li>
                <li className="list-inline-item"><SocialIcon url="https://linkedin.com/jaketrent"/></li>
                <li className="list-inline-item"><SocialIcon url="https://instagram.com/jaketrent"/></li>
        
            </ul>
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by <img className='footerimg' src={logo} alt=""/>
            </p>
                </div>
           
            
    </div>
         
        </div>
    )
};
export default Footer;