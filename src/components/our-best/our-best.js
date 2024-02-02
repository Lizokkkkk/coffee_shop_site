import OurBestCard from "../our-best-card/our-best-card";

import './our-best.css';

const OurBest = () => {
    return (
        <div className="our-best">
            <h1 className="header-our-best">Our best</h1>
            <ul className="best-list">
                <OurBestCard/>
                <OurBestCard/>
                <OurBestCard/>
            </ul>
        </div>
    )
}

export default OurBest;