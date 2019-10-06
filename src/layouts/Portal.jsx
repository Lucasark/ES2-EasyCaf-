import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Sidebar from "../components/Model/Sidebar";
import Paciente from "../components/Portal/Paciente"
import Home from "../components/Portal/Home"
import routes from "../routes"

export default props => {
    return(
      <div className="wrapper">
        <BrowserRouter>
          <Sidebar routes={routes}></Sidebar>
          <div id="main-panel" className="main-panel">
            <Switch>
              <Route path="/portal/home" render={({...props}) => <Home {...props}/>} />
              <Route path="/portal/paciente" component={Paciente} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
}