import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import Popup from "reactjs-popup";
import Button from "../Model/CustomButton";
import CadastroPaciente from '../CadastroPaciente/CadastroPaciente'

export default props => {

    return(
        <div>
            <h2>Pacientes</h2>
            <Card style={{flexDirection: "row"}}>
                <Form style={{width: '50%'}}>
                    <Form.Group >
                        <Form.Control placeholder="paciente"/>
                    </Form.Group>
                </Form>
                <Popup 
                    trigger={<Button style={{backgroundColor: 'green', color: 'white', borderColor:'white'}} pullRight fill bsstyle="info">Novo Paciente</Button>} 
                    position="right center" 
                    modal
                >
                    <CadastroPaciente></CadastroPaciente>
                </Popup>
            </Card>
        </div>
    );
}