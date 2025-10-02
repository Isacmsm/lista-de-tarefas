// src/Componentes/CardAluno.jsx

// Este componente recebe dois props:
// 'aluno' -> O objeto com os dados do aluno (id, nome).
// 'onRemover' -> A função que será chamada quando o botão for clicado.
function CardAluno({ aluno, onRemover }) {
    return (
      <div className="card-aluno">
        <p>{aluno.nome}</p>
        {/* Ao clicar, chamamos a função 'onRemover' que recebemos via props,
            passando o ID do aluno que queremos remover. */}
        <button onClick={() => onRemover(aluno.id)}>Remover</button>
      </div>
    );
  }
  
  export default CardAluno;