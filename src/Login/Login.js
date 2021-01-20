import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Alert, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import api from '../services/swagger'
// import { Text } from './styles';
import Logo from '../../src/images/logo2.svg'


const Login = () => {
    const [login, setlogin] = useState('')
    const [senha, setsenha] = useState('')
    const [mensagem, setMensagem] = useState(false)

    const onChangeLogin = event => {
        setlogin(event.target.value);
    };

    const onChangePassword = event => {
        setsenha(event.target.value);
    };

    const handleSubmit = event => {
        // Para não carregar a página
        event.preventDefault()

        alert(`Login feito, ${login}, sua senha é ${senha}`)

        const body = {
            "id": 0,
            "idLogin": 0,
            "login": "hc",
            "operator": {
                "active": true,
                "affiliate": {
                    "active": true,
                    "address": {
                        "city": "string",
                        "complement": "string",
                        "description": "string",
                        "id": 0,
                        "neighborhood": "string",
                        "number": "string",
                        "publicPlace": "string",
                        "state": "string",
                        "zipCode": "string"
                    },
                    "cnpj": "string",
                    "configuration": {
                        "account": {
                            "end": 0,
                            "endNoService": 0,
                            "headerAccount": "string",
                            "headerAccountNoService": "string",
                            "headerService": "string",
                            "id": 0,
                            "service1": 0,
                            "service2": 0,
                            "service3": 0,
                            "start": 0,
                            "startNoService": 0
                        },
                        "accountFlag": true,
                        "changeRange": true,
                        "delivery": {
                            "end": 0,
                            "id": 0,
                            "saleHeader": "string",
                            "service1": 0,
                            "service2": 0,
                            "service3": 0,
                            "service4": 0,
                            "service5": 0,
                            "start": 0
                        },
                        "deliveryFlag": true,
                        "id": 0
                    },
                    "corporateName": "string",
                    "fantasyName": "string",
                    "id": 0,
                    "idLogin": 0,
                    "idRestaurant": 0,
                    "inscEstadual": "string",
                    "inscMunicipal": "string",
                    "payments": [
                        {
                            "cadmc": "string",
                            "cmp": "string",
                            "description": "string",
                            "id": 0
                        }
                    ],
                    "telephones": [
                        {
                            "id": 0,
                            "number": "string",
                            "tpTelephone": "string"
                        }
                    ]
                },
                "category": {
                    "active": true,
                    "cashierFlag": true,
                    "deliveryman": true,
                    "id": 0,
                    "idLogin": 0,
                    "managerFlag": true,
                    "name": "string",
                    "serviceChargeIncludedSale": 0
                },
                "id": 0,
                "idLogin": 0,
                "name": "string",
                "nickName": "string"
            },
            "password": "123"
        }

        api.post(`/login`, body)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }


    const getAPi = async () => {
        await api.get(`/login`)
            .then(function (response) {
                console.log(response)
            })
    }

    useEffect(() => {
        getAPi()
    }, [])

    return (
        <>
            <Container>
                <Row >
                    <Col lg={3} md={3} sm={12}>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="pb-3" />
                        <Card className="shadow-lg" style={{ padding: '24%' }}>
                            <p className="text-center">
                                <Image src={Logo} fluid style={{ width: '41%' }}></Image>
                            </p>
                            <Form onSubmit={handleSubmit}>
                                <div class="form-group row">
                                    <div class="col-sm-12">
                                        <Form.Control type="email" placeholder="Login" onChange={onChangeLogin} value={login} style={{ borderRadius: '1.5rem' }} />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-12">
                                        <Form.Control type="password" placeholder="Senha" style={{ borderRadius: '1.5rem' }} />
                                    </div>
                                </div>
                                <Link to='/Home'>
                                    <button type="button" class="btn-lg" style={{
                                        background: '#fa7f79', color: '#fff', width: '100%',
                                        borderRadius: '1.5rem', border: '#fa7f79'
                                    }}
                                        onChange={onChangePassword} value={senha}>CONFIRMAR</button>
                                </Link>

                            </Form>

                        </Card >
                    </Col>
                </Row >
            </Container>
        </>
    )
}

export default Login;