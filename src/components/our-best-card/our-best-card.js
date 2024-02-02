import './our-best-card.css';
import coffeeImg from './our-best-card-img/815O9ktyfUL.jpg'

const OurBestCard = () => {
    return (
        <li className='product-card'>
            <img src={coffeeImg} alt="coffee" className='coffee-img' />
            <p className="product-name">Solimo Coffee Beans 2 kg</p>
            <p className="product-price">10.73$</p>
        </li>
    )
}

export default OurBestCard;