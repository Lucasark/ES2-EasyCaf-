import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { NavItem, Navbar, Nav } from "react-bootstrap";

import Inicio from "../Menu/Inicio";
import LoginAdmin from "../Menu/LoginAdmin";
import LoginPortal from "../Menu/LoginPortal";

const routes = [
    {
        path: "/login",
        name: "login",
        component: LoginPortal,
        layout: "/menu"
    },
    {
        path: "/admin",
        name: "admin",
        component: LoginAdmin,
        layout: "/menu"
    },
    {
        path: "/inicio",
        name: "inicio",
        component: Inicio,
        layout: "/menu"
    }
];


export default function MenuNavBar(){

    function getRoutes(routes){
        return routes.map((prop, key) => {
          if (prop.layout === "/menu") {
            return (
              <Route
                path={prop.layout + prop.path}
                render={props => (<prop.component {...props}/>)}
                key={key}
              />
            );
          } else {
            return null;
          }
        });
    };

    return(
        <div>
            <Navbar className="justify-content-center">
                <Nav>
                    <NavItem>
                        <NavLink to="/menu/inicio" className="nav-link" >Inicio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/menu/login" className="nav-link" >Acessar Portal</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#" className="nav-link" >FAQ</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/menu/admin" className="nav-link" >Área Administrativa</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Switch>{getRoutes(routes)}</Switch>
        </div>
    );
}