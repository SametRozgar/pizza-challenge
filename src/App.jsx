import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Pizzalar from "./components/Pizzalar";
import SiparisFormu from "./components/SiparisFormu";
import Slider from "./components/Slider";
import Menu from "./components/Menu"
function App() {
  return (
    <div>
      <Router>
        <Navbar />

       
        <Switch>
          <Route exact path="/">
            <Slider />
            <Menu/>
            <Pizzalar />
          </Route>
          
          <Route path="/siparisformu" component={SiparisFormu} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
