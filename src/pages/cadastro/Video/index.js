import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import { ButtonGoBack, ButtonSave, ButtonEmpty } from "../../../components/Button";
import videoRepository from "../../../repositories/videos";
import categoriasRepository from "../../../repositories/categorias";
import "../Cadastro.css";

function CadastroVideo() {
  const history = useHistory();
  const valoresIniciais = {
    titulo: "",
    url: "",
    categoria: ""
  };
  const [categorias, setCategorias] = useState([]);
  const categoriaTitulo = categorias.map(({ titulo }) => titulo);
  const { handleChange, valores, clearForm } = useForm(valoresIniciais);
  useEffect(() => {
    categoriasRepository.getAll().then((categoriasDoServidor) => {
      setCategorias(categoriasDoServidor);
    });
  }, []);
  function handleSubmit(event) {
    event.preventDefault();
    const categoriaEscolhida = categorias.find(
      (categoria) => categoria.titulo === valores.categoria
    );
    videoRepository.create({
      titulo: valores.titulo,
      url: valores.url,
      categoriaId: categoriaEscolhida.id
    }).then(() => {
      history.push("/");
    });
  }
  function handleReset(event) {
    event.preventDefault();
    clearForm();
  }
  return (
    <PageDefault>
      <div className="Cadastro">
        <h1 className="Titulo">Novo vídeo</h1>
        <ButtonGoBack className="seta-esquerda" onClick={() => history.go(-1)}>
          Voltar
        </ButtonGoBack>
      </div>
      <form className="space">
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
        <ButtonSave onClick={handleSubmit}>
          Salvar
        </ButtonSave>
        <ButtonEmpty onClick={handleReset}>
          Limpar
        </ButtonEmpty>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;
