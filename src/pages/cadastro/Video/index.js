import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import videoRepository from "../../../repositories/videos";
import categoriasRepository from "../../../repositories/categorias";

function CadastroVideo() {
  const history = useHistory();
  const valoresIniciais = {
    titulo: "Video padrão",
    url: "https://www.youtube.com/watch?v=jOAU81jdi-c",
    categoria: "Front End"
  };
  const [categorias, setCategorias] = useState([]);
  const categoriaTitulo = categorias.map(({ titulo }) => titulo);
  const { handleChange, valores } = useForm(valoresIniciais);
  useEffect(() => {
    categoriasRepository.getAll().then((categoriasDoServidor) => {
      setCategorias(categoriasDoServidor);
    });
  }, []);
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === valores.categoria;
        });
        videoRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: categoriaEscolhida
        }).then(() => {
          history.push("/");
        });
      }}
      >
        <FormField
          label="Título do Vídeo:"
          name="titulo"
          type="text"
          value={valores.titulo}
          onChange={handleChange}
        />
        <FormField
          label="URL:"
          name="url"
          type="text"
          value={valores.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria do Vídeo:"
          name="categoria"
          type="text"
          value={valores.categoria}
          onChange={handleChange}
          suggestions={categoriaTitulo}
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
