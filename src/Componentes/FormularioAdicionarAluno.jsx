// src/Componentes/FormularioAdicionarAluno.jsx
import { useState } from 'react';

// O componente recebe a função de adicionar como prop
function FormularioAdicionarAluno({ onAdicionarAluno }) {
  // Estado local para controlar o valor do campo de input
  const [nomeAluno, setNomeAluno] = useState('');

  // Função chamada quando o formulário é enviado
  function handleSubmit(evento) {
    // Impede que o navegador recarregue a página (comportamento padrão do form)
    evento.preventDefault(); 

    // Validação simples para não adicionar nomes em branco
    if (!nomeAluno.trim()) {
      return;
    }

    // Chama a função que veio do App.jsx, passando o nome do novo aluno
    onAdicionarAluno(nomeAluno);

    // Limpa o campo de input após adicionar
    setNomeAluno('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Adicionar Novo Aluno</h3>
      <input 
        type="text" 
        placeholder="Nome do aluno"
        // O valor do input está ligado ao nosso estado
        value={nomeAluno}
        // Quando o usuário digita, o estado é atualizado
        onChange={(evento) => setNomeAluno(evento.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormularioAdicionarAluno;