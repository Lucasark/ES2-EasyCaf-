import React, { useState } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { NavItem, Navbar, Nav } from "react-bootstrap";

import CheckingPaciente from "../CadastroPaciente/CheckingPaciente";
import CadastroPaciente from "../CadastroPaciente/CadastroPaciente";
import CadastroExame from "../CadastroPaciente/CadastroExame";
import Inicio from "../Menu/Inicio";

const routes = [
    {
        path: "/chekingpaciente",
        name: "checkingpaciente",
        component: CheckingPaciente,
        layout: "/menu"
    },
    {
        path: "/cadastropaciente",
        name: "cadastropaciente",
        component: CadastroPaciente,
        layout: "/menu"
    },
    {
        path: "/cadastroexame",
        name: "checkingpaciente",
        component: CadastroExame,
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
                        <NavLink to="#" className="nav-link" >Acessar Portal</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/menu/chekingpaciente" className="nav-link" >Checking de Paciente</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#" className="nav-link" >Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#" className="nav-link" >Área Administrativa</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Switch>{getRoutes(routes)}</Switch>
        </div>
    );
}