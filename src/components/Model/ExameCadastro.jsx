import React from "react";

export default props => {
    console.log(props.exame)
    const exame = props.exame;
    return(
        <div class="container">
            <h3>Exame número :{props.exame.id}</h3>
            <div className="col-md-12">
                <div className="col-md-4">
                    <p style={{fontVariant: 'all-petite-caps'}}>Nome:{exame.exame_paciente.nome}</p>
                </div>
            </div>
        </div>
    )
}