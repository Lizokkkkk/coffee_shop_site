import './filter.css';

const Filter = () => {
    return (
        <div className="filter">
            <p className="filter-text">Or filter</p>
            <button type="button" className='filter-btn left-btn'>Brazil</button>
            <button type="button" className='filter-btn'>Kenya</button>
            <button type="button" className='filter-btn right-btn'>Columbia</button>
        </div>
    )
}

export default Filter;