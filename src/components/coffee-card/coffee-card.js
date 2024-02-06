import './coffee-card.css';
import coffeeCard from './coffee-card-img/coffee-card.jpg'

const CoffeeCard = () => {
    return (
        <div className="coffee-card">
            <img src={coffeeCard} alt="coffee" className='coffee-img' />
            <h2 className='coffee-name'>AROMISTICO Coffee 1 kg</h2>
            <p className="coffee-country">Brazil</p>
            <p className='coffee-price'>6.99$</p>
        </div>
    )
}

export default CoffeeCard;