import React, { useState } from "react";
import axios from 'axios';
import ButtonDefault from "../Model/CustomButton";
import Date from "../Model/Date";
import { Row, Form, Button, ToggleButton, ToggleButtonGroup, Card } from "react-bootstrap";



export default props => {
    return (
        <div className="container">
            <Row>
                <Date></Date>
            </Row>

            <Row className="col-md-12" style={{marginBottom: '1%'}}>
                <label className="col-md-2">Pacientes:</label>
                <input className="form-control col-md-7" />
                <div className="col-md-1">ou</div>
                <ButtonDefault className="col-md-2" btnText="Novo"></ButtonDefault>
            </Row>
            <Row className="col-md-12">
                <Card className="col-md-6" style={{padding:"1%"}}>
                    <h4>Motivos Exame</h4>
                    <p style={{ fontSize: '12px' }}>Aceita múltipla</p>
                    <div className="d-flex flex-column">
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox"  value={1}>
                                    Dor torácica
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={2}>
                                    pós-SCA
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={3}>
                                    pós-CRVM
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox"  value={4}>
                                    Alteração exame
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={5}>
                                    Equiv anginoso
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={6}>
                                    Lesão coronária
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={7}>
                                    Arritma
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox"  value={8}>
                                    Sincope
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={9}>
                                    pós-PTCA
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={10}>
                                    ICC
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={11}>
                                    Risco cirúrgico
                            </ToggleButton>                            
                        </ToggleButtonGroup>
                    </div>
                </Card>
                <Card className="d-flex flex-column" style={{marginLeft:'1%', padding:'1%'}}>
                    <h4>HDA</h4>
                    <p style={{ fontSize: '12px' }}>Aceita múltipla</p>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox"  value={1}>
                                    Dor torácica típica
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={2}>
                                    Assintomática
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox"  value={3}>
                                    Dor torácica atípica
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={4}>
                                    Palpitações
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={5}>
                                    Dispnéia aos esforços 
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox"  value={6}>
                                    Síncope 
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={7}>
                                    Dispnéia de repouso 
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={8}>
                                    Cansaço
                            </ToggleButton>
                        </ToggleButtonGroup>
                </Card>
            </Row>
            <Row className="col-md-12">
                <Card className="d-flex flex-column col-md-12" style={{padding:"2%"}}>
                    <h4>HPP</h4>
                    <p style={{ fontSize: '12px' }}>Aceita múltipla</p>
                    <div style={{borderStyle:'solid', borderWidth:'0.5px', borderColor:'#dddddd'}}></div>
                    <div class="d-flex flex-column">
                        <h7>Fatores de risco:</h7>
                        <ToggleButtonGroup type="checkbox">
                                <ToggleButton type="checkbox"  value={1}>
                                        HAS
                                </ToggleButton>
                                <ToggleButton type="checkbox"  value={2}>
                                        D.M 
                                </ToggleButton>
                                <ToggleButton type="checkbox"  value={3}>
                                        Tabagismo
                                </ToggleButton>
                                <ToggleButton type="checkbox"  value={4}>
                                        Ex-tabagismo 
                                </ToggleButton>
                                <ToggleButton type="checkbox"  value={5}>
                                        Obesidade 
                                </ToggleButton>
                                <ToggleButton type="checkbox"  value={6}>
                                        Dislipdemia
                                </ToggleButton>
                                <ToggleButton type="checkbox"  value={7}>
                                        HF 
                                </ToggleButton>
                                <ToggleButton type="checkbox"  value={8}>
                                        Menopausa
                                </ToggleButton>
                        </ToggleButtonGroup>
                        <div style={{borderStyle:'solid', borderWidth:'0.5px', borderColor:'#dddddd'}}></div>
                        <div className="d-flex flex-column">
                            <h7>DAC Prévia:</h7>
                            <ToggleButtonGroup type="checkbox">
                                    <ToggleButton type="checkbox"  value={1}>
                                            IAM
                                    </ToggleButton>
                                    <ToggleButton type="checkbox"  value={2}>
                                            CRVM 
                                    </ToggleButton>
                                    <ToggleButton type="checkbox"  value={3}>
                                            PTCA
                                    </ToggleButton>
                                    <ToggleButton type="checkbox"  value={4}>
                                            CAT Alterado
                                    </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <div className="d-flex flex-column">
                            <h7>Comorbidades:</h7>
                            <ToggleButtonGroup type="checkbox">
                                    <ToggleButton type="checkbox"  value={1}>
                                            AVC
                                    </ToggleButton>
                                    <ToggleButton type="checkbox"  value={2}>
                                            IRC 
                                    </ToggleButton>
                                    <ToggleButton type="checkbox"  value={3}>
                                            AAo
                                    </ToggleButton>
                                    <ToggleButton type="checkbox"  value={4}>
                                            Doença Vascular
                                    </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                    </div>
                </Card>
            </Row>
            <Row className="col-md-12">
                <Card className="d-flex flex-column col-md-12" style={{padding:"2%"}}>
                    <h4>Exames Prévios</h4>
                    <p style={{ fontSize: '12px' }}>Aceita múltipla</p>
                    <div style={{borderStyle:'solid', borderWidth:'0.5px', borderColor:'#dddddd'}}></div>
                    <div class="d-flex flex-column">
                    <h7>ECO:</h7>
                        <ToggleButtonGroup type="radio" name="options">
                                <ToggleButton type="radio"  value={1}>
                                        HAS
                                </ToggleButton>
                                <ToggleButton type="radio"  value={2}>
                                        D.M 
                                </ToggleButton>
                                <ToggleButton type="radio"  value={3}>
                                        Tabagismo
                                </ToggleButton>
                                <ToggleButton type="radio"  value={4}>
                                        Ex-tabagismo 
                                </ToggleButton>
                                <ToggleButton type="radio"  value={5}>
                                        Obesidade 
                                </ToggleButton>
                        </ToggleButtonGroup>
                    <div style={{borderStyle:'solid', borderWidth:'0.5px', borderColor:'#dddddd'}}></div>
                    <h7>TE:</h7>
                        <ToggleButtonGroup type="radio" name="options">
                                <ToggleButton type="radio"  value={1}>
                                        Normal
                                </ToggleButton>
                                <ToggleButton type="radio"  value={2}>
                                        METs
                                </ToggleButton>
                                <ToggleButton type="radio"  value={3}>
                                        ECG
                                </ToggleButton>
                                <ToggleButton type="radio"  value={4}>
                                        Dor 
                                </ToggleButton>
                                <ToggleButton type="radio"  value={5}>
                                        Arritmia 
                                </ToggleButton>
                                <ToggleButton type="radio"  value={5}>
                                        Baixa PA 
                                </ToggleButton>
                        </ToggleButtonGroup>
                    <h7>CAT:</h7>
                        <ToggleButtonGroup type="radio" name="options">
                                <ToggleButton type="radio"  value={1}>
                                        Normal
                                </ToggleButton>
                                <ToggleButton type="radio"  value={2}>
                                        TCE
                                </ToggleButton>
                                <ToggleButton type="radio"  value={3}>
                                        CX
                                </ToggleButton>
                                <ToggleButton type="radio"  value={4}>
                                        DA 
                                </ToggleButton>
                                <ToggleButton type="radio"  value={5}>
                                        CD 
                                </ToggleButton>
                                <ToggleButton type="radio"  value={5}>
                                        SAF 
                                </ToggleButton>
                                
                                <ToggleButton type="radio"  value={5}>
                                        MAM 
                                </ToggleButton>
                        </ToggleButtonGroup>
                        <h7>CM:</h7>
                        <ToggleButtonGroup type="radio" name="options">
                                <ToggleButton type="radio"  value={1}>
                                        Normal
                                </ToggleButton>
                                <ToggleButton type="radio"  value={2}>
                                        Isquemia
                                </ToggleButton>
                                <ToggleButton type="radio"  value={3}>
                                        Fibrose
                                </ToggleButton>
                                <ToggleButton type="radio"  value={4}>
                                        Isq/Fib 
                                </ToggleButton>
                                <ToggleButton type="radio"  value={5}>
                                        Gated Alt. 
                                </ToggleButton>
                        </ToggleButtonGroup>

                    </div> 
                </Card>
            </Row>
            <Row className="col-md-12">
                <Card className="d-flex flex-column col-md-12" style={{padding:"2%"}}>
                    <h4>Medicamentos:</h4>
                    <div className="row">
                        <div className="col-md-6">
                                <label>Bloq. Calcio</label>
                                <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-6">
                                <label >Clopido rel.</label>
                                <input type="text" className="form-control"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                                <label >Nitrato</label>
                                <input type="text" className="form-control"></input>
                        </div>
                        <div className="col-md-6">
                                <label >AAS</label>
                                <input type="text" className="form-control"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                                <label >Estatina</label>
                                <input type="text" className="form-control"></input>
                        </div>
                        <div className="col-md-6">
                                <label >B-Bloqueador</label>
                                <input type="text" className="form-control"></input>
                        </div>   
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                                <label >BRA</label>
                                <input type="text" className="form-control"></input>
                        </div>
                        <div className="col-md-6">
                                <label >Diuretico</label>
                                <input type="text" className="form-control"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                                <label >IECA</label>
                                <input type="text" className="form-control"></input>
                        </div>
                        <div className="col-md-6">
                                <label >Outros</label>
                                <input type="text" className="form-control"></input>
                        </div>   
                    </div>
                </Card>
             </Row>
        </div>


    );
}