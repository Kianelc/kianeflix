import { useState } from "react";

function useForm(valoresIniciais) {
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
  function clearForm() {
    setValores(valoresIniciais);
  }
  return {
    valores,
    handleChange,
    clearForm
  };
}

export default useForm;
