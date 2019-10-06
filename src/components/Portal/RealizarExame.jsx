import React, { useState } from "react";
import { Card } from "react-bootstrap";
import PreExame from '../Exame/PreExame';


export default props => {
    return(
        <div>
            <h2>Novo Exame</h2>
            <PreExame></PreExame>
            
        </div>
    );
}