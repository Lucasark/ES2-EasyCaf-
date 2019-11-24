import React, { useState } from "react";
import { Card } from "react-bootstrap";
import PreExame from '../Exame/PreExame';
import PosExame from '../Exame/PosExame';


export default props => {

    const [tela, setTela] = useState(props.tela ? props.tela : 1);

    const handleTela = () =>{
        switch(tela){
            case 1:
                return(<PreExame></PreExame>)
            case 2:
                return(<PosExame></PosExame>)
        }
    }
    
    return(
        <div>
            <h2>Novo Exame</h2>
            {handleTela()}
        </div>
    );
}