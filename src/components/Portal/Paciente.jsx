import React, { useState }from "react";
import CadastroPaciente from '../CadastroPaciente/CadastroPaciente';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import PacienteLista from "./PacienteLista";
import { Button } from "react-bootstrap";

export default props => {
    const [handle, setHandle] = useState(true);

    const handleCont = () => {
        if(handle) {
            return(
                <PacienteLista></PacienteLista>
            )
        }
        else{
            return(
                <CadastroPaciente></CadastroPaciente>
            )
        }
    }

    return(
        <div>
            <h2>Pacientes</h2>
            <Button 
                style={{backgroundColor: 'green', color: 'white', borderColor:'white', float: 'left', minWidth: '150px'}} 
                pullRight 
                fill 
                bsstyle="info"
                onClick={() => setHandle(true)}>
                Voltar</Button>
            <Button 
                style={{backgroundColor: 'green', color: 'white', borderColor:'white', float: 'right',marginLeft: '35%', minWidth: '150px'}} 
                pullRight 
                fill 
                bsstyle="info"
                onClick={() => setHandle(false)}>
                Novo Paciente</Button>
            <div style={{marginTop: '80px'}}>
                {handleCont()}
            </div>
        </div>
    );
}