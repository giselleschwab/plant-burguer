/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { funcionario, deleteFuncionario } from '../../API/users';
import styles from './Funcionario.modules.css';
import Logo from '../../componentes/Logo';
import FormModal from '../../componentes/FormModal/FormModal';

function Funcionario() {
  const [funcionarios, setFuncionarios] = useState([]);
  // const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await funcionario();
      const listaFuncionario = response.data;
      setFuncionarios(listaFuncionario);
      console.log(listaFuncionario);
    }
    fetchData();
  }, []);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  const editarFuncionario = () => {
    // setFuncionarioSelecionado(funcionario);
    //abre modal
    
  };

  const excluirFuncionario = async (item) => {
    setMensagem('');
    try {
      await deleteFuncionario(item.id);
      setFuncionarios((prevFuncionarios) => prevFuncionarios.filter((colaborador) => colaborador.id !== item.id));
      setMensagem('Funcionário Excluído com Sucesso');
      abrirModal();
      // fetchData(); // Atualiza a lista de funcionários após a exclusão
    } catch (error) {
      console.log(error);
      setMensagem('Não foi possível excluir o funcionário');
      abrirModal();
    }
  };

  return (
    <>
      <Logo />
      <div className="consultaFuncionario">
        <section className={styles.funcionario}>
          <div className="opcao">
            <span>E-mail</span>
            <span>Cargo</span>
            <span>ID</span>
            <span>Ação</span>
          </div>
          {funcionarios.map((item) => (
            <div className="itemFuncionario" key={item.id}>
              <span>{item.email}</span>
              <span>{item.role}</span>
              <span>{item.id}</span>
              <input
                type="image"
                className={styles.imgLixo}
                src="/imagens/icon-lixo.png"
                alt="icone lixo"
                onClick={() => excluirFuncionario(item)}
              />
              <button type="button" onClick={() => editarFuncionario(item)}>Editar</button>
            </div>
          ))}
          <Modal
            className="modal"
            overlayClassName="modal-fundo"
            isOpen={modalIsOpen}
            onRequestClose={fecharModal}
          >
            <div className="modal-conteudo">
              <p className="textoModal">{mensagem}</p>
              <button type="button" className="botao-ok" onClick={fecharModal}>
                OK
              </button>
            </div>
          </Modal>
          <FormModal />

          // funcionarioselecionado.email
          funcionarioselecionado.role
        </section>
      </div>
    </>
  );
}

export default Funcionario;
