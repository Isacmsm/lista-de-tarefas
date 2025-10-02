// src/Componentes/FormularioAdicionarAluno.jsx
import { useState } from 'react';


function FormularioAdicionarAluno({ onAdicionarAluno }) {
  
  const [nomeAluno, setNomeAluno] = useState('');

  
  function handleSubmit(evento) {
    
    evento.preventDefault(); 

    
    if (!nomeAluno.trim()) {
      return;
    }

    
    onAdicionarAluno(nomeAluno);

    
    setNomeAluno('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Adicionar Novo Aluno</h3>
      <input 
        type="text" 
        placeholder="Nome do aluno"
        
        value={nomeAluno}
        
        onChange={(evento) => setNomeAluno(evento.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormularioAdicionarAluno;