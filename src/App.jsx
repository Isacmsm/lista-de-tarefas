// App.jsx

import { useState } from 'react';
import Header from './Componentes/Header.jsx';
import Footer from './Componentes/Footer.jsx';
import ListaAlunos from './Componentes/ListaAlunos.jsx';
import Alerta from './Componentes/Alerta.jsx';
// 1. Importamos o novo formulário
import FormularioAdicionarAluno from './Componentes/FormularioAdicionarAluno.jsx';

const listaInicialAlunos = [
  { id: 1, nome: 'Ana Carolina' },
  { id: 2, nome: 'Bruno Gomes' },
];

function App() {
  const [alunos, setAlunos] = useState(listaInicialAlunos);
  // ... outros estados que já tínhamos ...
  const nome = "Isac"; 
  const [contador, setContador] = useState(0);
  const [alerta, setAlerta] = useState(null);

  // --- Funções de Alerta (sem alteração) ---
  function handleExibirAlertaVerde() {
    setAlerta({ tipo: 'success', mensagem: 'Operação realizada com sucesso!' });
  }
  function handleOcultarAlerta() {
    setAlerta(null);
  }
  // ... outras funções ...
  function handleClick() {
    setContador(contador + 1);
  }
  function handleExibirAlertaVermelho() {
    setAlerta({ tipo: 'error', mensagem: 'Ocorreu um erro na operação.' });
  }

  // --- Funções de Aluno ---
  function handleRemoverAluno(idDoAluno) {
    const novaLista = alunos.filter(aluno => aluno.id !== idDoAluno);
    setAlunos(novaLista);
    setAlerta({ tipo: 'error', mensagem: 'Aluno removido!' });
  }

  // 2. Nova função para ADICIONAR um aluno
  function handleAdicionarAluno(nomeDoNovoAluno) {
    const novoAluno = {
      // Usamos a data/hora atual para gerar um ID "único" simples
      id: Date.now(), 
      nome: nomeDoNovoAluno
    };

    // Criamos uma nova lista copiando todos os alunos antigos
    // e adicionando o novo no final.
    const novaLista = [...alunos, novoAluno];
    setAlunos(novaLista);
    setAlerta({ tipo: 'success', mensagem: 'Aluno adicionado com sucesso!' });
  }

  return (
    <>
      <Header />
      <hr />

      <h1>Boas-vindas, {nome}!</h1>
      {/* ... */}
      <p>Este é o seu primeiro projeto React.</p>
      <button onClick={handleClick}>Você clicou {contador} vezes</button>
      <hr />

      {alerta && <Alerta tipo={alerta.tipo} mensagem={alerta.mensagem} />}
      <button onClick={handleOcultarAlerta}>Ocultar Alerta</button>

      <hr />

      {/* 3. Adicionamos o formulário à tela, passando a função de adicionar */}
      <FormularioAdicionarAluno onAdicionarAluno={handleAdicionarAluno} />

      <hr />

      <ListaAlunos alunos={alunos} onRemoverAluno={handleRemoverAluno} />

      <Footer />
    </>
  );
}

export default App;