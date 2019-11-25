import React, { useState }from "react";
import CadastroPaciente from '../CadastroPaciente/CadastroPaciente';
import PacienteLista from "./PacienteLista";
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

    const handleButton= () => {
        if(handle) {
            return(
                <ButtonDefault className="col-md-2" btntext="Novo Paciente" style={{float: 'right', height:'40px'}}
                onClick={() => setHandle(false)}></ButtonDefault> 
            )
        }
        else{
            return(
                <ButtonDefault className="col-md-2" btntext="Voltar" style={{height:'40px'}}
                onClick={() => setHandle(true)}></ButtonDefault>
            )
        }
    }

    return(
        <div className="container">
            <div>
                <div style={{marginBottom: '-5%'}}>
                    <h2>Pacientes</h2>
                    {handleButton()}
                </div>
                <div style={{marginTop: '80px'}}>
                    {handleCont()}
                </div>
            </div>
        </div>
    );
}