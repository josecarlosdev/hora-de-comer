import React from 'react';
// import logo from './logo.svg';
import Login from './Login/Login';
import {  Switch, Route } from "react-router-dom";
// import Venda from './Home/Venda';
// import Recebimento from './Home/Recebimento';
import CadastroFilial from './pages/Filial';
import Home from './pages/Home'
import GlobalStyle from './styles/global'
import Mesa from './pages/Mesa';
import Delivery from './pages/Delivery';
import Pagamento from './pages/Pagamento';
import Operador from './pages/Operador';
import CadastroOperador from './pages/CadastroOperador';
import CadastroCatOperador from './pages/CadastroCatOperador';
import CadastroTerminal from './pages/CadastroTerminal';
import CadastroImpressora from './pages/CadastroImpressora';
import CadastroLogin from './pages/CadastroLogin';
import CadastroComentario from './pages/CadastroComentario';
import GrupoComanda from './pages/GrupoComanda';
import Home2 from './pages/Home2';
import CadastroProduto from './pages/CadastroProduto';



function App() {
  return (
  <>
    {/* <NavBar /> */}
      <Switch>
        {/* <Route path="/vendas" component={Venda} />
        <Route path="/recebimento" component={Recebimento} /> */}
        <Route path="/Filial" exact component={CadastroFilial} />
        <Route path="/Home" component={Home} /> 
        <Route path="/Home2" component={Home2} /> 
        <Route path="/Mesa" component={Mesa} />
        <Route path="/Delivery" component={Delivery} />
        <Route path="/Pagamento" component={Pagamento} />
        <Route path="/Operador" component={Operador} />
        <Route path="/CadastroOperador" component={CadastroOperador} />
        <Route path="/CadastroCatOperador" component={CadastroCatOperador} />
        <Route path="/CadastroTerminal" component={CadastroTerminal} />
        <Route path="/CadastroImpressora" component={CadastroImpressora} />
        <Route path="/CadastroLogin" component={CadastroLogin} />
        <Route path="/CadastroComentario" component={CadastroComentario} />
        <Route path="/GrupoDeComanda" component={GrupoComanda} />
        <Route path="/CadastroProduto" component={CadastroProduto} />
         <Route path="/" component={Login} />
      </Switch> 
      <GlobalStyle />
  </>
  );
}

export default App;
