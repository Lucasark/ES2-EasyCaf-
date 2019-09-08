import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Menu from "./layouts/Menu";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/menu" render={ () => <Menu />}/>
        <Redirect from="/" to="/menu/inicio" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;