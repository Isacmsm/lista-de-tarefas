// App.jsx

import { useState } from 'react';
import Header from './Componentes/Header.jsx';
import Footer from './Componentes/Footer.jsx';
import ListaAlunos from './Componentes/ListaAlunos.jsx';
import Alerta from './Componentes/Alerta.jsx'; // 1. Importamos o Alerta

function App() {
  const nome = "Isac"; 
  const [contador, setContador] = useState(0);

  // 2. Novo estado para o alerta. 'null' significa que não há alerta visível.
  const [alerta, setAlerta] = useState(null);

  function handleClick() {
    setContador(contador + 1);
  }

  // 3. Funções para mostrar/ocultar os alertas
  function handleExibirAlertaVerde() {
    setAlerta({ tipo: 'success', mensagem: 'Operação realizada com sucesso!' });
  }

  function handleExibirAlertaVermelho() {
    setAlerta({ tipo: 'error', mensagem: 'Ocorreu um erro na operação.' });
  }

  function handleOcultarAlerta() {
    setAlerta(null);
  }

  return (
    <>
      <Header />
      <hr />

      <h1>Boas-vindas, {nome}!</h1>
      <p>Este é o seu primeiro projeto React.</p>
      <button onClick={handleClick}>Você clicou {contador} vezes</button>
      <hr />

      {/* 4. Renderização Condicional do Alerta */}
      {/* A sintaxe {alerta && ...} significa: "Se 'alerta' não for nulo, renderize o que vem depois" */}
      {alerta && <Alerta tipo={alerta.tipo} mensagem={alerta.mensagem} />}

      {/* 5. Botões para controlar os alertas */}
      <button onClick={handleExibirAlertaVerde}>Exibir Alerta Verde</button>
      <button onClick={handleExibirAlertaVermelho}>Exibir Alerta Vermelho</button>
      <button onClick={handleOcultarAlerta}>Ocultar Alerta</button>

      <hr />
      <ListaAlunos />
      <Footer />
    </>
  );
}

export default App;