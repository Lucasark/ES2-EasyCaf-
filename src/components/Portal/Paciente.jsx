import React, { useState }from "react";
import CadastroPaciente from '../CadastroPaciente/CadastroPaciente';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import PacienteLista from "./PacienteLista";
import { Button } from "react-bootstrap";
import ButtonDefault from "../Model/CustomButton"; 

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
        <div className="container">
            <div>
                <div style={{marginBottom: '-5%'}}>
                    <h2>Pacientes</h2>
    {/*             
                <Button 
                    style={{backgroundColor: 'green', color: 'white', borderColor:'white', float: 'left', minWidth: '150px'}}  
                    bsstyle="info"
                    onClick={() => setHandle(true)}>
                    Voltar</Button>
                <Button 
                    style={{backgroundColor: 'green', color: 'white', borderColor:'white', float: 'right', marginLeft: '35%', minWidth: '150px'}} 
                    bsstyle="info"
                    onClick={() => setHandle(false)}>
                    Novo Paciente</Button> 
                */}
                    <ButtonDefault className="col-md-2" btnText="Voltar" style={{height:'40px'}}
                    onClick={() => setHandle(true)}></ButtonDefault>
                    <ButtonDefault className="col-md-2" btnText="Novo Paciente" style={{float: 'right', height:'40px'}}
                    onClick={() => setHandle(false)}></ButtonDefault>
                </div>
                <div style={{marginTop: '80px'}}>
                    {handleCont()}
                </div>
            </div>
        </div>
    );
}