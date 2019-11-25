import React, { useState, useEffect } from "react";
import axios from 'axios';
import ButtonDefault from "../Model/CustomButton";
import { Row, ToggleButton, ToggleButtonGroup, Card } from "react-bootstrap";
import moment from 'moment'
import "../Model/CustomButton.css";


export default props => {

    const [tela, setTela] = useState(1)
    const [msg, setMsg] = useState("")
    const [status, setStatus] = useState("");

    useEffect(() =>{
        if(props.exame.status === 'Pre-Exame' || props.exame.status === 'Pre'){
            setStatus('Estresse');
        }
        else{
            setStatus('Repouso');
        }
    }, []);

    //Administração Radio
    const [hora, setHora] = useState("")
    const [dose, setDose] = useState("")
    const [materialLote, setMaterialLote] = useState("")
    const [viaAdm, setViaAdm] = useState("")
    const [protocoloImagem, setProtoloImagem] = useState("")
    const [protocoloEstresse, setProtocoloEstresse] = useState("")
    const [oProtocoloEstresse, setOProtocoloEstresse] = useState("")
    const [prescricao, setPrescricao] = useState("")

    //Realizar Exame
    const [reHora, setReHora] = useState("")
    const [obs1, setObs1] = useState("")
    const [protocoloCaptacao, setProtocoloCaptacao] = useState("")
    const [justificativa, setJustificativa] = useState("")
    const [contencao, setContencao] = useState("")
    const [movimentosCaptacao, setMovimentosCaptacao] = useState("")
    const [extravasamento, setExtravasamento] = useState("")
    const [obs2, setObs2] = useState("")

    const atulizarExame = () => {
        const API_URL = 'https://app-exasy-exam-es.herokuapp.com/';

        const API = axios.create({
            baseURL: API_URL,
            headers: { 'Content-Type': 'application/json' },
        });
        const data = moment().format('L'); 
        const creatExame = async () => {
            const res = await API.put('/exame/'+props.exame.id.toString(),
            {
                administracao_radiofarmaco: {
                    hora: hora,
                    dose: dose,
                    material_lote: materialLote,
                    via_adm: viaAdm,
                    protocolo_imagem: protocoloImagem,
                    protocolo_estresse: protocoloEstresse+" "+oProtocoloEstresse,
                    prescricao: prescricao
                },
                realizacao_exame: {
                    hora: reHora,
                    obs_1: obs1,
                    protocolo_captacao: protocoloCaptacao,
                    justificativa: justificativa,
                    contencao: contencao,
                    movimentos_captacao: movimentosCaptacao,
                    extravasamento_sitio_puncao: extravasamento,
                    obs_2: obs2
                },
                status: status,
                data_alteracao: data
            })
            if (res.status === 200){
                console.log("Foi")
                setMsg(res.data.message)
                setTela(2)
                
            }
            else{
                console.log("Nao foi")
                setMsg("Algo deu errado")
                setTela(2)
            }
        }
        creatExame()
    }

    const finalizar = () => {
        console.log("AQUI")
        atulizarExame()
    }

    const handleTela = () =>{
        switch(tela){
            case 1:
                return(
                    <div className="container">
                        <ButtonDefault className="col-md-2" btntext="Voltar" onClick={() => props.handle(1)}></ButtonDefault>
                        <Row className="col-md-12">
                            <Card className="d-flex flex-column col-md-12" style={{padding:"2%"}}>
                            <h4>Administração Radiofármaco:</h4>
                            <div className="row">
                                    <div className="col-md-4">
                                        <label>Hora:</label>
                                        <input type="text" className="form-control" value={hora} onChange={e => setHora(e.target.value)}></input>
                                    </div>
                                    <div className="col-md-4">
                                        <label>Dose:</label>
                                        <input type="text" className="form-control" value={dose} onChange={e => setDose(e.target.value)}></input>
                                    </div>
                                    <div className="col-md-4">
                                        <label>Material/Lote:</label>
                                        <input type="text" className="form-control" value={materialLote} onChange={e => setMaterialLote(e.target.value)}></input>
                                    </div>
                            </div>
                            <div className="row">
                                    <div className="col-md-12">
                                        <label>Via Adm:</label>
                                        <input type="text" className="form-control" value={viaAdm} onChange={e => setViaAdm(e.target.value)}></input>
                                    </div>
                            </div>
                            <div type="text" className="d-flex flex-column">
                                    <label>Protocolo de Imagem:</label>
                                    <ToggleButtonGroup type="checkbox">
                                                <ToggleButton type="checkbox" className="checkboxStyle" value={1} onChange={() => setProtoloImagem("1 dia")}>
                                                        1 dia
                                                </ToggleButton>
                                                <ToggleButton type="checkbox" className="checkboxStyle" value={2} onChange={() => setProtoloImagem("2 dia")}>
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
                                                    <ToggleButton type="checkbox" className="checkboxStyle" value={1} onChange={() => setProtocoloEstresse("Esteira")}>
                                                            Esteira
                                                    </ToggleButton>
                                                    <ToggleButton type="checkbox" className="checkboxStyle" value={2} onChange={() => setProtocoloEstresse("Farmacológico")}>
                                                            Farmacológico
                                                    </ToggleButton>
                                            </ToggleButtonGroup>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Outro:</label>
                                            <input type="text" className="form-control" value={oProtocoloEstresse} onChange={e => setOProtocoloEstresse(e.target.value)}/>
                                        </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Prescrição:</label>
                                    <textarea className="form-control" cols="30" rows="10" value={prescricao} onChange={e => setPrescricao(e.target.value)}></textarea>
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
                                        <input type="text" className="form-control" value={reHora} onChange={e => setReHora(e.target.value)}/>
                                    </div>
                                    <div className="col-md-9">
                                        <label>Observações</label>
                                        <input type="text" className="form-control" value={obs1} onChange={e => setObs1(e.target.value)}/>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="col-md-12"><label>Seguiu Protocolo de Captação?</label></div>    
                                        <div className="col-md-12">
                                            <ToggleButtonGroup type="checkbox">
                                                        <ToggleButton type="checkbox" className="checkboxStyle" value={1} onChange={() => setProtocoloCaptacao("Sim")}>
                                                                Sim
                                                        </ToggleButton>
                                                        <ToggleButton type="checkbox" className="checkboxStyle" value={2} onChange={() => setProtocoloCaptacao("Não")}>
                                                                Não
                                                        </ToggleButton>
                                            </ToggleButtonGroup>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <label>Justificativa:</label>
                                        <input type="text" className="form-control" value={justificativa} onChange={e => setJustificativa(e.target.value)}/>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div type="text" className="d-flex flex-column">
                                        <label>Necessitou contenção?</label>
                                        <ToggleButtonGroup type="checkbox">
                                                    <ToggleButton type="checkbox" className="checkboxStyle" value={1} onChange={() => setContencao("Sim")}>
                                                            Sim
                                                    </ToggleButton>
                                                    <ToggleButton type="checkbox" className="checkboxStyle" value={2} onChange={() => setContencao("Nao")}>
                                                            Não
                                                    </ToggleButton>
                                            </ToggleButtonGroup>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div type="text" className="d-flex flex-column">
                                        <label>Movimentos durante a captação?</label>
                                        <ToggleButtonGroup type="checkbox">
                                                    <ToggleButton type="checkbox" className="checkboxStyle" value={1} onChange={() => setMovimentosCaptacao("Sim")}>
                                                            Sim
                                                    </ToggleButton>
                                                    <ToggleButton type="checkbox" className="checkboxStyle" value={2} onChange={() => setMovimentosCaptacao("Não")}>
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
                                                        <ToggleButton type="checkbox" className="checkboxStyle" value={1} onChange={() => setExtravasamento("Sim")}>
                                                                Sim
                                                        </ToggleButton>
                                                        <ToggleButton type="checkbox" className="checkboxStyle" value={2} onChange={() => setExtravasamento("Não")}>
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
                                    <textarea className="form-control" cols="30" rows="10" value={obs2} onChange={e => setObs2(e.target.value)}></textarea>
                                </div>
                            </div>
                            </Card>
                            <ButtonDefault className="col-md-2" btntext="Finalizar" onClick={() => finalizar()}></ButtonDefault>
                        </Row>
                    </div>
                )
            case 2:
                return(
                    <div className="container">
                        <p>{msg}</p>
                        <ButtonDefault className="col-md-2" btntext="Voltar" onClick={() => props.handle(1)}></ButtonDefault>
                    </div>
                )
            default:
                return(
                    <h1>404</h1>
                )
        }
    }

    return (
        handleTela()
    )
}