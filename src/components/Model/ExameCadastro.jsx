import React, { useState } from "react";
import ButtonDefault from "../Model/CustomButton";

export default props => {
    console.log(props.exame)
    const exame = props.exame;

    return(
        <div className="container">
            <ButtonDefault className="col-md-2" btntext="Voltar" onClick={() => props.handle(1)}></ButtonDefault>
            <h3>Exame número :{props.exame.id}</h3>
            <div className="col-md-12">
                <div className="col-md-4">
                    <p style={{fontVariant: 'all-petite-caps'}}>Nome:{exame.exame_paciente.nome}</p>
                </div>
            </div>
            <ButtonDefault className="col-md-2" btntext="Estresse" onClick={() => props.handle(3)}></ButtonDefault>
        </div>
    )
}