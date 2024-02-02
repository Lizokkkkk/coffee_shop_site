import './menu.css';
import logo from './menu-img/logo.svg';

const Menu = () => {
    return (
        <div className='menu'>
            <img src={logo} alt="coffee" className='logo' />
            <a href="#">Coffee house</a>
            <a href="#">Our coffee</a>
            <a href="#">For your pleasure</a>
        </div>
    )
}

export default Menu;