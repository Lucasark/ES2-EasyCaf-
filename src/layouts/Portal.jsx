import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Sidebar from "../components/Model/Sidebar";
import Paciente from "../components/Portal/Paciente"
import Exame from "../components/Portal/Exame"
import Home from "../components/Portal/Home"
import RealizarExame from "../components/Portal/RealizarExame"
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
              <Route path="/portal/exame" component={Exame} />
              <Route path="/portal/realizarexame" component={RealizarExame} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
}