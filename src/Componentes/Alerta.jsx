// src/Componentes/Alerta.jsx


function Alerta({ tipo, mensagem }) {

    const classeDoAlerta = `alerta alerta-${tipo}`; 
  
    return (
      <div className={classeDoAlerta}>
        {mensagem}
      </div>
    );
  }
  
  export default Alerta;