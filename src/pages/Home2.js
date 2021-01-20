import React, { useState, useEffect } from 'react';
import { Text, Divider, Text2, TextSmall, Text3 } from './styles';
import { Container, Row, Col, Button, Card, Form, Alert, Image } from 'react-bootstrap';
import Fechado from '../../src/images/fechado.png'
import Aberto from '../../src/images/aberto.png'
import Caixa from '../../src/images/caixaaberto.png'
import Delivery from '../../src/images/delivery.png'
import Mesa from '../../src/images/mesa.png'
import { Link } from "react-router-dom";
import { MdRestaurant } from 'react-icons/md';
import api from '../services/swagger'
import NavBar from '../Navbar/NavBar';
import Menu from '../Menu/Menu';
// import { Padding } from './styles';



const Home2 = () => {
    const [close, setClose] = useState(true)


    const handleInputChange = e => {

    }

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


        api.post(`/affiliate`, body)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }



    const getAPi = async () => {
        await api.get(`/affiliate`)
            .then(function (response) {
                console.log(response)
            })
    }

    useEffect(() => {
        getAPi()
    }, [])

    return (
        <>
            <NavBar />
            <div className="p-2" />
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <Menu />
                    </Col>
                    <Col sm={12} md={8} lg={8}>

                        <Card className="shadow-lg">
                            <div className="p-2" />
                            <Container>
                                <Row>
                                    <Col>
                                        <Card style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}>
                                            <div className="p-2">
                                                <Image src={Aberto} style={{ width: '230px', height: '200px' }}></Image>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}>
                                            <div className="p-2">
                                                <Image src={Caixa} style={{ width: '230px', height: '200px' }}></Image>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Card style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}>
                                            <div className="p-2">
                                                <Image src={Mesa} style={{ width: '230px', height: '200px' }}></Image>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{ borderRadius: '1.5rem', border: '1px solid #fa7f79' }}>
                                            <div className="p-2">
                                                <Image src={Delivery} style={{ width: '230px', height: '200px' }}></Image>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
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

export default Home2;