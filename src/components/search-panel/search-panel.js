import './search-panel.css';

const SearchPanel = () => {
    return (
        <div className='serch-panel'>
            <p className='search-panel-text'>Looring for</p>
            <input type="text" placeholder='start typing here...' className='search-panel-input' />
        </div>
    )
}

export default SearchPanel;