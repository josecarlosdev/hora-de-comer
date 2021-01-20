import React, { useState, useEffect } from 'react';
import { TextSmall, Divider, Text2, Text3 } from './styles';
import { Container, Row, Col, Button, Card, Form, Alert, Image } from 'react-bootstrap';
import swagger from '../services/swagger'
import NavBar from '../Navbar/NavBar';
import { Link } from "react-router-dom";
import Menu from '../Menu/Menu';
const axios = require('axios');
// import { Padding } from './styles';

function CadastroFilial() {
    const [companyName, setCompanyName] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [stateRegistration, setStateRegistration] = useState('')
    const [municipalRegistration, setMunicipalRegistration] = useState('')
    const [issqn, setIssqn] = useState('')
    const [zip, setZip] = useState('')
    const [publicPlace, setPublicPlace] = useState('')
    const [crt, setCrt] = useState('')
    const [description, setDescription] = useState('')
    const [complement, setComplement] = useState('')
    const [uf, setUf] = useState('')
    const [number, setNumber] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [show, setShow] = useState(true)

    // Cadastro de Filial

    const onChangeCompanyName = event => {
        setCompanyName(event.target.value);
    };

    const onChangeName = event => {
        setName(event.target.value);
    };

    const onChangePhone = event => {
        setPhone(event.target.value);
    };

    const onChangeEmail = event => {
        setEmail(event.target.value);
    };

    const onChangeCnpj = event => {
        setCnpj(event.target.value);
    };

    const onChangeStateRegistration = event => {
        setStateRegistration(event.target.value);
    };

    const onChangeMunicipalRegistration = event => {
        setMunicipalRegistration(event.target.value);
    };

    const onChangeIssqn = event => {
        setIssqn(event.target.value);
    };

    const onChangeCrt = event => {
        setCrt(event.target.value);
    };

    const onChangeZip = event => {
        setZip(event.target.value);
        console.log(zip)
    };

    const onChangePublicPlace = event => {
        setPublicPlace(event.target.value);
    };

    const onChangeDescription = event => {
        setDescription(event.target.value);
    };

    const onChangeComplement = event => {
        setComplement(event.target.value);
    };

    const onChangeNumber = event => {
        setNumber(event.target.value);
    };

    const onChangeNeighborhood = event => {
        setNeighborhood(event.target.value);
    };

    const onChangeCity = event => {
        setCity(event.target.value);
    };

    const onChangeUf = event => {
        setUf(event.target.value);
    };

    const handleSubmit = async e => {
        // Para não carregar a página
        e.preventDefault()

        const body =
        {
            "active": true,
            "idLogin": 1,
            "address": {
                "city": city,
                "description": description,
                "neighborhood": neighborhood,
                "number": number,
                "publicPlace": publicPlace,
                "state": uf,
                "zipCode": zip
            },
            "cnpj": cnpj,
            "first": true,
            "configuration": {
                "account": {
                    "end": 10,
                    "endNoService": 20,
                    "headerAccount": "Texto mesa",
                    "headerAccountNoService": "mesa sem serviço",
                    "headerService": "mesa serviço",
                    "service1": 1.1,
                    "service2": 1.13,
                    "service3": 1.15,
                    "start": 1,
                    "startNoService": 11
                },
                "accountFlag": true,
                "delivery": {
                    "end": 30,
                    "saleHeader": "Venda Delivry",
                    "service1": 5,
                    "service2": 10,
                    "service3": 13,
                    "service4": 15,
                    "service5": 20,
                    "start": 21
                },
                "deliveryFlag": true
            },
            "corporateName": companyName,
            "fantasyName": name,
            "telephones": [
                {
                    "number": phone,
                    "tpTelephone": "comercial"
                }
            ],
            "inscEstadual": stateRegistration,
            "inscMunicipal": municipalRegistration,
            "payments": [
                {
                    "cmp": "12",
                    "description": "dinheiro",
                    "key": "a"
                },
                {
                    "cadmc": "12",
                    "cmp": "12",
                    "description": "débito",
                    "key": "s"
                },
                {
                    "cadmc": "12",
                    "cmp": "12",
                    "description": "crédito",
                    "key": "d"
                },
                {
                    "cadmc": "12",
                    "cmp": "12",
                    "description": "refeição",
                    "key": "f"
                }
            ]
        }
        console.log(body)
        await swagger.post(`/affiliate`, body)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }



    const getSwagger = async () => {
        await swagger.get(`/affiliate`)
            .then(function (response) {
                console.log(response)
            })
    }

    const getAPiCep = async () => {
        await axios.get(`https://viacep.com.br/ws/${zip}/json/`)
            .then(function (response) {
                console.log(response.data)
                setPublicPlace(response.data.logradouro)
                setComplement(response.data.complemento)
                setCity(response.data.localidade)
                setUf(response.data.uf)
            })
    }

    useEffect(() => {
        getSwagger()
    }, [])

    const ShowAlert = () => {
        return (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Enviado com sucesso ;)</Alert.Heading>
                <p></p>
            </Alert>
        )
    }

    const cleanForm = () => {
        setCompanyName('')
        setName('')
        setPhone('')
        setEmail('')
        setCnpj('')
        setStateRegistration('')
        setMunicipalRegistration('')
        setIssqn('')
        setZip('')
        setPublicPlace('')
        setCrt('')
        setDescription('')
        setComplement('')
        setUf('')
        setNumber('')
        setNeighborhood('')
        setCity('')
    }

    return (
        <>
            <NavBar />
            <div className="p-1" />
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <Menu />
                    </Col>
                    <Col sm={12} md={8} lg={8}>
                        {/* {<ShowAlert/>} */}
                        <Card>
                            <Form onSubmit={handleSubmit}>
                                <div className="p-2" />
                                <div className="p-3">
                                    <Card style={{ borderRadius: '0.5rem', border: '1px solid #fa7f79' }}>
                                        <div className="p-2">
                                            <Row>
                                                <Col sm={12} md={6} lg={6}>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>Razao social<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onChange={onChangeCompanyName} value={companyName} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>Telefone/ Celular<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onChange={onChangePhone} value={phone} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>CNPJ<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onChange={onChangeCnpj} value={cnpj} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>Iscrição Muninipal<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onChange={onChangeMunicipalRegistration} value={municipalRegistration} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>CRT<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridState">
                                                            <Form.Control as="select" onChange={onChangeCrt} value={crt} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}>
                                                                <option>teste1</option>
                                                                <option>teste2</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Form.Row>


                                                </Col>
                                                <Col sm={12} md={6} lg={6}>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>Nome Fantasia<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onChange={onChangeName} value={name} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>E-mail<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onChange={onChangeEmail} value={email} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>Inscrição Estadual<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onChange={onChangeStateRegistration} value={stateRegistration} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>ISSQN<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridState">
                                                            <Form.Control as="select" onChange={onChangeIssqn} value={issqn} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}>
                                                                <option>teste1</option>
                                                                <option>teste2</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Form.Row>


                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                </div>
                                <div className="p-2" />
                                <div className="p-3">
                                    <Card style={{ borderRadius: '0.5rem', border: '1px solid #fa7f79' }}>
                                        <div className="p-2">
                                            <Row>
                                                <Col sm={12} md={6} lg={6}>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>CEP<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onBlur={getAPiCep} onChange={onChangeZip} value={zip} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>Descrição<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onChange={onChangeDescription} value={description} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>Número<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onChange={onChangeNumber} value={number} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>Cidade<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onChange={onChangeCity} value={city} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>

                                                </Col>
                                                <Col sm={12} md={6} lg={6}>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>Logradouro<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onChange={onChangePublicPlace} value={publicPlace} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>Complemento<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onChange={onChangeComplement} value={complement} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>Bairro<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onChange={onChangeNeighborhood} value={neighborhood} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row>
                                                        <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                            <TextSmall>UF<b className="text-danger">*</b></TextSmall>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                            <Form.Control onChange={onChangeUf} value={uf} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} />
                                                        </Form.Group>
                                                    </Form.Row>
                                                </Col>
                                            </Row>
                                        </div>

                                    </Card>
                                </div>


                                <Row>
                                    <Col md={3}>
                                    </Col>
                                    <Col md={2}>
                                        <button type="submit" class="btn-lg" style={{
                                            background: '#1AF389', color: '#fff',
                                            borderRadius: '1.5rem', border: '1px solid #00ED49'
                                        }}

                                        >SALVAR</button>
                                    </Col>
                                    <Col md={2}>
                                        <Button variant="" size="lg" type="submit"
                                            style={{
                                                background: '#F2F287', color: '#fff',
                                                borderRadius: '1.5rem', border: '1px solid #EEE337'
                                            }}
                                            onClick={cleanForm}>
                                            LIMPAR
                                        </Button>
                                    </Col>
                                    <Col md={2}>
                                        <Link to="/home">
                                            <button type="button" class="btn-lg" style={{
                                                background: '#fa7f79', color: '#fff',
                                                borderRadius: '1.5rem', border: '#fa7f79'
                                            }}
                                            >VOLTAR</button>
                                        </Link>
                                    </Col>
                                    <Col md={3}>

                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                <div className="p-2" />
                <Row>
                    <Col sm={4} md={2} lg={2}>
                        <Card className="rounded-pill">
                            <TextSmall>Restaurante:</TextSmall>
                        </Card>
                    </Col>
                    <Col sm={4} md={2} lg={2}>
                        <Card className="rounded-pill">
                            <TextSmall>Usuário:</TextSmall>
                        </Card>
                    </Col>
                    <Col sm={4} md={2} lg={2}>
                        <Card className="rounded-pill">
                            <TextSmall>Apelido:</TextSmall>
                        </Card>
                    </Col>
                    <Col sm={4} md={2} lg={2}>
                        <Card className="rounded-pill">
                            <TextSmall>Movimento:</TextSmall>
                        </Card>
                    </Col>
                    <Col sm={4} md={2} lg={2}>
                        <Card className="rounded-pill">
                            <TextSmall>Terminal:</TextSmall>
                        </Card>
                    </Col>
                    <Col sm={4} md={2} lg={2}>
                        <Card className="rounded-pill">
                            <TextSmall>Data/Hora:</TextSmall>
                        </Card>
                    </Col>
                </Row>
                <div className="p-2" />
            </Container>

        </>
    )
}

export default CadastroFilial;