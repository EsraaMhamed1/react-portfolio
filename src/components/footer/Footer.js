import './Footer.css';
// import Logo from '../../assets/Logo.png'
import user from '../../assets/user.svg'
const Footer =()=>{
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="logo">
                        <h1>Esraa</h1>
                        {/* <img src={Logo} alt=""/> */}
                    </div>
                    <p>jyojghyyl,,fr,,,t,76oo7poo7</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user} alt=""/>
                        <input type="email" placeholder="Enter your email"/>
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    © 2024 Esraa Eltehawy. All rights saved
                </p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;