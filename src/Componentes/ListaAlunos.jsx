// src/Componentes/ListaAlunos.jsx

function ListaAlunos() {
    // Criamos um array (lista) de objetos. Cada objeto é um aluno.
    const alunos = [
      { id: 1, nome: 'Ana Carolina' },
      { id: 2, nome: 'Bruno Gomes' },
      { id: 3, nome: 'Carla Dias' },
      { id: 4, nome: 'Daniel Martins' }
    ];
  
    // Usamos a função .map() para transformar nossa lista de dados
    // em uma lista de elementos HTML.
    const listaDeAlunosNaTela = alunos.map(aluno => (
      <li key={aluno.id}>{aluno.nome}</li>
    ));
    // A 'key' é um identificador único que o React usa para otimizar a lista.
  
    return (
      <div>
        <h2>Lista de Alunos</h2>
        <ul>
          {listaDeAlunosNaTela}
        </ul>
      </div>
    );
  }
  
  export default ListaAlunos;