import styled from "styled-components";

const Button = styled.button`
  color: var(--white);
  background: var(--black);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export const ButtonGoBack = styled(Button)`
  border: none;
`;

export const ButtonSave = styled(Button)`
  background: var(--secondary);
  border: none;
  width: 180px;
`;

export const ButtonEmpty = styled(ButtonSave)`
  background: var(--blackLighter);
  border: none;
  color: var(--black);
  margin-left: 40px;
`;

export default Button;
