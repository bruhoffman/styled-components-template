import styled from "styled-components";

export const Botao = styled.button`
  background-color: orange;
  border: none;
  padding: 10px;
  margin-top: 5vh;
  &:hover {
    background-color: red;
  }
`;

export const GaragemContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80hv;
`;

export const Estacionamento = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 90%;
  width: 50%;
  align-items: center;
  justify-items: center;
  margin-top: 5vh;
  background-color: #7a717d;
  padding: 20px;
  border-radius: 10px;
`;
