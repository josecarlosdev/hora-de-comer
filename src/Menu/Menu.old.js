import React from 'react';
import { Text, Divider, Text2, TextSmall, Text3 } from './styles';
import { Container, Row, Col, Button, Card, Form, Alert, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

// import { Container } from './styles';

function Menu() {
    return (
        <>
            <Card className="shadow-lg" style={{ borderRadius: '1.5rem' }}>
                <div className="p-1" />
                <a class="btn" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <Text2>CADASTRO</Text2>
                </a>

                <a class="btn" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                    <Text2>VENDAS</Text2>
                </a>

                <div class="collapse" id="collapseExample">
                    <div class="" style={{ borderRadius: '1.5rem' }}>
                        <Link to='/Filial'>
                            <Text3>FILIAIS</Text3>
                        </Link>
                        <Link to='/CadastroImpressora'>
                            <Text3>IMPRESSORAS</Text3>
                        </Link>
                        <Link to='/CadastroTerminal'>
                            <Text3>TERMINAIS</Text3>
                        </Link>
                        <Link to='/GrupoDeComanda'>
                            <Text3>GRUPO DE COMANDA</Text3>
                        </Link>
                        <Link to='/CadastroComentario'>
                            <Text3>COMENTÁRIO</Text3>
                        </Link>
                        <Link to='/CadastroProduto'>
                            <Text3>GRUPO DE PRODUTO</Text3>
                        </Link>
                        <Link to='/GrupoDeComanda'>
                            <Text3>PRODUTO</Text3>
                        </Link>
                        <Link to='/CadastroCatOperador'>
                            <Text3>Cat Operador</Text3>
                        </Link>
                    </div>
                </div>

                <div class="collapse" id="collapseExample2">
                    <div class="" style={{ borderRadius: '1.5rem' }}>
                        <Link to='/Mesa'>
                            <Text3>MESA</Text3>
                        </Link>
                        <Link to='/Delivery'>
                            <Text3>DELIVERY</Text3>
                        </Link>
                    </div>
                </div>
                <div className="p-5" />
                <div className="p-5" />

            </Card>
        </>
    )
}

export default Menu;