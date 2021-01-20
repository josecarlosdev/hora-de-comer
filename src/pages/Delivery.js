import React, { useState, useEffect } from 'react';
import { Text, Divider, TextSmall, TextSmall2, Text2, Text3 } from './styles';
import { Container, Row, Col, Button, Card, Form, Image } from 'react-bootstrap';
import swagger from '../services/swagger'
import NavBar from '../Navbar/NavBar';
import { Link } from "react-router-dom";
import Menu from '../Menu/Menu';
const axios = require('axios');
// import { Padding } from './styles';



const Delivery = () => {
    const [name, setName] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [phone, setphone] = useState('');
    const [serviceName, setServiceName] = useState('');
    const [deliveryFeeOne, setDeliveryFeeOne] = useState('');
    const [deliveryFeeTwo, setDeliveryFeeTwo] = useState('');
    const [deliveryFeeThree, setDeliveryFeeThree] = useState('');
    // Cadastro de Filial

    const onChangeName = event => {
        setName(event.target.value);
    };


    const onChangeFrom = event => {
        setFrom(event.target.value);
    };

    const onChangeTo = event => {
        setTo(event.target.value);
    };

    const onChangeServiceName = event => {
        setServiceName(event.target.value);
    };

    const onChangeDeliveryFeeOne = event => {
        setDeliveryFeeOne(event.target.value);
    };

    const onChangeDeliveryFeeTwo = event => {
        setDeliveryFeeTwo(event.target.value);
    };

    const onChangeDeliveryFeeThree = event => {
        setDeliveryFeeThree(event.target.value);
    };



    const handleSubmit = e => {
        // Para não carregar a página
        e.preventDefault()



        const body = {}


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

    useEffect(() => {
        getSwagger()
    }, [])

    return (
        <>
            <NavBar />
            <div className="p-2" />
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <Menu/>
                    </Col>
                    <Col sm={12} md={8} lg={8}>
                        <Card>
                            <Container>
                                <Row>
                                    <Col md={6} lg={6} sm={12} >
                                        <Form onSubmit={handleSubmit}>
                                            <div className="p-3" />
                                            <div className="p-3" >
                                                <Form.Row>
                                                    <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                        <TextSmall><b className="text-danger">*</b>Nome Venda</TextSmall>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                        <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} onChange={onChangeName} value={name} />
                                                    </Form.Group>
                                                </Form.Row>
                                                <Card style={{ borderRadius: '0.3rem', border: '1px solid #fa7f79' }}>
                                                    <div className="m-2" />
                                                    <div className="p-3" >
                                                        <Form.Row>
                                                            <Form.Group as={Col} md={3} controlId="formGridEmail">
                                                                <TextSmall2>De</TextSmall2>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md={9} controlId="formGridEmail">
                                                                <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} onChange={onChangeFrom} value={from}/>
                                                            </Form.Group>
                                                        </Form.Row>
                                                        <Form.Row>
                                                            <Form.Group as={Col} md={3} controlId="formGridEmail">
                                                                <TextSmall2>Até</TextSmall2>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md={9} controlId="formGridEmail" >
                                                                <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}  onChange={onChangeTo} value={to}/>
                                                            </Form.Group>
                                                        </Form.Row>
                                                    </div>

                                                    <h6 className="text-center"><TextSmall2>Tratar Serviço</TextSmall2></h6>
                                                </Card>
                                                <div className="m-2" />
                                                <div className="p-4">
                                                    <Row>
                                                        <Form.Check type="checkbox" />
                                                        <Form.Group controlId="formBasicCheckbox">
                                                            <Text>Habilitar Venda Mesa</Text>
                                                        </Form.Group>
                                                    </Row>
                                                </div>
                                            </div>
                                        </Form >
                                    </Col>
                                    <Col md={6} lg={6} sm={12}>
                                        <Form onSubmit={handleSubmit}>
                                            <div className="p-4" />
                                            <Form.Row>
                                                <Form.Group as={Col} md={5} controlId="formGridEmail">
                                                    <TextSmall><b className="text-danger">*</b> Nome Serviço</TextSmall>
                                                </Form.Group>
                                                <Form.Group as={Col} md={7} controlId="formGridEmail">
                                                    <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} 
                                                    onChange={onChangeServiceName} value={serviceName} />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group>
                                                    <TextSmall>Tx entrega 1:</TextSmall>
                                                </Form.Group>
                                                <Form.Group >
                                                    <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} 
                                                    as={Col} md={7} controlId="formGridEmail" onChange={onChangeDeliveryFeeOne} value={deliveryFeeOne}/>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group >
                                                    <TextSmall>Tx entrega 2:</TextSmall>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} 
                                                     as={Col} md={7} controlId="formGridEmail" onChange={onChangeDeliveryFeeTwo} value={deliveryFeeTwo}/>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group>
                                                    <TextSmall>Tx entrega 3:</TextSmall>
                                                </Form.Group>
                                                <Form.Group >
                                                    <Form.Control style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }} 
                                                    as={Col} md={5} controlId="formGridEmail" onChange={onChangeDeliveryFeeThree} value={deliveryFeeThree}/>
                                                </Form.Group>
                                            </Form.Row>
                                        </Form >
                                    </Col>
                                </Row>
                            </Container>
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

export default Delivery;