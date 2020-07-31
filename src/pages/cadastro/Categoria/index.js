import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: ""
  };
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor //nome: "valor"
    });
  }

  function handleChange(prop) {
    const { getAttribute, value } = prop.target;
    setValor(getAttribute("name"), value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>
      <form
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
          setCategorias([...categorias, valores]);
          setValor(valoresIniciais);
        }}
      >
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              name="nome"
              value={valores.nome}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={valores.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input
              type="color"
              value={valores.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div>
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
