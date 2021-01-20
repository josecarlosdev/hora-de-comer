import React, { useState, useEffect } from 'react';
import { Text, Divider, TextSmall, TextSmall2, Text2, Text3 } from './styles';
import { Container, Row, Col, Button, Card, Form, Image, Table } from 'react-bootstrap';
import swagger from '../services/swagger'
import NavBar from '../Navbar/NavBar';
import { Link } from "react-router-dom";
import Menu from '../Menu/Menu';
import { AiFillDelete } from 'react-icons/all'

const axios = require('axios');
// import { Padding } from './styles';

function CadastroImpressora() {
    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [port, setPort] = useState('');
    const [portValue, setPortValue] = useState('');
    const [substitute, setSubstitute] = useState('');
    const [response, setResponse] = useState([])

    // Cadastro de Filial

    const onChangeName = event => {
        setName(event.target.value);
    };

    const onChangeModel = event => {
        setModel(event.target.value);
    };

    const onChangePort = event => {
        setPort(event.target.value);
    };

    const onChangePortValue = event => {
        setPortValue(event.target.value);
    };


    const onChangeSubstitute = event => {
        setSubstitute(event.target.value);
    };

    const handleSubmit = async e => {
        // Para não carregar a página
        e.preventDefault()

        const body = {
            "idLogin": 1,
            "name": name,
            "model": "modelrsdf",
            "portType": "RJ46",
            "portValue": "192.168.14.182",
            "status": "ativa",
            "active": true,
            "type": "ACCOUNT"
        }
        console.log(body)
        await swagger.post(`/printer`, body)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    const getSwagger = async () => {
        await swagger.get(`/printer`)
            .then(function (response) {
                console.log(response.data)
                setResponse(response.data)
            })
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
                                        <Col sm={12} md={6} lg={6}>
                                            <Form.Row>
                                                <Form.Group as={Col} md={3} controlId="formGridEmail">
                                                    <TextSmall>Nome:</TextSmall>
                                                </Form.Group>
                                                <Form.Group as={Col} md={9} controlId="formGridEmail">
                                                    <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} onChange={onChangeName} value={name} />
                                                </Form.Group>
                                            </Form.Row>
                                        </Col>
                                        <Col sm={12} md={3} lg={3}>
                                            <Form.Group>
                                                <Form.Control as="select" onChange={onChangeModel} value={model} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}>
                                                    <option>Modelo</option>
                                                    <option>Modelo2</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={3} lg={3}>
                                            <Form.Group>
                                                <Form.Control as="select" onChange={onChangePort} value={port} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}>
                                                    <option>Porta</option>
                                                    <option>Porta2</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} md={3} lg={3}>
                                            <Form.Group>
                                                <Form.Control as="select" onChange={onChangePortValue} value={portValue} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}>
                                                    <option>Valor Porta</option>
                                                    <option>Valor Porta2</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={12} md={4} lg={4}>
                                            <Form.Group>
                                                <Form.Control as="select" onChange={onChangeSubstitute} value={substitute} style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}>
                                                    <option>Impressora Substituta</option>
                                                    <option>Impressora Substituta2</option>
                                                </Form.Control>
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
                                                            <th style={{ color: '#fa7f79' }}>Modelo</th>
                                                            <th style={{ color: '#fa7f79' }}>Porta</th>
                                                            <th style={{ color: '#fa7f79' }}>Valor Porta</th>
                                                            <th style={{ color: '#fa7f79' }}>Impressora Substituta</th>
                                                            <th style={{ color: '#fa7f79' }}>Delete</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {response.map((response, index) => (
                                                            <tr>
                                                                <td>{response.name}</td>
                                                                <td>{response.model}</td>
                                                                <td>{response.portType}</td>
                                                                <td>{response.portValue}</td>
                                                                <td></td>
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

export default CadastroImpressora;