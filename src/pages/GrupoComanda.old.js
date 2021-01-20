import React, { useState, useEffect } from 'react';
import { Text, Divider, TextSmall, TextSmall2, Text2, Text3 } from './styles';
import { Container, Row, Col, Button, Card, Form, Image, Table } from 'react-bootstrap';
import swagger from '../services/swagger'
import NavBar from '../Navbar/NavBar';
import { Link } from "react-router-dom";
import Menu from '../Menu/Menu';
const axios = require('axios');
// import { Padding } from './styles';



const GrupoComanda = () => {
    const [name, setName] = useState('')
    const [printer, setPrinter] = useState('')

    // Cadastro de Filial

    const onChangeName = event => {
        setName(event.target.value);
    };

    const onChangePrinter = event => {
        setPrinter(event.target.value);
    };

    const handleSubmit = e => {
        // Para não carregar a página
        e.preventDefault()



        const body =

        [
            {
              "active": true,
              "color": 0,
              "id": 0,
              "idLogin": 0,
              "name": "string"
            }
          ]

        swagger.post(`/product-group`, body)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }



    const getSwagger = async () => {
        await swagger.get(`/product-group`)
            .then(function (response) {
                console.log(response)
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
                                <Row>
                                    <Col sm={12} md={6} lg={6}>
                                        <Form.Row>
                                            <Form.Group as={Col} md={4} controlId="formGridEmail">
                                                <TextSmall>Nome:</TextSmall>
                                            </Form.Group>
                                            <Form.Group as={Col} md={8} controlId="formGridEmail">
                                                <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} onChange={onChangeName} value={name} />
                                            </Form.Group>
                                        </Form.Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} md={6} lg={6}>
                                        <Form.Row>
                                            <Form.Group as={Col} md={4} controlId="formGridEmail">
                                                <TextSmall>Impressora:</TextSmall>
                                            </Form.Group>
                                            <Form.Group as={Col} md={8} controlId="formGridEmail">
                                                <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} onChange={onChangePrinter} value={printer} />
                                            </Form.Group>
                                        </Form.Row>
                                    </Col>
                                    <Col sm={12} md={6} lg={6}>
                                        <Form.Row>
                                            <Form.Group as={Col} md={8} controlId="formGridEmail">
                                                <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}/>
                                            </Form.Group>
                                        </Form.Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Card style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}>
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                        <th style={{ color: '#fa7f79' }}>Nome</th>
                                                        <th style={{ color: '#fa7f79' }}>Impressora</th>
                                                        <th style={{ color: '#fa7f79' }}>Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>2</td>
                                                        <td>3</td>
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

export default GrupoComanda;