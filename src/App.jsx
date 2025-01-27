import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Pizzalar from "./components/Pizzalar";
import SiparisFormu from "./components/SiparisFormu";
import Slider from "./components/Slider";
import Menu from "./components/Menu";
import FlexSection from "./components/FlexSection";
import RecentMenu from "./components/RecentMenu";
import Title from "./components/Title";
import Footer from "./components/footer";
function App() {
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
            <Pizzalar />
          </Route>
          
          <Route path="/siparisformu" component={SiparisFormu} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
