import './Footer.css'
import logo from './images/airbnb.png'

let Footer=()=>{
    return(
        <div className="footer">
        <img src={logo} alt="_blank"/>

        <div>
        <i class="ri-instagram-fill"></i>
        <i class="ri-facebook-box-fill"></i>
        <i class="ri-twitter-fill"></i>
        <i class="ri-mail-send-fill"></i>
        </div>

        </div>
    )
}

export default Footer;