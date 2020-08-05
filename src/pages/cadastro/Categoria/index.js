import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button, { ButtonSave, ButtonEmpty } from "../../../components/Button";
import useForm from "../../../hooks/useForm";
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
    if (window.location.href.includes("localhost")) {
      const URL = "http://localhost:8080/categorias";
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error("Não foi possível pegar os dados");
        });
    }
  }, []);
  function handleSubmit(info) {
    info.preventDefault();
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
      <ul className="space">
        {categorias.map((categoria) => <li key={`${categoria.titulo}`}>{categoria.titulo}</li>)}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
