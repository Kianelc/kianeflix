import styled from "styled-components";

const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  background: var(--black);
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

export const ButtonSave = styled(Button)`
  background: var(--secondary);
  border-color: var(--secondary);
  width: 180px;
`;

export const ButtonEmpty = styled(ButtonSave)`
  background: var(--blackLighter);
  border-color: var(--blackLighter);
  color: var(--black);
  margin-left: 40px;
`;

export default Button;
