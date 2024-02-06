import Main from "../main/main";
import AboutUs from "../about-us/about-us";
import OurBest from "../our-best/our-best";
import Footer from "../footer/footer";
import OurCoffee from "../our-coffee/our-coffee";
import AboutOurBeans from "../about-our-beans/about-our-beans";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../filter/filter";
import CoffeeList from "../coffee-list/coffee-list";
import AboutIt from "../about-it/about-it";

import "./app.css";

function App() {
  return (
    <div className="app">
      <Main />
      <AboutUs />
      <OurBest />
      <Footer />
      <OurCoffee />
      <AboutOurBeans />
      <hr style={{ border: 'none', width: 240, margin: "auto", height: 1, backgroundColor: 'black' }} />
      <div className="search">
        <SearchPanel />
        <Filter />
      </div>
      <CoffeeList />
      <Footer />
      <OurCoffee />
      <AboutIt />
      <Footer />
    </div>
  );
}

export default App;
