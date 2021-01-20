import React, { useState, useEffect } from 'react';
import { Text, Divider, TextSmall, TextSmall2, Text2, Text3 } from './styles';
import { Container, Row, Col, Button, Card, Form, Image, Table } from 'react-bootstrap';
import swagger from '../services/swagger'
import NavBar from '../Navbar/NavBar';
import { Link } from "react-router-dom";
import Menu from '../Menu/Menu';
import {AiFillDelete} from 'react-icons/all';
const axios = require('axios');
// import { Padding } from './styles';



const CadastroTerminal = () => {
    const [name, setName] = useState('');
    const [ip, setIp] = useState('');
    const [printer, setPrinter] = useState('');
    const [release, setRelease] = useState('');
    const [active, setActive] = useState('');
    const [blocked, setBlocked] = useState('');
    const [response, setResponse] = useState([])

    // Cadastro de Filial
    const onChangeName = event => {
        setName(event.target.value);
    };

    const onChangeIp = event => {
        setIp(event.target.value);
    };

    const onChangePrinter = event => {
        setPrinter(event.target.value);
    };

    const onChangeRelease = event => {
        setRelease(event.target.value);
        console.log(event.target.value)
    };

    const onChangeActive = event => {
        setActive(event.target.value);
    };

    const onChangeBlocked = event => {
        setBlocked(event.target.value);
        console.log(event.target.value)
    };

    const handleSubmit = e => {
        // Para não carregar a página
        e.preventDefault()

        const body = {
            "active": active,
            "block": blocked,
            "ip": ip,
            "launchType": release,
            "idAffiliate": 1,
            "terminalName": name,
            "idLogin": 1,
            "printer": {
                "id": 1
            }
        }
        console.log(body)

        swagger.post(`/terminal`, body)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    const getSwagger = async () => {
        await swagger.get(`/terminal`)
            .then(function (response) {
                console.log(response)
                setResponse(response)
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
                                    <Col sm={12} md={7} lg={7}>
                                        <Form.Row>
                                            <Form.Group as={Col} md={2} controlId="formGridEmail">
                                                <TextSmall>Nome:</TextSmall>
                                            </Form.Group>
                                            <Form.Group as={Col} md={10} controlId="formGridEmail">
                                                <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} onChange={onChangeName} value={name} />
                                            </Form.Group>
                                        </Form.Row>
                                    </Col>
                                    <Col sm={12} md={4} lg={4}>
                                        <Form.Row>
                                            <Form.Group as={Col} md={2} controlId="formGridEmail">
                                                <TextSmall>Ip:</TextSmall>
                                            </Form.Group>
                                            <Form.Group as={Col} md={10} controlId="formGridEmail">
                                                <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} onChange={onChangeIp} value={ip} />
                                            </Form.Group>
                                        </Form.Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} md={4} lg={4}>
                                        <Form.Group>
                                            <Form.Control as="select" onChange={onChangePrinter} value={printer}>
                                                <option>Impressora</option>
                                                <option>Impressora2</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={3} lg={3}>
                                        <Form.Group>
                                            <Form.Control as="select" onChange={onChangeRelease} value={release}>
                                                <option>Lançamento</option>
                                                <option>Lançamento2</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={1} lg={1}>
                                        <Form.Group>
                                            <Form.Check type="checkbox" label="Ativo" onChange={onChangeActive} value={active}/>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={2} lg={2}>
                                        <Form.Group>
                                            <Form.Check type="checkbox" label="Bloqueado" onChange={onChangeBlocked} value={blocked}/>
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
                                                        <th style={{ color: '#fa7f79' }}>IP</th>
                                                        <th style={{ color: '#fa7f79' }}>Impressora</th>
                                                        <th style={{ color: '#fa7f79' }}>Bloqueado</th>
                                                        <th style={{ color: '#fa7f79' }}>Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {response.map((response, index) => (
                                                        <tr>
                                                            <td>{response.name}</td>
                                                            <td>{response.ip}</td>
                                                            <td>{response.printer}</td>
                                                            <td>{response.block}</td>
                                                            <td><AiFillDelete/></td>
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

export default CadastroTerminal;