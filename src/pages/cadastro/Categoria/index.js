import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#ffffff"
  };
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function handleChange(prop) {
    const name = prop.target.getAttribute("name") || "";
    const value = prop.target.value;
    //name: nome, descrição ou cor
    setValores({
      ...valores,
      [name]: value //nome: "valor"
    });
  }
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>
      <form
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
          setCategorias([...categorias, valores]);
          setValores(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria:"
          name="nome"
          type="text"
          value={valores.nome}
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
        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, index) => {
          return <li key={`${categoria}${index}`}>{categoria.nome}</li>;
        })}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
