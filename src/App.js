import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Menu from "./layouts/Menu";
import Portal from "./layouts/Portal";

//TODO 404 e Login Invalido

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/menu" render={ props => <Menu {...props}/>}/>
        <Route path="/portal" render={ props => <Portal {...props}/>}/> 
        <Redirect from="/" to="/menu/inicio" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;