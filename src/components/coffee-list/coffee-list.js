import CoffeeCard from '../coffee-card/coffee-card';

import './coffee-list.css';

const CoffeeList = () => {
    return (
        <div className="coffee-list">
            <CoffeeCard/>
            <CoffeeCard/>
            <CoffeeCard/>
            <CoffeeCard/>
            <CoffeeCard/>
            <CoffeeCard/>
        </div>
    )
}

export default CoffeeList;