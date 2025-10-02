// src/Componentes/ListaAlunos.jsx
import CardAluno from './CardAluno.jsx';

// O componente agora recebe a lista de alunos e a função de remover via props.
function ListaAlunos({ alunos, onRemoverAluno }) {
  return (
    <div>
      <h2>Lista de Alunos</h2>
      {/* Para cada aluno na lista, renderizamos um componente CardAluno */}
      {alunos.map(aluno => (
        <CardAluno 
          key={aluno.id} 
          aluno={aluno} 
          onRemover={onRemoverAluno} 
        />
      ))}
    </div>
  );
}

export default ListaAlunos;