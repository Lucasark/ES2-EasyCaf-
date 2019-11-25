import React, { useState } from "react";
import PreExame from '../Exame/PreExame';
import PosExame from '../Exame/PosExame';


export default props => {

    const [tela] = useState(props.tela ? props.tela : 1);

    const handleTela = () =>{
        switch(tela){
            case 1:
                return(<PreExame></PreExame>)
            case 2:
                return(<PosExame></PosExame>)
            default:
                return(<p>404</p>)
        }
    }
    
    return(
        <div>
            <h2>Novo Exame</h2>
            {handleTela()}
        </div>
    );
}