import React, { useState } from "react";
import axios from 'axios';
import ButtonDefault from "../Model/CustomButton";
import Date from "../Model/Date";
import { Row, Form, Button, ToggleButton, ToggleButtonGroup, Card } from "react-bootstrap";
import { finished } from "stream";



export default props => {

        const [paciente, setPaciente] = useState("");

        //Aceita múltipla
        const [dorToraxica, setDorToraxica] = useState(false);
        const [posSCA, setPosSCA] = useState(false);
        const [posCRVM, setPosCRVM] = useState(false);
        const [alteracaoExame, setAlteracaoExame] = useState(false);
        const [equivAnginoso, setEquivAnginoso] = useState(false);
        const [lesaoCoronaria, setLesaoCoronaria] = useState(false);
        const [arritma, setArritma] = useState(false);
        const [sincope, setSincope] = useState(false);
        const [posPTCA, setPosPTCA] = useState(false);
        const [icc, setIcc] = useState(false);
        const [riscoCirúrgico, setRiscoCirúrgico] = useState(false);

        //HDA
        const [dorToraxicaTipica, setDorToraxicaTipica] = useState(false);
        const [assintomatica, setAssintomatica] = useState(false);
        const [dorToraxicaAtipica, setDorToraxicaAtipica] = useState(false);
        const [palpitacoes, setPalpitacoes] = useState(false);
        const [dispneiaAoEsforco, setDispneiaAoEsforco] = useState(false);
        const [sincopeH, setSincopeH] = useState(false);
        const [dispneiaDeRepouso, setDispneiaDeRepouso] = useState(false);
        const [cansaco, setCansaco] = useState(false);

        //HPP
        //Fatores Risco
        const [has, setHas] = useState(false);
        const [dm, setDM] = useState(false);
        const [tabagismo, setTabagismo] = useState(false);
        const [obsidade, setObsidade] = useState(false);
        const [dislipdemia, setDislipdemia] = useState(false);
        const [hf, setHf] = useState(false);
        const [menopausa, setMenopausa] = useState(false);
        const [extabagismo , setExTabagismo] = useState(false);

        //DAC Previa
        const [iam, setIam] = useState(false);
        const [crvm , setCrvm] = useState(false);
        const [ptca, setPtca] = useState(false);
        const [catAlterado, setCatAlterado] = useState(false);

        //Comorbidades
        const [avc, setAvc] = useState(false);
        const [irc, setIrc] = useState(false);
        const [aao, setAao] = useState(false);
        const [doençaVascular, setDoençaVascular] = useState(false);

        console.log(
                "motivo :",dorToraxica,posSCA,posCRVM,alteracaoExame,equivAnginoso,
                lesaoCoronaria,arritma,sincope,posPTCA,icc,riscoCirúrgico
        )

    return (
        <div className="container">
            <Row>
                <Date></Date>
            </Row>

            <Row className="col-md-12" style={{marginBottom: '1%'}}>
                <label className="col-md-2">Pacientes:</label>
                <input className="form-control col-md-7" value={paciente} onChange={e => setPaciente(e.target.value)}/>
                <div className="col-md-1">ou</div>
                <ButtonDefault className="col-md-2" btnText="Novo"></ButtonDefault>
            </Row>
            <Row className="col-md-12">
                <Card className="col-md-6" style={{padding:"1%"}}>
                    <h4>Motivos Exame</h4>
                    <p style={{ fontSize: '12px' }}>Aceita múltipla</p>
                    <div className="d-flex flex-column">
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox"  value={1} onChange={() => setDorToraxica(dorToraxica ? false : true)} >
                                    Dor torácica
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={2} onChange={() => setPosSCA(posSCA ? false : true)}>
                                    pós-SCA
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={3} onChange={() => setPosCRVM(posCRVM ? false : true)}>
                                    pós-CRVM
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox"  value={4} onChange={() => setAlteracaoExame(alteracaoExame ? false : true)}>
                                    Alteração exame
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={5} onChange={() => setEquivAnginoso(equivAnginoso ? false : true)}>
                                    Equiv anginoso
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={6} onChange={() => setLesaoCoronaria(lesaoCoronaria ? false : true)}>
                                    Lesão coronária
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={7} onChange={() => setArritma(arritma ? false : true)}>
                                    Arritma
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox"  value={8} onChange={() => setSincope(sincope ? false : true)}>
                                    Sincope
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={9} onChange={() => setPosPTCA(posPTCA ? false : true)}>
                                    pós-PTCA
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={10} onChange={() => setIcc(icc ? false : true)}>
                                    ICC
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={11} onChange={() => setRiscoCirúrgico(riscoCirúrgico ? false : true)}>
                                    Risco cirúrgico
                            </ToggleButton>                            
                        </ToggleButtonGroup>
                    </div>
                </Card>
                <Card className="d-flex flex-column" style={{marginLeft:'1%', padding:'1%'}}>
                    <h4>HDA</h4>
                    <p style={{ fontSize: '12px' }}>Aceita múltipla</p>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox"  value={1} onChange={() => setDorToraxicaTipica(dorToraxicaTipica ? false : true)}>
                                    Dor torácica típica
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={2} onChange={() => setAssintomatica(assintomatica ? false : true)}>
                                    Assintomática
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox"  value={3} onChange={() => setDorToraxicaAtipica(dorToraxicaAtipica ? false : true)}>
                                    Dor torácica atípica
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={4} onChange={() => setPalpitacoes(palpitacoes ? false : true)}>
                                    Palpitações
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={5} onChange={() => setDispneiaAoEsforco(dispneiaAoEsforco ? false : true)}>
                                    Dispnéia aos esforços 
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox"  value={6} onChange={() => setSincopeH(sincopeH ? false : true)}>
                                    Síncope 
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={7} onChange={() => setDispneiaDeRepouso(dispneiaDeRepouso ? false : true)}>
                                    Dispnéia de repouso 
                            </ToggleButton>
                            <ToggleButton type="checkbox"  value={8} onChange={() => setCansaco(cansaco ? false : true)}>
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
                                <ToggleButton type="checkbox"  value={1} onChange={() => setHas(has ? false : true)}>
                                        HAS
                                </ToggleButton>
                                <ToggleButton type="checkbox"  value={2} onChange={() => setDM(dm? false : true)}>
                                        D.M 
                                </ToggleButton>
                                <ToggleButton type="checkbox"  value={3} onChange={() => setTabagismo(tabagismo ? false : true)}>
                                        Tabagismo
                                </ToggleButton>
                                <ToggleButton type="checkbox"  value={4} onChange={() => setExTabagismo(extabagismo ? false : true)}>
                                        Ex-tabagismo 
                                </ToggleButton>
                                <ToggleButton type="checkbox"  value={5} onChange={() => setObsidade(obsidade ? false : true)}>
                                        Obesidade 
                                </ToggleButton>
                                <ToggleButton type="checkbox"  value={6} onChange={() => setDislipdemia(dislipdemia ? false : true)}>
                                        Dislipdemia
                                </ToggleButton>
                                <ToggleButton type="checkbox"  value={7} onChange={() => setHf(menopausa ? false : true)}>
                                        HF 
                                </ToggleButton>
                                <ToggleButton type="checkbox"  value={8} onChange={() => setMenopausa(cansaco ? false : true)}>
                                        Menopausa
                                </ToggleButton>
                        </ToggleButtonGroup>
                        <div style={{borderStyle:'solid', borderWidth:'0.5px', borderColor:'#dddddd'}}></div>
                        <div className="d-flex flex-column">
                            <h7>DAC Prévia:</h7>
                            <ToggleButtonGroup type="checkbox">
                                    <ToggleButton type="checkbox"  value={1} onChange={() => setIam(iam ? false : true)}>
                                            IAM
                                    </ToggleButton>
                                    <ToggleButton type="checkbox"  value={2} onChange={() => setCrvm(crvm? false : true)}>
                                            CRVM 
                                    </ToggleButton>
                                    <ToggleButton type="checkbox"  value={3} onChange={() => setPtca(ptca ? false : true)}>
                                            PTCA
                                    </ToggleButton>
                                    <ToggleButton type="checkbox"  value={4} onChange={() => setCatAlterado(catAlterado ? false : true)}>
                                            CAT Alterado
                                    </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <div className="d-flex flex-column">
                            <h7>Comorbidades:</h7>
                            <ToggleButtonGroup type="checkbox">
                                    <ToggleButton type="checkbox"  value={1} onChange={() => setAvc(avc? false : true)}>
                                            AVC
                                    </ToggleButton>
                                    <ToggleButton type="checkbox"  value={2} onChange={() => setIrc(irc ? false : true)}>
                                            IRC 
                                    </ToggleButton>
                                    <ToggleButton type="checkbox"  value={3} onChange={() => setAao(aao ? false : true)}>
                                            AAo
                                    </ToggleButton>
                                    <ToggleButton type="checkbox"  value={4} onChange={() => setDoençaVascular(doençaVascular ? false : true)}>
                                            Doença Vascular
                                    </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                    </div>
                </Card>
                <ButtonDefault className="col-md-2" btnText="Finalizar" onClick={() => finished()}></ButtonDefault>
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