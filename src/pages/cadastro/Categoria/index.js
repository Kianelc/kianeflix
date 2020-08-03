import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

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
    const { value } = prop.target;
    // name: nome, descrição ou cor
    setValores({
      ...valores,
      [name]: value // nome: "valor"
    });
  }

  useEffect(() => {
    const URL = "http://localhost:8080/categorias";
    fetch(URL).then(async (response) => {
      const resposta = await response.json();
      setCategorias([...resposta]);
    });
  });

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {" "}
        {valores.nome}
      </h1>
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
        <Button>
          Cadastrar
        </Button>
      </form>
      <ul>
        {categorias.map((categoria, index) => <li key={`${categoria}${index}`}>{categoria.titulo}</li>)}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
