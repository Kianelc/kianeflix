import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Table from "../../../components/Table";
import Button, { ButtonSave, ButtonEmpty } from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import categoriasRepository from "../../../repositories/categorias";
import "../Cadastro.css";

function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    titulo: "",
    descricao: "",
    cor: "#FFBA05"
  };
  const { handleChange, valores, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasDoServidor) => {
      setCategorias(categoriasDoServidor);
    });
  }, []);
  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([...categorias, valores]);
    clearForm();
  }

  function handleReset(event) {
    event.preventDefault();
    clearForm();
  }

  return (
    <PageDefault>
      <div className="Cadastro">
        <h1 className="Titulo">Nova categoria</h1>
        <Button className="seta-esquerda" onClick={() => history.go(-1)}>
          Voltar
        </Button>
      </div>
      <form>
        <FormField
          label="Nome da Categoria:"
          name="titulo"
          type="text"
          value={valores.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Descrição:"
          name="descricao"
          type="textarea"
          value={valores.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor:"
          name="cor"
          type="color"
          value={valores.cor}
          onChange={handleChange}
        />
        <ButtonSave onClick={handleSubmit}>
          Salvar
        </ButtonSave>
        <ButtonEmpty onClick={handleReset}>
          Limpar
        </ButtonEmpty>
      </form>
      <Table categorias={categorias} className="space" />
    </PageDefault>
  );
}

export default CadastroCategoria;
