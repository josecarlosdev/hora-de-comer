import React, { useState, useEffect } from 'react';
import { Text, Divider, TextSmall, TextSmall2, Text2, Text3 } from './styles';
import { Container, Row, Col, Button, Card, Form, Image, Table } from 'react-bootstrap';
import swagger from '../services/swagger'
import NavBar from '../Navbar/NavBar';
import { Link } from "react-router-dom";
import Menu from '../Menu/Menu';
import { AiFillDelete } from 'react-icons/all';

const axios = require('axios');
// import { Padding } from './styles';

function CadastroCatOperador() {
    const [name, setname] = useState('');
    const [service, setService] = useState('');
    const [response, setResponse] = useState([])

    // Cadastro de Filial
    const onChangeName = event => {
        setname(event.target.value);
    };

    const onChangeService = event => {
        setService(event.target.value);
    };

    const handleSubmit = e => {
        // Para não carregar a página
        e.preventDefault()

        const body = {
            "active": true,
            "cashierFlag": true,
            "deliveryman": false,
            "idLogin": 1,
            "managerFlag": true,
            "name": name,
            "serviceChargeIncludedSale": service
        }

        swagger.post(`/operatorCategory`, body)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    const getSwagger = async () => {
        await swagger.get(`/operatorCategory`)
            .then(function (response) {
                console.log(response)
                setResponse(response.data)
            })
    }


    const cleanForm = (e) => {
        setname('');
        setService('');
        setResponse('');
    }

    useEffect(() => {
        getSwagger()
    }, [])

    return (
        <>
            <NavBar />
            <div className="p-2" />
            <Container>
                <Row>
                    <Col sm={12} md={3} lg={3}>
                        <Menu />
                    </Col>
                    <Col sm={12} md={9} lg={9}>
                        <Card>
                            <div className="p-4">
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col sm={12} md={5} lg={5}>
                                            <Form.Row>
                                                <Form.Group as={Col} md={3} controlId="formGridEmail">
                                                    <TextSmall>Nome:</TextSmall>
                                                </Form.Group>
                                                <Form.Group as={Col} md={9} controlId="formGridEmail">
                                                    <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} onChange={onChangeName} value={name} />
                                                </Form.Group>
                                            </Form.Row>
                                        </Col>
                                        <Col sm={12} md={7} lg={7}>
                                            <Form.Row>
                                                <Form.Group as={Col} md={6} controlId="formGridEmail">
                                                    <TextSmall>Serviço incluso na venda (%):</TextSmall>
                                                </Form.Group>
                                                <Form.Group as={Col} md={6} controlId="formGridEmail">
                                                    <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} onChange={onChangeService} value={service} />
                                                </Form.Group>
                                            </Form.Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} md={2} lg={2}>
                                            <Form.Group>
                                                <Form.Check type="checkbox" label="ADM" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={2} lg={2}>
                                            <Form.Group>
                                                <Form.Check type="checkbox" label="Caixa" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}>
                                                <Table responsive>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ color: '#fa7f79' }}>Nome</th>
                                                            <th style={{ color: '#fa7f79' }}>Serviço</th>
                                                            <th style={{ color: '#fa7f79' }}>Administrador</th>
                                                            <th style={{ color: '#fa7f79' }}>Caixa</th>
                                                            <th style={{ color: '#fa7f79' }}>Delete</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {response.map((response, index) => (
                                                            <tr>
                                                                <td>{response.name}</td>
                                                                <td>{response.serviceChargeIncludedSale.toString()}</td>
                                                                <td>{response.managerFlag.toString()}</td>
                                                                <td>{response.cashierFlag.toString()}</td>
                                                                <td><AiFillDelete /></td>
                                                            </tr>
                                                        )
                                                        )}
                                                    </tbody>
                                                </Table>
                                            </Card>
                                        </Col>
                                    </Row>
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

export default CadastroCatOperador;