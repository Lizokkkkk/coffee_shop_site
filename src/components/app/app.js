import Main from '../main/main';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';

import './app.css';

function App() {
    return (
        <div className="app">
            <Main/>
            <AboutUs/>
            <OurBest/>
            <Footer/>
        </div>
    )
}

export default App;