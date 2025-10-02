// Header.jsx
// Este é um componente de React. Um componente é simplesmente uma função
// que retorna um bloco de HTML (na forma de JSX).

function Header() {
    // O 'return' define a aparência do nosso cabeçalho.
    return (
      <header>
        <h1>Minha Lista de Tarefas</h1>
      </header>
    );
  }
  
  // 'export default' permite que outros arquivos, como o App.jsx,
  // possam importar e usar este componente Header.
  export default Header;