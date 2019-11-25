import React, { useState } from "react";
//import CadastroPaciente from '../CadastroPaciente/CadastroPaciente';
//import { Switch, Route, BrowserRouter } from 'react-router-dom'
import ExameCadastro from "../Model/ExameCadastro"
import ExameLista from "./ExameLista";
import PosExame from '../Exame/PosExame';

export default props => {

    const [tela, setTela] = useState(1);
    const [exame, setExame] = useState({});

    const handleTela = () =>{
        switch(tela){
            case 1:
                return(<ExameLista handle={setTela} exame={setExame}></ExameLista>)
            case 2:
                return(<ExameCadastro exame={exame} handle={setTela}></ExameCadastro>)
            case 3:
                return(<PosExame handle={setTela} exame={exame}></PosExame>)
            default:
                return(<h1>404</h1>)
        }
    }

    return (
        <div className="container">
            <h2 style={{marginLeft: '1.3%'}}>Exames</h2>
            {handleTela()}
        </div>
    );
}