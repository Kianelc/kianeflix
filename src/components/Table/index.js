import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TableCategoria = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 2px solid var(--primary);
  margin-top: 31px;
  margin-bottom: 163px;
  border-radius: 4px;
  thead, th {
    font-size: 20px;
    color: var(--grayLight);
    border: 2px solid var(--primary);
  }
  td, th {
    text-align: left;
    padding: 8px;
  }
  td {
    font-size: 18px;
    border: 2px solid var(--primary);
    color: var(--grayMedium);
  }
`;

function Table({ categorias }) {
  return (
    <TableCategoria>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Editar</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        {categorias.map((categoria) => (
          <tr key={`${categoria.titulo}_${categoria.id}`}>
            <td>{categoria.titulo}</td>
            <td>{categoria.descricao}</td>
            <td>Editar</td>
            <td>Remover</td>
          </tr>
        ))}
      </tbody>
    </TableCategoria>
  );
}

Table.defaultProps = {
  categorias: []
};

Table.propTypes = {
  categorias: PropTypes.arrayOf(PropTypes.object)
};

export default Table;
