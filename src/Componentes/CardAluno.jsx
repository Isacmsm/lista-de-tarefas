// src/Componentes/CardAluno.jsx


function CardAluno({ aluno, onRemover }) {
    return (
      <div className="card-aluno">
        <p>{aluno.nome}</p>
        
        <button onClick={() => onRemover(aluno.id)}>Remover</button>
      </div>
    );
  }
  
  export default CardAluno;