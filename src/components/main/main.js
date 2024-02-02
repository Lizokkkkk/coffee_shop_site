import './main.css';
import beansLogo from './main-img/beans-logo.svg';

import Menu from '../menu/menu';

const Main = () => {
    return (
        <div className="main">
            <Menu/>
            <div className='info'>
                <h1 className='header-info'>Everything You Love About Coffee</h1>
                <img src={beansLogo} alt="coffee" className='beans-logo' />
                <p className='p-info p-first'>We makes every day full of energy and taste</p>
                <p className="p-info p-second">Want to try our beans?</p>
                <button className='btn-info' type="button">More</button>
            </div>
        </div>
    )
}

export default Main;