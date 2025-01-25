import { useState } from 'react'

import Pizzalar from "./components/Pizzalar"
import SiparisFormu from "./components/SiparisFormu"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  

  return (
<Router>
      <Switch>
        <Route exact path="/" component={Pizzalar} />
        <Route  path="/siparisformu" component={SiparisFormu} />
      </Switch>
    </Router>
  )
}

export default App
