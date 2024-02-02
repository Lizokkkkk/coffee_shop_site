import './footer.css';
import logoBlack from './footer-img/coffee-beans-black.svg';
import beansLogoBlack from './footer-img/beans-logo-black.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="black-menu">
                <img src={logoBlack} alt="coffee" className='black-logo' />
                <a className='black-a' href="#">Coffee house</a>
                <a className='black-a' href="#">Our coffee</a>
                <a className='black-a' href="#">For your pleasure</a>
            </div>
            <img src={beansLogoBlack} alt="coffee" />
        </div>
    )
}

export default Footer;