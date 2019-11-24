import React, { useState } from "react";
import { Row, Form } from "react-bootstrap";
import Button from "../Model/CustomButton";
import ButtonDefault from "../Model/CustomButton";
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
    const [message, setMessage] = useState();

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
            return (
                <Form>
                    <Form.Group className="col-md-6" style={{ marginLeft: '2%' }}>
                        <Form.Label>CPF:</Form.Label>
                        <Form.Control
                            style={{ marginBottom: '2%' }}
                            value={cpf}
                            required
                            type="text"
                            placeholder="CPF"
                            onChange={handleCpfChange}
                        />

                        <Form.Label>Nome:</Form.Label>
                        <Form.Control
                            style={{ marginBottom: '2%' }}
                            value={nome}
                            required
                            type="text"
                            placeholder="Nome"
                            onChange={handleNomeChange}
                        />

                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control
                            style={{ marginBottom: '2%' }}
                            value={email}
                            required
                            type="email"
                            placeholder="E-mail"
                            onChange={handleEmailChange}
                        />

                        <Form.Label>Data de Nascimento:</Form.Label>
                        <Form.Control
                            style={{ marginBottom: '2%' }}
                            value={nascimento}
                            required
                            type="date"
                            placeholder="Data de Nascimento"
                            onChange={handleNascimentoChange}
                        />
                        <Form.Label>Peso:</Form.Label>
                        <Form.Control
                            style={{ marginBottom: '2%' }}
                            value={peso}
                            required
                            type="number"
                            placeholder="Peso"
                            onChange={handlePesoChange}
                        />

                        <Form.Label>Altura:</Form.Label>
                        <Form.Control
                            style={{ marginBottom: '2%' }}
                            value={altura}
                            required
                            type="number"
                            placeholder="Altura"
                            onChange={handleAlturaChange}
                        />

                        <Form.Label>Sexo:</Form.Label>
                        <Form.Control
                            style={{ marginBottom: '2%' }}
                            value={sexo}
                            required
                            type="text"
                            placeholder="sexo"
                            onChange={handleSexoChange}
                        />
                        <ButtonDefault className="col-md-3" btntext="Cadastrar" style={{height:'40px'}}
                         onClick={() => cadastrarPaciente()} bsstyle="info">
                            Cadastrar
                            </ButtonDefault>
                    </Form.Group>
                </Form>
            )
        }
        else if (valid == 1) {
            return (
                <div>
                    <p>{message}</p>
                </div>
            )
        }
        else {
            return (
                <p>Error</p>
            )
        }
    }

    const cadastrarPaciente = () => {
        const API_URL = 'https://app-exasy-exam-es.herokuapp.com/';

        const API = axios.create({
            baseURL: API_URL,
            headers: { 'Content-Type': 'application/json' },
        });

        const creatUser = async () => {
            const res = await API.post('/paciente',
                {
                    cpf: cpf.toString(),
                    nome: nome,
                    email: email,
                    data_nascimento: nascimento,
                    peso: peso,
                    altura: altura,
                    sexo: sexo
                }
            )
            if (res.status == 201){
                setCadastro(1)
                setMessage(res.data.message)
            }
            else{
                setCadastro(-1)
            }
        }
        creatUser();

    }

    return (
        transitionPop(cadastro)
    )
}
