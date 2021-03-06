import React, { useState, useEffect } from 'react';
import { Text, Divider, TextSmall, TextSmall2, Text2, Text3 } from './styles';
import { Container, Row, Col, Button, Card, Form, Image, Table } from 'react-bootstrap';
import swagger from '../services/swagger'
import NavBar from '../Navbar/NavBar';
import { Link } from "react-router-dom";
import Menu from '../Menu/Menu';
const axios = require('axios');
// import { Padding } from './styles';



const Pagamento = () => {
    const [companyName, setcompanyName] = useState('')
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [cnpj, setcnpj] = useState('')
    const [stateRegistration, setstateRegistration] = useState('')
    const [municipalRegistration, setmunicipalRegistration] = useState('')
    const [ISSQN, setISSQN] = useState('')
    const [ZIP, setZIP] = useState('')
    const [publicPlace, setpublicPlace] = useState('')
    const [CRT, setCRT] = useState('')
    const [description, setdescription] = useState('')
    const [complement, setcomplement] = useState('')
    const [uf, setuf] = useState('')
    // const [complement, setcomplement] = useState('')
    const [number, setnumber] = useState('')
    const [neighborhood, setneighborhood] = useState('')
    const [city, setcity] = useState('')
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [cep, setcep] = useState(13206105)


    // Cadastro de Filial

    const onChangeCompanyName = event => {
        setcompanyName(event.target.value);
    };


    const onChangeName = event => {
        setname(event.target.value);
    };

    const onChangephone = event => {
        setphone(event.target.value);
    };


    const onChangeEmail = event => {
        setemail(event.target.value);
    };


    const onChangeCNPJ = event => {
        setcnpj(event.target.value);
    };

    const onChangeStateRegistration = event => {
        setstateRegistration(event.target.value);
    };

    const onChangeMunicipalRegistration = event => {
        setmunicipalRegistration(event.target.value);
    };

    const onChangeISSQN = event => {
        setISSQN(event.target.value);
    };

    const onChangeCRT = event => {
        setCRT(event.target.value);
    };

    // Endereço
    const onChangeZIP = event => {
        setZIP(event.target.value);
    };

    const onChangePublicPlace = event => {
        setpublicPlace(event.target.value);
    };

    const onChangeDescription = event => {
        setdescription(event.target.value);
    };

    const onChangeComplement = event => {
        setcomplement(event.target.value);
    };

    // const onChangeComplement = event => {
    //     setcomplement(event.target.value);
    // };

    const onChangeNumber = event => {
        setnumber(event.target.value);
    };

    const onChangeNeighborhood = event => {
        setneighborhood(event.target.value);
    };

    const onChangeCity = event => {
        setcity(event.target.value);
    };

    const onChangeUf = event => {
        setuf(event.target.value);
    };



    const handleSubmit = e => {
        // Para não carregar a página
        e.preventDefault()



        const body =

        {
            "address": {
                "city": "São Paulo",
                "complement": "Case de cima",
                "description": "retiro",
                "neighborhood": "Tatuapé",
                "number": "95",
                "publicPlace": "Rua",
                "state": "Sp",
                "zipCode": "03073005"
            },
            "cnpj": "16859618000141",
            "corporateName": "felipe LTDA",
            "fantasyName": "felipe Bar",
            "idRestaurant": 1,
            "idTelephone": [
                {
                    "number": "20315485",
                    "tpTelephone": "comercial"
                }
            ],
            "inscEstadual": "0000",
            "inscMunicipal": "0000",
            "userEmail": "idomingos@teste.com",
            "userLogin": "idomingos",
            "userName": "Ismael Domingos Junior"
        }


        swagger.post(`/affiliate`, body)
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
        console.log(cep)
        await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(function (response) {
                console.log(response.data)
                setpublicPlace(response.data.logradouro)
                setcomplement(response.data.complemento)
                setcity(response.data.localidade)
                setuf(response.data.uf)
            })
    }

    useEffect(() => {
        getAPiCep()
    }, [])

    return (
        <>
            <NavBar />
            <div className="p-2" />
            <Container>
                <Row>
                    <Col sm={12} md={3} lg={3}>
                       <Menu/>
                    </Col>
                    <Col sm={12} md={9} lg={9}>
                        <Card>
                            <div className="p-4">
                                <Row>
                                    <Col sm={12} md={5} lg={5}>
                                        <Form.Row>
                                            <Form.Group as={Col} md={4} controlId="formGridEmail">
                                                <TextSmall>Descrição</TextSmall>
                                            </Form.Group>
                                            <Form.Group as={Col} md={8} controlId="formGridEmail">
                                                <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} onChange={onChangeCompanyName} value={companyName} />
                                            </Form.Group>
                                        </Form.Row>
                                    </Col>
                                    <Col sm={12} md={3} lg={3}>
                                        <Form.Row>
                                            <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                <TextSmall>CMP</TextSmall>
                                            </Form.Group>
                                            <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} onChange={onChangeCompanyName} value={companyName} />
                                            </Form.Group>
                                        </Form.Row>
                                    </Col>
                                    <Col sm={12} md={3} lg={3}>
                                        <Form.Row>
                                            <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                <TextSmall>CADMC</TextSmall>
                                            </Form.Group>
                                            <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} onChange={onChangeCompanyName} value={companyName} />
                                            </Form.Group>
                                        </Form.Row>
                                    </Col>
                                    <Col sm={12} md={1} lg={1}>
                                        <button type="button" class="btn-lg" style={{
                                            background: '#55F7F7', color: '#fff',
                                            borderRadius: '1.5rem', border: '1px solid #55F7F7'
                                        }}
                                        >ADD</button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Card style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}>
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                        <th style={{ color: '#fa7f79' }}>Nome</th>
                                                        <th style={{ color: '#fa7f79' }}>CMP</th>
                                                        <th style={{ color: '#fa7f79' }}>CADMC</th>
                                                        <th style={{ color: '#fa7f79' }}>DELETE</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>

                                                        <td>Table cell</td>
                                                        <td>Table cell</td>
                                                        <td>Table cell</td>
                                                        <td>Table cell</td>

                                                    </tr>
                                                    <tr>

                                                        <td>Table cell</td>
                                                        <td>Table cell</td>
                                                        <td>Table cell</td>
                                                        <td>Table cell</td>

                                                    </tr>
                                                    <tr>

                                                        <td>Table cell</td>
                                                        <td>Table cell</td>
                                                        <td>Table cell</td>
                                                        <td>Table cell</td>

                                                    </tr>
                                                    <tr>

                                                        <td>Table cell</td>
                                                        <td>Table cell</td>
                                                        <td>Table cell</td>
                                                        <td>Table cell</td>

                                                    </tr>

                                                    <tr>

                                                        <td>Table cell</td>
                                                        <td>Table cell</td>
                                                        <td>Table cell</td>
                                                        <td>Table cell</td>

                                                    </tr>
                                                    <tr>

                                                        <td>Table cell</td>
                                                        <td>Table cell</td>
                                                        <td>Table cell</td>
                                                        <td>Table cell</td>

                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                    </Col>
                                    <Col md={2}>
                                        <button type="button" class="btn-lg" style={{
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
                                            }}>
                                            LIMPAR
                                        </Button>
                                    </Col>
                                    <Col md={2}>
                                        <button type="button" class="btn-lg" style={{
                                            background: '#fa7f79', color: '#fff',
                                            borderRadius: '1.5rem', border: '#fa7f79'
                                        }}
                                        >VOLTAR</button>
                                    </Col>
                                    <Col md={3}>

                                    </Col>
                                </Row>
                            </div>
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
            </Container>

        </>
    )
}

export default Pagamento;