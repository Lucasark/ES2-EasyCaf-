import React, { useState } from "react";
//import CadastroPaciente from '../CadastroPaciente/CadastroPaciente';
//import { Switch, Route, BrowserRouter } from 'react-router-dom'
import ExameLista from "./ExameLista";
import { Button } from "react-bootstrap";

export default props => {
    return (
        <div>
            <h2>Exames</h2>
            <ExameLista></ExameLista>
        </div>
    );
}