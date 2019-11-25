import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default props => {

    const [validated, setValidated] = useState(false);
    const [numero, setNumero] = useState();
    const [senha, setSenha] = useState();

    const loginValid = event => {

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        else{
            event.preventDefault();
            event.stopPropagation();
            //Trocar
            props.history.push('/portal/home');
        }

        setValidated(true);
    }

    const handleNumeroChange = event => {
        setNumero(event.target.value)
    }

    const handleSenhaChange = event => {
        setSenha(event.target.value)
    }

    return(
        <div>
            <Form noValidate validated={validated} onSubmit={loginValid} className="justify-content-center">
                <Form.Row className="justify-content-center">
                    <Form.Group className="col-md-5 " controlId="formGridReg">
                        <Form.Label>Número de Registro:</Form.Label>
                        <Form.Control value={numero} required type="text" onChange={handleNumeroChange}/>
                        <Form.Control.Feedback type="invalid">Digite o Número de Registro</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="col-md-5 " controlId="formGridSenha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control value={senha} required type="password" onChange={handleSenhaChange}/>
                        <Form.Control.Feedback type="invalid">Digite a Senha</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                    <Button className="btn-fill col-md-3 offset-md-1" type="submit" bsstyle="primary">Entrar no Portal </Button>
            </Form>
        </div>
    )
}