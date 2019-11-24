import React, { useState } from "react";
import axios from 'axios';
import ButtonDefault from "../Model/CustomButton";
import Date from "../Model/Date";
import { Row, ToggleButton, ToggleButtonGroup, Card } from "react-bootstrap";
import moment from 'moment'

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
                   <div type="text" className="form-control">
                           <label>Protocolo de Imagem:</label>
                   </div>
                </Card>
            </Row>
        </div>
    )
}