import beansLogoBlack from './about-our-beans-img/beansLogoBlack.svg';
import aboutOurBeans from './about-our-beans-img/about-our-beans.jpg';

import './about-our-beans.css';

const AboutOurBeans = () => {
    return (
        <div className="about-our-beans">
            <img src={aboutOurBeans} alt="About our beans img" className='img-beans' />
            <div className="beans-info">
                <h1 className='beans-info-header'>About our beans</h1>
                <img src={beansLogoBlack} alt="beans" />
                <p className='beans-info-text'>
                    Extrmity sweetness difficult behaviour he of. On <br />
                     disposal of as landlord horrible. 
                    <br />
                    <br />
                    Afraid at highly months do things on at. Situation <br />
                    recommend objection do intention <br />
                    so questions. <br />
                    As greatly removed calling pleased improve an. <br />
                    Last ask him cold feel <br />
                    met spot shy want. Children me laughing we <br />
                    prospect answered followed. At it went <br />
                    is song that held help face.
                </p>
            </div>
        </div>
    )
}

export default AboutOurBeans;