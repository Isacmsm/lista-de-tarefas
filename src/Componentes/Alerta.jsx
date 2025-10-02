// src/Componentes/Alerta.jsx

// A função recebe um objeto 'props' com os dados que o componente pai (App.jsx) enviou.
// Usamos { tipo, mensagem } para desestruturar e pegar as propriedades diretamente.
function Alerta({ tipo, mensagem }) {
    // Define a classe CSS com base no 'tipo' do alerta
    const classeDoAlerta = `alerta alerta-${tipo}`; // ex: "alerta alerta-success"
  
    return (
      <div className={classeDoAlerta}>
        {mensagem}
      </div>
    );
  }
  
  export default Alerta;