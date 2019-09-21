import React, { useState } from "react";
import {Row, Form } from "react-bootstrap";
import Button from "../Model/CustomButton";
import axios from 'axios';

export default props => {

    const [validated, setValidated] = useState(false);
    const [cpf, setCpf] = useState();
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [nascimento, setNascimento] = useState();
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [sexo, setSexo] = useState();
    const [cadastro, setCadastro] = useState(0);
    

    const handleCpfChange = event => {
        setCpf(event.target.value)
    }

    const handleNomeChange = event => {
        setNome(event.target.value)
    }

    const handleEmailChange = event => {
        setEmail(event.target.value)
    }

    const handleNascimentoChange = event => {
        setNascimento(event.target.value)
    }

    const handlePesoChange = event => {
        setPeso(event.target.value)
    }

    const handleAlturaChange = event => {
        setAltura(event.target.value)
    }

    const handleSexoChange = event => {
        setSexo(event.target.value)
    }

    const transitionPop = (valid) => {
        if (valid == 0) {
            return(
                <Row className="justify-content-center">
                    <Form>
                        <Form.Group>

                            <Form.Label>CPF:</Form.Label>
                            <Form.Control
                                value={cpf}
                                required
                                type= "text"
                                placeholder = "Cpf"
                                onChange={handleCpfChange}
                            />

                            <Form.Label>Nome:</Form.Label>
                            <Form.Control
                                value={nome}
                                required
                                type= "text"
                                placeholder = "Nome"
                                onChange={handleNomeChange}
                            />

                            <Form.Label>E-mail:</Form.Label>
                            <Form.Control
                                value={email}
                                required
                                type= "email"
                                placeholder = "E-mail"
                                onChange={handleEmailChange}
                            />

                            <Form.Label>Data de Nascimento:</Form.Label>
                            <Form.Control
                                value={nascimento}
                                required
                                type= "date"
                                placeholder = "Data de Nascimento"
                                onChange={handleNascimentoChange}
                            />
                            <Form.Label>Peso:</Form.Label>
                            <Form.Control
                                value={peso}
                                required
                                type= "number"
                                placeholder = "Peso"
                                onChange={handlePesoChange}
                            />

                            <Form.Label>Altura:</Form.Label>
                            <Form.Control
                                value={altura}
                                required
                                type= "number"
                                placeholder = "Altura"
                                onChange={handleAlturaChange}
                            />

                            <Form.Label>Sexo:</Form.Label>
                            <Form.Control
                                value={sexo}
                                required
                                type= "text"
                                placeholder = "sexo"
                                onChange={handleSexoChange}
                            />  

                        </Form.Group>
                        <Button onClick={() => cadastrarPaciente()} bsstyle="info" pullRight fill>
                                Cadastrar
                        </Button>
                    </Form>
                </Row>
            )
        }
        else if(valid == 1){
            return(
                <div>
                    <p>{cpf}</p>
                </div>
            )
        }
        else{
            return(
                <p>Error</p>
            )
        }
    }

    const cadastrarPaciente = event => {
        axios.defaults.baseURL = 'http://18.234.60.80:3300';
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        axios.post('/paciente', {
            cpf : cpf,
            nome : nome,
            email : email,
            data_nascimento : nascimento,
            peso: peso,
            altura: altura,
            sexo: sexo
        })
        .then(function (response) {
            console.log(response);
        })

       setCadastro(1)
    }
    
    return(
        transitionPop(cadastro)
    )
}
