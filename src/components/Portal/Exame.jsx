import React, { useState } from "react";
//import CadastroPaciente from '../CadastroPaciente/CadastroPaciente';
//import { Switch, Route, BrowserRouter } from 'react-router-dom'
import ExameLista from "./ExameLista";
import { Button } from "react-bootstrap";

export default props => {
    return (
        <div class="container">
            <h2 style={{marginLeft: '1.3%'}}>Exames</h2>
            <ExameLista></ExameLista>
        </div>
    );
}