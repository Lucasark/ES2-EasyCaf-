import React, { useState, useEffect } from "react";
import ButtonDefault from "../Model/CustomButton";
import { Row, Card } from "react-bootstrap";

export default props => {
    console.log(props.exame);
    let exame = props.exame;

    const [ btnstatus, setBtnStatus ] = useState("")

    useEffect(() =>{
        if(props.exame.status === 'Pre-Exame' || props.exame.status === 'Pre'){
            setBtnStatus('Estresse');
        }
        else{
            setBtnStatus('Repouso');
        }
    }, []);

    return(
        <Row className="col-md-12">
            <Card className="d-flex flex-column col-md-12" style={{padding:"2%"}}>
                    <div className="container">
                        <ButtonDefault className="col-md-2" btntext="Voltar" onClick={() => props.handle(1)}></ButtonDefault>
                        
                                <h3>Exame número :{props.exame.id}</h3>
                                <div className="row"> 
                                    
                                        <div className="col-md-3">
                                            <p style={{fontVariant: 'all-petite-caps'}}>Nome:{exame.exame_paciente.nome}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p style={{fontVariant: 'all-petite-caps'}}>Email:{exame.exame_paciente.email}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p style={{fontVariant: 'all-petite-caps'}}>CPF:{exame.exame_paciente.cpf}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p style={{fontVariant: 'all-petite-caps'}}>Nasc:{exame.exame_paciente.data_nascimento}</p>
                                        </div>
                                    
                                </div>
                                <div className="row">
                                    
                                        <div className="col-md-3">
                                            <p style={{fontVariant: 'all-petite-caps'}}>Altura:{exame.exame_paciente.altura} metros</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p style={{fontVariant: 'all-petite-caps'}}>Peso:{exame.exame_paciente.peso} kg</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p style={{fontVariant: 'all-petite-caps'}}>Sexo:{exame.exame_paciente.sexo}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p style={{fontVariant: 'all-petite-caps'}}>Registro: Paciente nº#{exame.exame_paciente.id_paciente}</p>
                                        </div>
                                    
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p style={{fontVariant: 'all-petite-caps'}}>Alteração Exame:{exame.exame_motivo.alteracao_exame}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p style={{fontVariant: 'all-petite-caps'}}>Arritmia:{exame.exame_motivo.arrtimia}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p style={{fontVariant: 'all-petite-caps'}}>Dor Toráxica:{exame.exame_motivo.dor_toraxica}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p style={{fontVariant: 'all-petite-caps'}}>Equiv. Anginoso:{exame.exame_motivo.equiv_anginoso}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p style={{fontVariant: 'all-petite-caps'}}>Equiv. Anginoso:{exame.exame_motivo.equiv_anginoso}</p>
                                    </div>
                                </div>
                        <ButtonDefault className="col-md-2" btntext={btnstatus} onClick={() => props.handle(3)}></ButtonDefault>
                    </div>
            </Card>
        </Row>
    )
}