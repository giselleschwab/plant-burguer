import Botao from './Botao ';
import './CampoTexto.css';

const CampoTexto = () => {
  return (
     <div className="campo-texto">
      <h1> LOGIN </h1>
      <input placeholder='EMAIL'/>
      <input placeholder='SENHA' />
      <Botao texto="ENTRAR"/>
    </div>
  )
}

export default CampoTexto
