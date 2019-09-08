import React, { useState } from "react";
import {Row, Form, Card} from "react-bootstrap";
import Button from "../Model/CustomButton";
import CustomBox from "../Model/CustomBox"

export default function CheckingPaciente() {

    const [validated, setValidated] = useState(false);
    const [enablePaciente, setEnablePaciente] = useState("unchecked");

    function boxCheckingPaciente(valid){
        switch (valid){
            case "unchecked":
                return(
                    <CustomBox 
                        titleBox="Verificar Paciente"
                        textBox="Insira o Numero de Identificação do paciente para processeguir."
                />)
            case "unregistered":
                return(
                    <CustomBox 
                        titleBox="Paciente não Cadastrado"
                        textBox="Escolha uma das opções para processeguir"
                        buttonText="Cadastrar novo usuario"
                        buttonPath="/menu/cadastropaciente"
                    />)
            case "registrered":
                return(
                    <CustomBox
                        titleBox="Paciente não Cadastrado"
                        textBox="Escolha uma das opções para processeguir"
                        buttonText="Cadastrar Exame"
                        buttonPath="/menu/cadastroexame"
                    />)
            default:
                break;
        }
    }

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
            event.preventDefault();
            event.stopPropagation();
            //get de cadastro
            if (true){
                setEnablePaciente("registrered")
            }
            else{
                setEnablePaciente("unregistered")
            }
        }
        setValidated(true);
      };

    return(
        <div>
            <Row className="justify-content-center">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Numero de registro do Paciente</Form.Label>
                        <Form.Control
                            required
                            label="Número de Identificação do Paciente"
                            type="text"
                            bsClass="form-control"
                            placeholder="000.000.000-00"
                        />
                        <Form.Control.Feedback type="invalid">Campo Invalido</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" bsStyle="info" pullRight fill>
                        Verificar Paciente
                    </Button>
                </Form>
            </Row>
            <div className="justify-content-center">
                    {boxCheckingPaciente(enablePaciente)}
            </div>
        </div>
    )
}