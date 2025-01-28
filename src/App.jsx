import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import React, { useEffect, useState } from 'react';
import Pizzalar from "./components/Pizzalar";
import SiparisFormu from "./components/SiparisFormu";
import Slider from "./components/Slider";
import Menu from "./components/Menu";
import FlexSection from "./components/FlexSection";
import RecentMenu from "./components/RecentMenu";
import Title from "./components/Title";
import Footer from "./components/footer";
function App() {
    const [pizzaName, setPizzaName] = useState("");
    const [pizzaPrice, setPizzaPrice] = useState(0);
    const [pizzaStars, setPizzaStarts] = useState("");
    const[pizzaDescription,setPizzaDescription]=useState("");
    const[pizzaPictureSrc,setPizzaPictureSrc]=useState("");

    function pizzaRender(pizzaName,pizzaPrice,pizzaStars,pizzaDescription,pizzaPictureSrc)
    {
      setPizzaName(pizzaName);
      setPizzaPrice(pizzaPrice);
      setPizzaStarts(pizzaStars);
      setPizzaDescription(pizzaDescription);
      setPizzaPictureSrc(pizzaPictureSrc);
    }

   

  return (
    <div>
      <Router>
        <Navbar />

       
        <Switch>
          <Route exact path="/">
            <Slider />
            <Menu/>
            <FlexSection/>
            <Title/>
            <RecentMenu/>
            <Pizzalar pizzaRenderFunction={pizzaRender}/>
          </Route>
          
          <Route
          path="/siparisformu"
          render={(props) => (
            <SiparisFormu
              {...props}
              pizzaName={pizzaName}
              pizzaPrice={pizzaPrice}
              pizzaStars={pizzaStars}
              pizzaDescription={pizzaDescription}
              pizzaPictureSrc={pizzaPictureSrc}
            />
          )}
        />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
