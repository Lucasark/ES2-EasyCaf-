import React, { useState } from "react";
import axios from 'axios';
import ButtonDefault from "../Model/CustomButton";
import Date from "../Model/Date";
import { Row, ToggleButton, ToggleButtonGroup, Card } from "react-bootstrap";
import moment from 'moment'
import "../Model/CustomButton.css";

export default props => {
    return (
        <div className="container">
            <Row className="col-md-12">
                <Card className="d-flex flex-column col-md-12" style={{padding:"2%"}}>
                   <h4>Administração Radiofármaco:</h4>
                   <div className="row">
                        <div className="col-md-4">
                            <label>Hora:</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="col-md-4">
                            <label>Dose:</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="col-md-4">
                            <label>Material/Lote:</label>
                            <input type="text" className="form-control"></input>
                        </div>
                   </div>
                   <div className="row">
                        <div className="col-md-12">
                            <label>Via Adm:</label>
                            <input type="text" className="form-control"></input>
                        </div>
                   </div>
                   <div type="text" className="d-flex flex-column">
                           <label>Protocolo de Imagem:</label>
                           <ToggleButtonGroup type="checkbox">
                                     <ToggleButton type="checkbox" className="checkboxStyle"  value={1}>
                                            1 dia
                                    </ToggleButton>
                                    <ToggleButton type="checkbox" className="checkboxStyle" value={2}>
                                            2 dias
                                    </ToggleButton>
                            </ToggleButtonGroup>
                   </div>
                   <br></br>
                   <br></br>
                   <div type="text" className="row">
                            <div className="col-md-6">
                                <label>Protocolo de Estresse:</label>
                                <ToggleButtonGroup type="checkbox">
                                        <ToggleButton type="checkbox" className="checkboxStyle" value={1}>
                                                Esteira
                                        </ToggleButton>
                                        <ToggleButton type="checkbox" className="checkboxStyle" value={2}>
                                                Farmacológico
                                        </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                            <div className="col-md-6">
                                <label>Outro:</label>
                                <input type="text" className="form-control"/>
                            </div>
                   </div>
                   <div className="row">
                       <div className="col-md-12">
                        <label>Prescrição:</label>
                        <textarea className="form-control" cols="30" rows="10"></textarea>
                       </div>
                   </div>
                </Card>
            </Row>

            <Row className="col-md-12">
                <Card className="d-flex flex-column col-md-12" style={{padding:"2%"}}>
                    <h4>Realização Exame:</h4>
                    <div className="row">
                        <div className="col-md-3">
                            <label >Hora:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-9">
                            <label>Observações</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="col-md-12"><label>Seguiu Protocolo de Captação?</label></div>    
                            <div className="col-md-12">
                                <ToggleButtonGroup type="checkbox">
                                            <ToggleButton type="checkbox" className="checkboxStyle" value={1}>
                                                    Sim
                                            </ToggleButton>
                                            <ToggleButton type="checkbox" className="checkboxStyle" value={2}>
                                                    Não
                                            </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <label>Justificativa:</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-md-6">
                            <div type="text" className="d-flex flex-column">
                            <label>Necessitou contenção?</label>
                            <ToggleButtonGroup type="checkbox">
                                        <ToggleButton type="checkbox" className="checkboxStyle" value={1}>
                                                Sim
                                        </ToggleButton>
                                        <ToggleButton type="checkbox" className="checkboxStyle" value={2}>
                                                Não
                                        </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div type="text" className="d-flex flex-column">
                            <label>Movimentos durante a captação?</label>
                            <ToggleButtonGroup type="checkbox">
                                        <ToggleButton type="checkbox" className="checkboxStyle" value={1}>
                                                Sim
                                        </ToggleButton>
                                        <ToggleButton type="checkbox" className="checkboxStyle" value={2}>
                                                Não
                                        </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-md-12">
                                <div type="text" className="d-flex flex-column">
                                <label>Extravasamento de sítio de punção?</label>
                                <ToggleButtonGroup type="checkbox">
                                            <ToggleButton type="checkbox" className="checkboxStyle" value={1}>
                                                    Sim
                                            </ToggleButton>
                                            <ToggleButton type="checkbox" className="checkboxStyle" value={2}>
                                                    Não
                                            </ToggleButton>
                                    </ToggleButtonGroup>
                                </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                       <div className="col-md-12">
                        <label>Observações:</label>
                        <textarea className="form-control" cols="30" rows="10"></textarea>
                       </div>
                   </div>
                </Card>
                <ButtonDefault className="col-md-2" btntext="Finalizar"></ButtonDefault>
            </Row>
        </div>
    )
}