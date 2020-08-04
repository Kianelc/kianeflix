import React from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import videoRepository from "../../../repositories/videos";

function CadastroVideo() {
  const history = useHistory();
  const valoresIniciais = {
    titulo: "Video padrão",
    url: "https://www.youtube.com/watch?v=jOAU81jdi-c",
    categoria: "Front End"
  };
  const { handleChange, valores } = useForm(valoresIniciais);
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        videoRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: 1
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
