import React, { useState } from "react";
import axios from 'axios';
import ButtonDefault from "../Model/CustomButton";
import Date from "../Model/Date";
import { Row, ToggleButton, ToggleButtonGroup, Card } from "react-bootstrap";
import moment from 'moment'
import "../Model/CustomButton.css";

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
    const [doencaVascular, setDoencaVascular] = useState(false);

    //Exames-Previos
    const [eco, setEco] = useState(null);
    const [te, setTe] = useState(null);
    const [cat, setCat] = useState(null);
    const [cm, setCm] = useState(null);

    //Medicamentos
    const [bloqCalcio, setBloqCalcio] = useState("");
    const [nitrato, setNitrato] = useState("");
    const [estatina, setEstatina] = useState("");
    const [aas, setAas] = useState("");
    const [bra, setBra] = useState("");
    const [ieca, setIeca] = useState("");
    const [clopidoRel, setClopidoRel] = useState("");
    const [bBloqueador, setBBloqueador] = useState("");
    const [diuretico, setDiuretico] = useState("");
    const [outros, setOutros] = useState("");
    

    const cadastrarExame = () => {
        const API_URL = 'https://app-exasy-exam-es.herokuapp.com/';

        const API = axios.create({
            baseURL: API_URL,
            headers: { 'Content-Type': 'application/json' },
        });
        const data = moment().format('L'); 
        const creatExame = async () => {
            const res = await API.post('/exame/',
            {
                paciente: {
                    id: 4
                },
                motivo: {
                    dor_toraxica: dorToraxica,
                    pos_sca: posSCA,
                    pos_crvm: posCRVM,
                    alteracao_exame: alteracaoExame,
                    equiv_anginoso: equivAnginoso,
                    lesao_coronaria: lesaoCoronaria,
                    arritmia: arritma,
                    sincope: sincope,
                    pos_ptca: posPTCA,
                    icc: icc,
                    risco_cirurgico: riscoCirúrgico
                },
                hda : {
                    dor_toraxica_tipica: dorToraxica,
                    assintomatico : assintomatica,
                    dor_toraxica_atipica: dorToraxicaAtipica,
                    palpitacoes: palpitacoes,
                    dispnea_esforcos: dispneiaAoEsforco,
                    sincope: sincopeH,
                    dispneia_repouso: dispneiaDeRepouso,
                    cansaco: cansaco
                },
                exames_previos : {
                    cat :{
                        id : cat
                    },
                    te : {
                        id : te
                    },
                    cm : {
                        id :cm
                    },
                    eco : {
                        id :eco
                    }
                },
                hpp: {
                    fatores_risco : {
                        has : has,
                        dm : dm,
                        tabagismo : tabagismo,
                        ex_tabagismo : extabagismo,
                        obesidade : obsidade,
                        dislipdemia : dislipdemia,
                        hf : hf,
                        menopausa : menopausa
                    },
                    dac_previa: {
                        iam: iam,
                        crvm: crvm,
                        ptca: ptca,
                        cat_alterado: catAlterado
                    },
                    comorbidades : {
                        avc: avc,
                        irc : irc,
                        aao : aao,
                        dca_vasc : doencaVascular
                    }
                },
                medicamentos : {
                    bloq_calcio : bloqCalcio,
                    nitrato: nitrato,
                    estatina: estatina,
                    bra : bra,
                    ieca: ieca,
                    clopido_rel : clopidoRel,
                    aas : aas,
                    b_bloqueador : bBloqueador,
                    diuretico : diuretico,
                    outros : outros
                },
                status: "Pre-Exame",
                data_criacao: data,
                data_alteracao: data
            })
            if (res.status == 201){
                console.log("Foi")
            }
            else{
                console.log("Nao foi")
            }
        }
        creatExame()
    }

    const finalizar = () => {
        console.log("AQUI")
        cadastrarExame()
    }

    return (
        <div className="container">
            <Row>
                <Date></Date>
            </Row>
            <Row className="col-md-12" style={{marginBottom: '1%'}}>
                <label className="col-md-2">Pacientes:</label>
                <input className="form-control col-md-7" value={paciente} onChange={e => setPaciente(e.target.value)}/>
                <div className="col-md-1">ou</div>
                <form className="col-md-2" action="/portal/paciente">
                    <ButtonDefault btntext="Novo" type="submit"></ButtonDefault>
                </form>
            </Row>
            <Row className="col-md-12">
                <Card className="col-md-6" style={{padding:"1%"}}>
                    <h4>Motivos Exame</h4>
                    <p style={{ fontSize: '12px' }}>Aceita múltipla</p>
                    <div className="d-flex flex-column">
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={1} onChange={() => setDorToraxica(dorToraxica ? false : true)} >
                                Dor torácica
                            </ToggleButton>
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={2} onChange={() => setPosSCA(posSCA ? false : true)}>
                                pós-SCA
                            </ToggleButton>
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={3} onChange={() => setPosCRVM(posCRVM ? false : true)}>
                                pós-CRVM
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={4} onChange={() => setAlteracaoExame(alteracaoExame ? false : true)}>
                                    Alteração exame
                            </ToggleButton>
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={5} onChange={() => setEquivAnginoso(equivAnginoso ? false : true)}>
                                    Equiv anginoso
                            </ToggleButton>
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={6} onChange={() => setLesaoCoronaria(lesaoCoronaria ? false : true)}>
                                    Lesão coronária
                            </ToggleButton>
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={7} onChange={() => setArritma(arritma ? false : true)}>
                                    Arritma
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={8} onChange={() => setSincope(sincope ? false : true)}>
                                    Sincope
                            </ToggleButton>
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={9} onChange={() => setPosPTCA(posPTCA ? false : true)}>
                                    pós-PTCA
                            </ToggleButton>
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={10} onChange={() => setIcc(icc ? false : true)}>
                                    ICC
                            </ToggleButton>
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={11} onChange={() => setRiscoCirúrgico(riscoCirúrgico ? false : true)}>
                                    Risco cirúrgico
                            </ToggleButton>                            
                        </ToggleButtonGroup>
                    </div>
                </Card>
                <Card className="d-flex flex-column" style={{marginLeft:'1%', padding:'1%'}}>
                    <h4>HDA</h4>
                    <p style={{ fontSize: '12px' }}>Aceita múltipla</p>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={1} onChange={() => setDorToraxicaTipica(dorToraxicaTipica ? false : true)}>
                                    Dor torácica típica
                            </ToggleButton>
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={2} onChange={() => setAssintomatica(assintomatica ? false : true)}>
                                    Assintomática
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={3} onChange={() => setDorToraxicaAtipica(dorToraxicaAtipica ? false : true)}>
                                    Dor torácica atípica
                            </ToggleButton>
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={4} onChange={() => setPalpitacoes(palpitacoes ? false : true)}>
                                    Palpitações
                            </ToggleButton>
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={5} onChange={() => setDispneiaAoEsforco(dispneiaAoEsforco ? false : true)}>
                                    Dispnéia aos esforços 
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={6} onChange={() => setSincopeH(sincopeH ? false : true)}>
                                    Síncope 
                            </ToggleButton>
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={7} onChange={() => setDispneiaDeRepouso(dispneiaDeRepouso ? false : true)}>
                                    Dispnéia de repouso 
                            </ToggleButton>
                            <ToggleButton type="checkbox" className="checkboxStyle"  value={8} onChange={() => setCansaco(cansaco ? false : true)}>
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
                    <div className="d-flex flex-column">
                        <p>Fatores de risco:</p>
                        <ToggleButtonGroup type="checkbox">
                                <ToggleButton type="checkbox" className="checkboxStyle"  value={1} onChange={() => setHas(has ? false : true)}>
                                        HAS
                                </ToggleButton>
                                <ToggleButton type="checkbox" className="checkboxStyle"  value={2} onChange={() => setDM(dm? false : true)}>
                                        D.M 
                                </ToggleButton>
                                <ToggleButton type="checkbox" className="checkboxStyle"  value={3} onChange={() => setTabagismo(tabagismo ? false : true)}>
                                        Tabagismo
                                </ToggleButton>
                                <ToggleButton type="checkbox" className="checkboxStyle"  value={4} onChange={() => setExTabagismo(extabagismo ? false : true)}>
                                        Ex-tabagismo 
                                </ToggleButton>
                                <ToggleButton type="checkbox" className="checkboxStyle"  value={5} onChange={() => setObsidade(obsidade ? false : true)}>
                                        Obesidade 
                                </ToggleButton>
                                <ToggleButton type="checkbox" className="checkboxStyle"  value={6} onChange={() => setDislipdemia(dislipdemia ? false : true)}>
                                        Dislipdemia
                                </ToggleButton>
                                <ToggleButton type="checkbox" className="checkboxStyle"  value={7} onChange={() => setHf(hf ? false : true)}>
                                        HF 
                                </ToggleButton>
                                <ToggleButton type="checkbox" className="checkboxStyle"  value={8} onChange={() => setMenopausa(cansaco ? false : true)}>
                                        Menopausa
                                </ToggleButton>
                        </ToggleButtonGroup>
                        <div style={{borderStyle:'solid', borderWidth:'0.5px', borderColor:'#dddddd'}}></div>
                        <div className="d-flex flex-column">
                            <p>DAC Prévia:</p>
                            <ToggleButtonGroup type="checkbox">
                                    <ToggleButton type="checkbox" className="checkboxStyle"  value={1} onChange={() => setIam(iam ? false : true)}>
                                            IAM
                                    </ToggleButton>
                                    <ToggleButton type="checkbox" className="checkboxStyle"  value={2} onChange={() => setCrvm(crvm? false : true)}>
                                            CRVM 
                                    </ToggleButton>
                                    <ToggleButton type="checkbox" className="checkboxStyle"  value={3} onChange={() => setPtca(ptca ? false : true)}>
                                            PTCA
                                    </ToggleButton>
                                    <ToggleButton type="checkbox" className="checkboxStyle"  value={4} onChange={() => setCatAlterado(catAlterado ? false : true)}>
                                            CAT Alterado
                                    </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <div className="d-flex flex-column">
                            <p>Comorbidades:</p>
                            <ToggleButtonGroup type="checkbox">
                                    <ToggleButton type="checkbox" className="checkboxStyle"  value={1} onChange={() => setAvc(avc? false : true)}>
                                            AVC
                                    </ToggleButton>
                                    <ToggleButton type="checkbox" className="checkboxStyle"  value={2} onChange={() => setIrc(irc ? false : true)}>
                                            IRC 
                                    </ToggleButton>
                                    <ToggleButton type="checkbox" className="checkboxStyle"  value={3} onChange={() => setAao(aao ? false : true)}>
                                            AAo
                                    </ToggleButton>
                                    <ToggleButton type="checkbox" className="checkboxStyle"  value={4} onChange={() => setDoencaVascular(doencaVascular ? false : true)}>
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
                    <div className="d-flex flex-column">
                    <p>ECO:</p>
                        <ToggleButtonGroup type="radio" name="options">
                                <ToggleButton type="radio" className="checkboxStyle"  value={1} onChange={() => setEco(1)}>
                                        HAS
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={2} onChange={() => setEco(2)}>
                                        D.M 
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={3} onChange={() => setEco(3)}>
                                        Tabagismo
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={4} onChange={() => setEco(4)}>
                                        Ex-tabagismo 
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={5} onChange={() => setEco(5)}>
                                        Obesidade 
                                </ToggleButton>
                        </ToggleButtonGroup>
                    <div style={{borderStyle:'solid', borderWidth:'0.5px', borderColor:'#dddddd'}}></div>
                    <h5>TE:</h5>
                        <ToggleButtonGroup type="radio" name="options">
                                <ToggleButton type="radio" className="checkboxStyle"  value={1} onChange={() => setTe(1)}>
                                        Normal
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={2} onChange={() => setTe(2)}>
                                        METs
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={3} onChange={() => setTe(3)}>
                                        ECG
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={4} onChange={() => setTe(4)}>
                                        Dor 
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={5} onChange={() => setTe(5)}>
                                        Arritmia 
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={6} onChange={() => setTe(6)}>
                                        Baixa PA 
                                </ToggleButton>
                        </ToggleButtonGroup>
                    <h5>CAT:</h5>
                        <ToggleButtonGroup type="radio" name="options">
                                <ToggleButton type="radio" className="checkboxStyle"  value={1} onChange={() => setCat(1)}>
                                        Normal
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={2} onChange={() => setCat(2)}>
                                        TCE
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={3} onChange={() => setCat(3)}>
                                        CX
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={4} onChange={() => setCat(4)}>
                                        DA 
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={5} onChange={() => setCat(5)}>
                                        CD 
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={6} onChange={() => setCat(6)}>
                                        SAF 
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={7} onChange={() => setCat(7)}>
                                        MAM 
                                </ToggleButton>
                        </ToggleButtonGroup>
                        <h5>CM:</h5>
                        <ToggleButtonGroup type="radio" name="options">
                                <ToggleButton type="radio" className="checkboxStyle"  value={1} onChange={() => setCm(1)}>
                                        Normal
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={2} onChange={() => setCm(2)}>
                                        Isquemia
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={3} onChange={() => setCm(3)}>
                                        Fibrose
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={4} onChange={() => setCm(4)}>
                                        Isq/Fib 
                                </ToggleButton>
                                <ToggleButton type="radio" className="checkboxStyle"  value={5} onChange={() => setCm(5)}>
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
                                <input type="text" className="form-control" value={bloqCalcio} onChange={e => setBloqCalcio(e.target.value)}/>
                        </div>
                        <div className="col-md-6">
                                <label >Clopido rel.</label>
                                <input type="text" className="form-control" value={clopidoRel} onChange={e => setClopidoRel(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                                <label >Nitrato</label>
                                <input type="text" className="form-control" value={nitrato} onChange={e => setNitrato(e.target.value)}></input>
                        </div>
                        <div className="col-md-6">
                                <label >AAS</label>
                                <input type="text" className="form-control" value={aas} onChange={e => setAas(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                                <label >Estatina</label>
                                <input type="text" className="form-control" value={estatina} onChange={e => setEstatina(e.target.value)}></input>
                        </div>
                        <div className="col-md-6">
                                <label >B-Bloqueador</label>
                                <input type="text" className="form-control" value={bBloqueador} onChange={e => setBBloqueador(e.target.value)}></input>
                        </div>   
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                                <label >BRA</label>
                                <input type="text" className="form-control" value={bra} onChange={e => setBra(e.target.value)}></input>
                        </div>
                        <div className="col-md-6">
                                <label >Diuretico</label>
                                <input type="text" className="form-control" value={diuretico} onChange={e => setDiuretico(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                                <label >IECA</label>
                                <input type="text" className="form-control" value={ieca} onChange={e => setIeca(e.target.value)}></input>
                        </div>
                        <div className="col-md-6">
                                <label >Outros</label>
                                <input type="text" className="form-control" value={outros} onChange={e => setOutros(e.target.value)}></input>
                        </div>   
                    </div>
                </Card>
                <ButtonDefault className="col-md-2" btntext="Finalizar" onClick={() => finalizar()}></ButtonDefault>
             </Row>
        </div>
    );
}